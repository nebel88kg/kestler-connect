import Link from "next/link";
import Image from "next/image";
import { footerNav, siteConfig } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="border-t border-navy-light bg-navy text-white">
      <div className="container-custom section-padding">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-block rounded-xl bg-white p-3">
              <Image
                src="/images/logo.png"
                alt="Kestler Connect"
                width={160}
                height={56}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-sm text-accent-muted leading-relaxed">
              Verbindungen, die Wachstum schaffen.
            </p>
            <p className="mt-3 text-gray-400 leading-relaxed text-sm">
              Performance-Marketing, Webseiten und Social Media für Handwerk, Vereine und lokale Unternehmen.
            </p>
            <div className="mt-6 space-y-2 text-sm text-gray-400">
              <a href={`tel:${siteConfig.phone}`} className="block hover:text-accent transition-colors">
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="block hover:text-accent transition-colors">
                {siteConfig.email}
              </a>
            </div>
          </div>

          {footerNav.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 font-semibold text-accent">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-accent transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-navy-light pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Kestler Connect. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/impressum" className="hover:text-accent transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-accent transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
