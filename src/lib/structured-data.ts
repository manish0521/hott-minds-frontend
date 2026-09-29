import { COMPANY } from "@/constants/company";
import { CAKES, SAVORY_FEASTS } from "@/constants/catering";
import { FAQS } from "@/constants/faqs";
import { PRODUCTS } from "@/constants/products";
import { PAGES, SITE, absoluteUrl, type PageSeo } from "@/constants/site";
import type { CakeCategory, Product } from "@/types";

/**
 * schema.org JSON-LD for search engines and AI assistants. Entities get stable `@id`s so each
 * page's graph can reference the business and website defined once in the root layout.
 *
 * Only describe what the site actually shows — no reviews or ratings until real ones exist.
 */

type JsonLdNode = Record<string, unknown>;

const IDS = {
  business: absoluteUrl("/#business"),
  website: absoluteUrl("/#website"),
  apparel: absoluteUrl("/#apparel"),
  catering: absoluteUrl("/services#catering"),
  menu: absoluteUrl("/services#menu"),
};

const { location, phone, email } = COMPANY.contacts;

const ADDRESS = {
  "@type": "PostalAddress",
  addressLocality: location.city,
  addressRegion: location.region,
  addressCountry: location.country,
};

const CITY = { "@type": "City", name: `${location.city}, ${location.region}` };
const NATIONWIDE = { "@type": "Country", name: "United States" };

/** "$25.00" → "25.00" */
function toPrice(display: string): string {
  return display.replace(/[^0-9.]/g, "");
}

function graph(...nodes: JsonLdNode[]): JsonLdNode {
  return { "@context": "https://schema.org", "@graph": nodes };
}

function webPageNode(
  page: PageSeo,
  { type = "WebPage", image }: { type?: string; image?: string } = {}
): JsonLdNode {
  const url = absoluteUrl(page.path);
  return {
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    isPartOf: { "@id": IDS.website },
    about: { "@id": IDS.business },
    inLanguage: SITE.language,
    ...(image && { primaryImageOfPage: { "@type": "ImageObject", url: absoluteUrl(image) } }),
    ...(page.path !== "/" && { breadcrumb: { "@id": `${url}#breadcrumb` } }),
  };
}

function breadcrumbNode(page: PageSeo): JsonLdNode {
  const crumbs = [{ name: COMPANY.name, path: PAGES.home.path }, page];
  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(page.path)}#breadcrumb`,
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

function productNode(product: Product): JsonLdNode {
  const offer = (price: string, name?: string) => ({
    "@type": "Offer",
    ...(name && { name }),
    price: toPrice(price),
    priceCurrency: "USD",
    availability: "https://schema.org/MadeToOrder",
    seller: { "@id": IDS.business },
  });

  return {
    "@type": "Product",
    "@id": absoluteUrl(`/#product-${product.id}`),
    name: product.name,
    description: product.description,
    image: product.images
      ? product.images.map((image) => absoluteUrl(image.src))
      : absoluteUrl(product.image),
    sku: product.id,
    category: product.categoryLabel,
    brand: { "@type": "Brand", name: COMPANY.divisions.apparel },
    offers: product.youthPrice
      ? [offer(product.price, "Adult"), offer(product.youthPrice, "Youth")]
      : offer(product.price),
  };
}

function menuSection(name: string, type: CakeCategory): JsonLdNode {
  return {
    "@type": "MenuSection",
    name,
    hasMenuItem: CAKES.filter((cake) => cake.type === type).map((cake) => ({
      "@type": "MenuItem",
      name: cake.name,
      description: cake.description,
    })),
  };
}

/** Business + website entities, rendered once in the root layout. */
export function siteJsonLd(): JsonLdNode {
  return graph(
    {
      "@type": "LocalBusiness",
      "@id": IDS.business,
      name: COMPANY.name,
      legalName: COMPANY.legalName,
      alternateName: [COMPANY.divisions.apparel, COMPANY.divisions.catering],
      description: SITE.description,
      url: absoluteUrl("/"),
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/images/logo-mark.png"),
        width: 247,
        height: 256,
      },
      image: [
        absoluteUrl("/images/hott-minds-flame-tee.jpg"),
        absoluteUrl("/images/hott-meals-rum-bundt-cake.jpg"),
      ],
      telephone: phone.international,
      email: email.display,
      address: ADDRESS,
      areaServed: [CITY, NATIONWIDE],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: phone.international,
        email: email.display,
        areaServed: location.country,
        availableLanguage: "English",
      },
      knowsAbout: [
        "DTF printing",
        "Direct-to-film transfers",
        "UV-DTF printing",
        "Custom t-shirts",
        "Custom hoodies",
        "Custom caps",
        "Custom mugs and tumblers",
        "Family reunion shirts",
        "Event catering",
        "Pound cakes",
        "Rum cakes",
      ],
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: location.country,
        returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
      },
      department: [
        {
          "@type": "LocalBusiness",
          "@id": IDS.apparel,
          name: COMPANY.divisions.apparel,
          description:
            "Custom DTF (direct-to-film) apparel print studio: full-color tees, hoodies, caps, bags, and drinkware with no minimums and a 24-hour art proof.",
          url: absoluteUrl(PAGES.home.path),
          telephone: phone.international,
          address: ADDRESS,
          areaServed: [CITY, NATIONWIDE],
        },
        {
          "@type": "FoodEstablishment",
          "@id": IDS.catering,
          name: COMPANY.divisions.catering,
          description:
            "Party catering with hot buffet pans, homemade pound cakes, and rum infusion cakes for birthdays, reunions, repasts, and celebrations.",
          url: absoluteUrl(PAGES.services.path),
          telephone: phone.international,
          address: ADDRESS,
          areaServed: CITY,
          servesCuisine: ["Southern", "Barbecue", "Desserts"],
          hasMenu: { "@id": IDS.menu },
        },
      ],
      ...(COMPANY.contacts.profiles.length > 0 && { sameAs: COMPANY.contacts.profiles }),
    },
    {
      "@type": "WebSite",
      "@id": IDS.website,
      url: absoluteUrl("/"),
      name: COMPANY.name,
      alternateName: [COMPANY.divisions.apparel, COMPANY.legalName],
      description: SITE.description,
      publisher: { "@id": IDS.business },
      inLanguage: SITE.language,
    }
  );
}

export function homeJsonLd(): JsonLdNode {
  return graph(webPageNode(PAGES.home, { image: "/images/hott-minds-flame-tee.jpg" }), {
    "@type": "Service",
    "@id": absoluteUrl("/#dtf-printing"),
    name: "Custom DTF apparel printing",
    serviceType: "Custom apparel printing",
    description: `Full-color direct-to-film (DTF) printing on tees, hoodies, caps, bags, and drinkware. No minimums, no color setup fees, ${COMPANY.operations.proofTurnaround.toLowerCase()}, 3-5 day turnaround, and 60+ wash durability. Adult shirts ${COMPANY.pricing.adultTee}, youth shirts ${COMPANY.pricing.youthTee}, full-back printing ${COMPANY.pricing.fullBackAddon}.`,
    provider: { "@id": IDS.apparel },
    areaServed: [CITY, NATIONWIDE],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Featured apparel & goods",
      itemListElement: PRODUCTS.map(productNode),
    },
  });
}

export function servicesJsonLd(): JsonLdNode {
  return graph(
    webPageNode(PAGES.services, { image: "/images/hott-meals-rum-bundt-cake.jpg" }),
    breadcrumbNode(PAGES.services),
    {
      "@type": "Service",
      "@id": absoluteUrl("/services#catering-service"),
      name: `${COMPANY.divisions.catering} catering`,
      serviceType: "Event catering",
      description:
        "Hot buffet party pans, homemade pound cakes, and rum infusion cakes prepared fresh to order for birthdays, reunions, parties, repasts, and celebrations.",
      provider: { "@id": IDS.catering },
      areaServed: CITY,
      offers: {
        "@type": "Offer",
        name: "Free whole pound cake with catering",
        description: `Catering orders over ${COMPANY.pricing.cateringCakePromoThreshold} get a free whole homemade pound cake (Lemon, Vanilla, Butter, or Sweet Potato). Excludes infusion cakes.`,
        price: "0",
        priceCurrency: "USD",
        eligibleTransactionVolume: {
          "@type": "PriceSpecification",
          minPrice: toPrice(COMPANY.pricing.cateringCakePromoThreshold),
          priceCurrency: "USD",
        },
      },
    },
    {
      "@type": "Menu",
      "@id": IDS.menu,
      name: `${COMPANY.divisions.catering} Catering & Cake Menu`,
      url: absoluteUrl("/services#catering-menu"),
      hasMenuSection: [
        {
          "@type": "MenuSection",
          name: "Hot Party Pans",
          description: "Half pans serve 10-12 guests; full pans serve 20-25 guests.",
          hasMenuItem: SAVORY_FEASTS.map((item) => ({
            "@type": "MenuItem",
            name: item.title,
            description: `${item.desc} Sizes: ${item.serves}.`,
          })),
        },
        menuSection("Homemade Pound Cakes", "pound"),
        menuSection("Rum Infusion Cakes", "infusion"),
      ],
    }
  );
}

export function contactJsonLd(): JsonLdNode {
  return graph(webPageNode(PAGES.contact, { type: "ContactPage" }), breadcrumbNode(PAGES.contact), {
    "@type": "FAQPage",
    "@id": `${absoluteUrl(PAGES.contact.path)}#faq`,
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  });
}
