import { COMPANY } from "@/constants/company";
import { renderOgImage } from "@/lib/og-image";

export const alt = `${COMPANY.divisions.catering} — ${COMPANY.contacts.location.city} party catering, pound cakes & rum infusion cakes`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    eyebrow: COMPANY.divisions.catering,
    title: "We cook,",
    accent: "You celebrate.",
    tagline: `Party pans, pound cakes & rum cakes. Free cake on ${COMPANY.pricing.cateringCakePromoThreshold}+ orders.`,
    image: "/images/hott-meals-rum-bundt-cake.jpg",
  });
}
