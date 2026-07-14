import Link from "next/link";
import { footerNav, siteConfig } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-anthracite text-white">
      <div className="container-custom section-padding">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="text-2xl font-bold">
              Kestler <span className="text-accent">Connect</span>
            </Link>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Performance-Marketing, Webseiten und Social Media für Handwerk, Vereine und lokale Unternehmen.
            </p>
            <div className="mt-6 space-y-2 text-sm text-gray-400">
              <a href={`tel:${siteConfig.phone}`} className="block hover:text-white transition-colors">
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="block hover:text-white transition-colors">
                {siteConfig.email}
              </a>
            </div>
          </div>

          {footerNav.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-700 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Kestler Connect. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/impressum" className="hover:text-white transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
