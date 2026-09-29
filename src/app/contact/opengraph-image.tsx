import { COMPANY } from "@/constants/company";
import { renderOgImage } from "@/lib/og-image";

export const alt = `Text or call ${COMPANY.name} to order custom apparel or catering`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    eyebrow: "Text or call to order",
    title: "Start your order.",
    accent: "Text or call.",
    tagline: `Text or call ${COMPANY.contacts.phone.display} — we reply within 24 hours.`,
    image: "/images/hott-minds-family-reunion.png",
  });
}
