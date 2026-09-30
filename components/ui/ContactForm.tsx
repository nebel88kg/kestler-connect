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

const contactSchema = z
  .object({
    name: z.string().trim().min(2, "Bitte geben Sie Ihren Namen ein"),
    email: z
      .string()
      .trim()
      .refine((value) => value === "" || EMAIL_PATTERN.test(value), "Bitte geben Sie eine gültige E-Mail-Adresse ein"),
    phone: z.string().trim(),
    message: z.string().trim().max(3000, "Bitte fassen Sie sich etwas kürzer (max. 3000 Zeichen)"),
    /** Honeypot: für Menschen unsichtbar, Bots füllen es aus. */
    website: z.string(),
  })
  .refine((data) => data.email !== "" || data.phone.length >= 6, {
    message: "Bitte geben Sie E-Mail oder Telefonnummer an, damit wir Sie erreichen können",
    path: ["email"],
  });

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  className?: string;
  source?: string;
  compact?: boolean;
}

const inputClass =
  "w-full rounded-xl border border-gray-200 px-4 py-3 text-base transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

export function ContactForm({ className, source = "website", compact = false }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const uid = useId();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", message: "", website: "" },
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source }),
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
      <div role="status" className={cn("rounded-2xl bg-accent-light p-8 text-center", className)}>
        <div className="mb-2 text-4xl text-anthracite" aria-hidden="true">
          ✓
        </div>
        <h3 className="text-xl font-bold text-anthracite">Vielen Dank für Ihre Anfrage!</h3>
        <p className="mt-2 text-gray-700">Wir melden uns zeitnah bei Ihnen.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className={cn("space-y-4", className)}>
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

      <div className={cn("grid gap-4", compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2")}>
        <div>
          <label htmlFor={`${uid}-email`} className="mb-1 block text-sm font-medium text-anthracite">
            E-Mail
          </label>
          <input
            id={`${uid}-email`}
            type="email"
            autoComplete="email"
            aria-invalid={errors.email ? "true" : "false"}
            {...register("email")}
            className={inputClass}
            placeholder="ihre@email.de"
          />
          {errors.email && (
            <p role="alert" className="mt-1 text-sm text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor={`${uid}-phone`} className="mb-1 block text-sm font-medium text-anthracite">
            Telefon
          </label>
          <input
            id={`${uid}-phone`}
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            {...register("phone")}
            className={inputClass}
            placeholder="+49 ..."
          />
        </div>
      </div>
      <p className="-mt-2 text-xs text-gray-600">E-Mail oder Telefon genügt.</p>

      <div>
        <label htmlFor={`${uid}-message`} className="mb-1 block text-sm font-medium text-anthracite">
          Ihre Nachricht (optional)
        </label>
        <textarea
          id={`${uid}-message`}
          {...register("message")}
          rows={compact ? 3 : 4}
          className={inputClass}
          placeholder="Worum geht es? Z. B. Social Media, Google Ads, SEO oder Webseite."
        />
        {errors.message && (
          <p role="alert" className="mt-1 text-sm text-red-600">
            {errors.message.message}
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

      <Button type="submit" size="lg" className="w-full" disabled={status === "loading"}>
        {status === "loading" ? "Wird gesendet..." : "Kostenloses Erstgespräch anfragen"}
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
