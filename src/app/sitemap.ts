import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/constants/products";
import { PAGES, absoluteUrl } from "@/constants/site";

// Prerendered at build time, so lastModified is the deploy date. Google ignores
// changefreq/priority, so they're omitted.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: absoluteUrl(PAGES.home.path),
      lastModified,
      images: [
        ...PRODUCTS.flatMap((product) =>
          (product.images ?? [{ src: product.image }]).map((image) => absoluteUrl(image.src))
        ),
        absoluteUrl("/images/official-price-sheet.jpg"),
      ],
    },
    {
      url: absoluteUrl(PAGES.services.path),
      lastModified,
      images: [
        absoluteUrl("/images/hott-meals-rum-bundt-cake.jpg"),
        absoluteUrl("/images/hott-meals-enhanced-flyer.png"),
      ],
    },
    {
      url: absoluteUrl(PAGES.contact.path),
      lastModified,
    },
  ];
}
