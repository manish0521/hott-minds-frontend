import { COMPANY } from "@/constants/company";
import type { Product } from "@/types";

export const PRODUCTS: Product[] = [
  {
    id: "tee-flame",
    name: `${COMPANY.divisions.apparel} Signature Flame Tee`,
    category: "shirts",
    categoryLabel: "Shirts",
    price: COMPANY.pricing.adultTee,
    youthPrice: COMPANY.pricing.youthTee,
    image: "/images/hott-minds-flame-tee.jpg",
    badge: "Best Seller",
    description:
      "Heavyweight 100% ring-spun cotton with ultra-crisp DTF flame graphics. Breathable, vibrant, and soft to the touch.",
    specs: [
      `Adult: ${COMPANY.pricing.adultTee}`,
      `Youth: ${COMPANY.pricing.youthTee}`,
      `Full-back print: ${COMPANY.pricing.fullBackAddon}`,
      "60+ wash durability",
    ],
  },
  {
    id: "hoodie-urban",
    name: "Urban Vanguard Heavyweight Hoodie",
    category: "hoodies",
    categoryLabel: "Hoodies",
    price: "$42.00",
    image: "/images/hott-minds-flame-hoodie.jpg",
    images: [
      { src: "/images/hott-minds-flame-hoodie.jpg", label: "Front" },
      { src: "/images/hott-minds-flame-hoodie-back.png", label: "Back" },
    ],
    badge: "Streetwear",
    description:
      "Ultra-thick 450 GSM fleece hoodie with double-needle stitching, metal eyelets, and premium full-color chest transfer.",
    specs: [
      "Oversized streetwear drape",
      "Full front pouch pocket",
      "Resists cracking & fading",
      "Sizes S to 4XL",
    ],
  },
  {
    id: "cap-flame",
    name: "Flame Crest Structured Snapback Cap",
    category: "caps",
    categoryLabel: "Caps",
    price: "$18.00",
    image: "/images/hott-minds-logo-cap.png",
    badge: "Classic Fit",
    description:
      "Structured 6-panel high-crown snapback cap featuring bold fiery heat-pressed emblem. Adjustable snap closure.",
    specs: ["One size fits all", "Reinforced crown", "Vibrant colors", "Matches signature tees"],
  },
  {
    id: "tee-reunion",
    name: "Custom Family Reunion & Party Event Shirts",
    category: "shirts",
    categoryLabel: "Shirts",
    price: COMPANY.pricing.adultTee,
    youthPrice: COMPANY.pricing.youthTee,
    image: "/images/hott-minds-family-reunion.png",
    badge: "Event Special",
    description:
      "Full custom group printing for family reunions, birthdays, team trips, and memorial celebrations with front & back options.",
    specs: [
      "Discount on 12+ pieces",
      "Photo collages & names",
      `Adult (${COMPANY.pricing.adultTee}) & Youth (${COMPANY.pricing.youthTee})`,
      "24hr art proof",
    ],
  },
  {
    id: "drinkware-mugs",
    name: "Custom UV-DTF Coffee Mugs & Tumblers",
    category: "mugs",
    categoryLabel: "Mugs",
    price: "$16.00",
    image: "/images/hott-minds-logo-drinkware.png",
    badge: "Custom Gift",
    description:
      "Vibrant high-gloss UV-DTF transfers applied onto stainless steel tumblers or ceramic mugs. Water and fade resistant.",
    specs: [
      "Scratch resistant finish",
      "Full-wrap design support",
      "Custom names & logos",
      "Ideal party favor",
    ],
  },
];
