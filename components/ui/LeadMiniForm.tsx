"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "./Button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/navigation";
import { trackEvent } from "@/lib/tracking";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Ein Feld für Telefon ODER E-Mail: mit "@" gilt es als E-Mail, sonst als Telefonnummer (min. 6 Ziffern). */
function isValidContact(value: string): boolean {
  const v = value.trim();
  if (v.includes("@")) return EMAIL_PATTERN.test(v);
  return v.replace(/\D/g, "").length >= 6;
}

const miniSchema = z.object({
  name: z.string().trim().min(2, "Bitte geben Sie Ihren Namen ein"),
  contact: z
    .string()
    .trim()
    .refine(isValidContact, "Bitte geben Sie eine gültige Telefonnummer oder E-Mail-Adresse an"),
  topic: z.string().trim().max(500, "Bitte fassen Sie sich etwas kürzer (max. 500 Zeichen)"),
  /** Honeypot: für Menschen unsichtbar, Bots füllen es aus. */
  website: z.string(),
});

type MiniFormData = z.infer<typeof miniSchema>;

interface LeadMiniFormProps {
  /** Wird als `source` an /api/contact gesendet und als `form_source` ins generate_lead-Event geschrieben. */
  source: string;
  submitLabel: string;
  /** Angebotsname – landet als Kontext in der Nachricht an uns. */
  offer?: string;
  topicPlaceholder?: string;
  className?: string;
}

const inputClass =
  "w-full rounded-xl border border-gray-200 px-4 py-3 text-base transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

/**
 * Mini-Formular (3 Felder) für Conversion-Landingpages.
 * Gleiche Logik wie components/ui/ContactForm.tsx: echtes <form> mit Submit-Button (Enter funktioniert),
 * POST an /api/contact, Honeypot, Fehler-Fallback (Telefon/WhatsApp/E-Mail) und
 * trackEvent("generate_lead") aus lib/tracking.ts erst nach erfolgreicher Antwort.
 */
export function LeadMiniForm({
  source,
  submitLabel,
  offer,
  topicPlaceholder = "z. B. Ihre Branche oder Ihr Anliegen",
  className,
}: LeadMiniFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const uid = useId();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MiniFormData>({
    resolver: zodResolver(miniSchema),
    defaultValues: { name: "", contact: "", topic: "", website: "" },
  });

  const onSubmit = async (data: MiniFormData) => {
    setStatus("loading");
    try {
      const contact = data.contact.trim();
      const isEmail = contact.includes("@");
      const message = [offer ? `Angebot: ${offer}` : "", data.topic ? `Branche/Anliegen: ${data.topic}` : ""]
        .filter(Boolean)
        .join("\n");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: isEmail ? contact : "",
          phone: isEmail ? "" : contact,
          message,
          website: data.website,
          source,
        }),
      });
      if (!res.ok) throw new Error("Fehler beim Senden");
      setStatus("success");
      // Conversion-Event für GTM/GA4/Google Ads (keine personenbezogenen Daten).
      trackEvent("generate_lead", { form_source: source });
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div role="status" className={cn("rounded-2xl bg-accent-light p-6 text-center", className)}>
        <div className="mb-2 text-4xl text-anthracite" aria-hidden="true">
          ✓
        </div>
        <h3 className="text-xl font-bold text-anthracite">Vielen Dank für Ihre Anfrage!</h3>
        <p className="mt-2 text-gray-700">Wir melden uns zeitnah bei Ihnen.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} method="post" noValidate className={cn("relative space-y-4", className)}>
      <div>
        <label htmlFor={`${uid}-name`} className="mb-1 block text-sm font-medium text-anthracite">
          Name *
        </label>
        <input
          id={`${uid}-name`}
          type="text"
          autoComplete="name"
          aria-invalid={errors.name ? "true" : "false"}
          {...register("name")}
          className={inputClass}
          placeholder="Ihr Name"
        />
        {errors.name && (
          <p role="alert" className="mt-1 text-sm text-red-600">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={`${uid}-contact`} className="mb-1 block text-sm font-medium text-anthracite">
          Telefon oder E-Mail *
        </label>
        <input
          id={`${uid}-contact`}
          type="text"
          inputMode="email"
          autoComplete="off"
          aria-invalid={errors.contact ? "true" : "false"}
          {...register("contact")}
          className={inputClass}
          placeholder="+49 … oder ihre@email.de"
        />
        {errors.contact && (
          <p role="alert" className="mt-1 text-sm text-red-600">
            {errors.contact.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={`${uid}-topic`} className="mb-1 block text-sm font-medium text-anthracite">
          Branche / Anliegen (optional)
        </label>
        <input
          id={`${uid}-topic`}
          type="text"
          autoComplete="off"
          {...register("topic")}
          className={inputClass}
          placeholder={topicPlaceholder}
        />
        {errors.topic && (
          <p role="alert" className="mt-1 text-sm text-red-600">
            {errors.topic.message}
          </p>
        )}
      </div>

      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor={`${uid}-website`}>Website (bitte leer lassen)</label>
        <input id={`${uid}-website`} type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-xl bg-red-50 p-3 text-sm text-red-700">
          Das Senden hat leider nicht geklappt. Bitte versuchen Sie es erneut – oder erreichen Sie uns direkt unter{" "}
          <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="font-semibold underline">
            {siteConfig.phone}
          </a>
          , per{" "}
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline"
          >
            WhatsApp
          </a>{" "}
          oder per E-Mail an{" "}
          <a href={`mailto:${siteConfig.email}`} className="font-semibold underline">
            {siteConfig.email}
          </a>
          .
        </p>
      )}

      <Button type="submit" size="lg" className="w-full text-center" disabled={status === "loading"}>
        {status === "loading" ? "Wird gesendet..." : submitLabel}
      </Button>
      <p className="text-xs leading-relaxed text-gray-600">
        Kostenlos und unverbindlich. Wir melden uns zeitnah. Ihre Angaben verwenden wir nur zur Bearbeitung Ihrer
        Anfrage – siehe{" "}
        <Link href="/datenschutz" className="underline hover:text-anthracite">
          Datenschutzerklärung
        </Link>
        .
      </p>
    </form>
  );
}
