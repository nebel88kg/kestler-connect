"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Bitte geben Sie Ihren Namen ein"),
  company: z.string().min(2, "Bitte geben Sie Ihre Firma ein"),
  phone: z.string().min(6, "Bitte geben Sie Ihre Telefonnummer ein"),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail ein"),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  className?: string;
  source?: string;
  compact?: boolean;
}

export function ContactForm({ className, source = "website", compact = false }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
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
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className={cn("rounded-2xl bg-accent-light p-8 text-center", className)}>
        <div className="mb-2 text-4xl">✓</div>
        <h3 className="text-xl font-bold text-anthracite">Vielen Dank!</h3>
        <p className="mt-2 text-gray-600">
          Wir melden uns innerhalb von 24 Stunden bei Ihnen.
        </p>
        <Button className="mt-4" variant="outline" onClick={() => setStatus("idle")}>
          Neues Formular
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn("space-y-4", className)}>
      <div className={cn("grid gap-4", compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2")}>
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-anthracite">
            Name *
          </label>
          <input
            id="name"
            {...register("name")}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            placeholder="Ihr Name"
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="company" className="mb-1 block text-sm font-medium text-anthracite">
            Firma *
          </label>
          <input
            id="company"
            {...register("company")}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            placeholder="Ihre Firma"
          />
          {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-anthracite">
            Telefonnummer *
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            placeholder="+49 ..."
          />
          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-anthracite">
            E-Mail *
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            placeholder="ihre@email.de"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
        </div>
      </div>
      {!compact && (
        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-anthracite">
            Nachricht (optional)
          </label>
          <textarea
            id="message"
            {...register("message")}
            rows={4}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            placeholder="Wie können wir Ihnen helfen?"
          />
        </div>
      )}
      {status === "error" && (
        <p className="text-sm text-red-500">Fehler beim Senden. Bitte versuchen Sie es erneut.</p>
      )}
      <Button type="submit" size="lg" className="w-full" disabled={status === "loading"}>
        {status === "loading" ? "Wird gesendet..." : "Kostenlose Potenzialanalyse sichern"}
      </Button>
    </form>
  );
}
