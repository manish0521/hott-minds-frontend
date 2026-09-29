import { COMPANY } from "@/constants/company";
import { renderOgImage } from "@/lib/og-image";

export const alt = `${COMPANY.divisions.apparel} — custom DTF shirts, hoodies, caps & mugs in ${COMPANY.contacts.location.city}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    eyebrow: `${COMPANY.contacts.location.city} DTF Print Studio`,
    title: "Your art,",
    accent: "Pressed perfect.",
    tagline: `Custom tees, hoodies, caps & mugs. No minimums. Adult tees ${COMPANY.pricing.adultTee}.`,
    image: "/images/hott-minds-flame-tee.jpg",
  });
}
