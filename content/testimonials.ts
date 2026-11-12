import type { Testimonial } from "./types";
import {
  buddysDuisburgLogo,
  dnmLogo,
  raffelbergLogo,
  signalFairsichertLogo,
} from "../lib/clientLogos";

/**
 * Freigegebene Kundenstimmen – Zitate immer wörtlich übernehmen.
 * name/role sind optional und können nachgetragen werden, sobald der Kunde sie freigibt.
 * Hinweis: Bewusst kein Review-/AggregateRating-Schema für diese Stimmen.
 */
export const dnmTestimonial: Testimonial = {
  company: "DnM – Dämmstoffe nach Maß",
  quote:
    "Super Zusammenarbeit mit Kestler Connect. Neben Social Media Videos haben wir einen klaren Leitfaden für LinkedIn und Instagram sowie Unterstützung bei SEO und SEA bekommen. Besonders stark: Mittlerweile sind wir bei Google auf Seite 1 zu finden und konnten dadurch bereits neue Kunden gewinnen. Klare Empfehlung!",
  logo: { src: dnmLogo.src, alt: dnmLogo.alt },
  referenzSlug: "dnm",
};

export const raffelbergTestimonial: Testimonial = {
  name: "Max",
  role: "Golfmanager",
  company: "Golfclub Raffelberg",
  excerpt:
    "Seit Jascha unser Social Media übernommen hat, hat sich unser gesamter Auftritt deutlich professionalisiert. Besonders beeindruckt hat uns die Kombination aus Meta Ads und Google Ads – unsere Kurse waren innerhalb kurzer Zeit sehr gut gebucht.",
  quote:
    "Ich kann Kestler Connect uneingeschränkt weiterempfehlen. Seit Jascha unser Social Media übernommen hat, hat sich unser gesamter Auftritt deutlich professionalisiert. Durch regelmäßige Reels, kreative Inhalte und eine klare Strategie wirken unsere Kanäle heute deutlich moderner und erreichen wesentlich mehr Menschen. Besonders beeindruckt hat uns die Kombination aus Meta Ads und Google Ads. Unsere Platzreife- und Schnuppergolf-Kurse waren innerhalb kurzer Zeit sehr gut gebucht und wir konnten viele neue Interessenten für den Golfsport gewinnen. Zusätzlich wurden Google Ads für unsere Firmenfeiern geschaltet, die ebenfalls für eine hervorragende Resonanz und zahlreiche Anfragen gesorgt haben. Was uns besonders gefällt, ist die zuverlässige Zusammenarbeit, die schnelle Umsetzung und dass jede Maßnahme nachvollziehbar und zielorientiert ist. Man merkt einfach, dass hier nicht nur Werbung gemacht wird, sondern dass ein echtes Konzept dahinter steckt. Vielen Dank für die großartige Zusammenarbeit. Wir freuen uns auf viele weitere gemeinsame Projekte!",
  logo: { src: raffelbergLogo.src, alt: raffelbergLogo.alt },
  referenzSlug: "golfclub-raffelberg",
};

export const buddysTestimonial: Testimonial = {
  name: "Simone",
  company: "Buddy's Duisburg",
  quote:
    "Wir sind super zufrieden mit der Zusammenarbeit! Die beiden Jungs sind ein junges, sympathisches Team mit richtig coolen und modernen Ideen. Die Zusammenarbeit ist locker, unkompliziert und macht Spaß. Sie kümmern sich um unsere Videos und den Social-Media-Auftritt. Dabei bringen sie immer wieder kreative Ideen ein. Besonders gut gefällt uns, dass sie sich Gedanken machen und genau schauen, was zu unserer Branche und Zielgruppe passt. Man merkt, dass die beiden mit Leidenschaft dabei sind. Wir können sie absolut weiterempfehlen!",
  logo: { src: buddysDuisburgLogo.src, alt: buddysDuisburgLogo.alt },
};

export const signalIdunaTestimonial: Testimonial = {
  name: "Kai Murek",
  company: "Signal Iduna",
  quote:
    "Haben gerade die Zusammenarbeit begonnen und ich bin sehr zufrieden👌🏻 Kreative Ideen, schnelle und faire Umsetzung. Weiter so. Klare Empfehlung!",
  logo: { src: signalFairsichertLogo.src, alt: signalFairsichertLogo.alt },
};

/** Reihenfolge = Reihenfolge auf der Startseite */
export const testimonials: Testimonial[] = [
  dnmTestimonial,
  raffelbergTestimonial,
  signalIdunaTestimonial,
  buddysTestimonial,
];

/** Angabe unter dem Zitat: mit Name → Name + "Rolle, Firma"; ohne Name → Firma (+ ggf. Rolle). */
export function getTestimonialAttribution(t: Testimonial): { primary: string; secondary?: string } {
  if (t.name) {
    return {
      primary: t.name,
      secondary: [t.role, t.company].filter(Boolean).join(", "),
    };
  }
  return { primary: t.company, secondary: t.role };
}
