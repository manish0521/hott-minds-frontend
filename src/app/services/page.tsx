import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Gift,
  Sparkles,
  Utensils,
  Phone,
  FileText,
  Award,
  Layers,
  Flame,
  Shirt,
  MessageSquare,
} from "lucide-react";
import CakeMenu from "@/components/CakeMenu";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import Testimonials from "@/components/Testimonials";
import { COMPANY, getSmsLink } from "@/constants/company";
import { SAVORY_FEASTS } from "@/constants/catering";
import { PAGES } from "@/constants/site";
import { CATERING_TESTIMONIALS } from "@/constants/testimonials";
import { pageMetadata } from "@/lib/metadata";
import { servicesJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata(PAGES.services);

export default function ServicesPage() {
  return (
    <div className="bg-bone text-ink">
      <JsonLd data={servicesJsonLd()} />
      {/* HERO SECTION */}
      <PageHero
        eyebrow={`${COMPANY.divisions.catering} · ${COMPANY.contacts.location.city} Catering`}
        titleLine1="We cook,"
        titleLine2="You"
        titleAccent="Celebrate."
        intro="Catering for your day made easy — whether you need full savory celebration feast trays or homemade desserts and rum infusion cakes. For birthdays, reunions, parties, repasts, and celebrations."
        note={{
          label: "Special offer",
          text: `Orders over ${COMPANY.pricing.cateringCakePromoThreshold} get a free whole pound cake ($25+ value) — Lemon, Vanilla, Butter, or Sweet Potato. Excludes infusion cakes.`,
        }}
        primaryCta={{
          label: "Text to Order",
          href: getSmsLink(
            `Hi ${COMPANY.owners.combined}, I would like to inquire about ${COMPANY.divisions.catering} services`
          ),
        }}
        stats={[
          { label: "Made to order", value: "Fresh" },
          { label: "Pure butter", value: "100%" },
          { label: "Pan sizes", value: "Half & Full" },
          { label: "Guests per pan", value: "10-25" },
        ]}
        showcase={{
          image: "/images/hott-meals-rum-bundt-cake.jpg",
          alt: "Golden rum-glazed bundt cake with pecan crumble and a slice showing its tender crumb",
          title: "Rum Infusion Cakes",
          subtitle: "Hennessy & Aged Rum Reduction · Bundt Pans",
          action: {
            label: "Order",
            href: getSmsLink("Hi, I would like to order a Rum Infusion Cake"),
          },
        }}
      />

      {/* CONTINUOUS MARQUEE TICKER - exact parity with Home Page */}
      <div className="overflow-hidden border-y border-[#ff5c1a] bg-[#ff5c1a] py-3 text-white select-none">
        <div className="animate-marquee font-display flex items-center gap-8 text-sm tracking-widest whitespace-nowrap uppercase">
          <span>HOMEMADE POUND CAKES</span>
          <span>/</span>
          <span>RUM INFUSION CAKES</span>
          <span>/</span>
          <span>HOT PARTY BUFFET PANS</span>
          <span>/</span>
          <span>FREE CAKE ON $200+ ORDERS</span>
          <span>/</span>
          <span>BBQ CHICKEN &amp; RIBS</span>
          <span>/</span>
          <span>HOMEMADE POUND CAKES</span>
          <span>/</span>
          <span>RUM INFUSION CAKES</span>
          <span>/</span>
          <span>HOT PARTY BUFFET PANS</span>
          <span>/</span>
          <span>FREE CAKE ON $200+ ORDERS</span>
          <span>/</span>
          <span>BBQ CHICKEN &amp; RIBS</span>
          <span>/</span>
        </div>
      </div>

      {/* CATERING MENU & FLYER HIGHLIGHT SECTION - exact parity with Home Page Price Sheet */}
      <section
        id="catering-menu"
        className="scroll-mt-(--header-height) border-b border-[#e7ddd0] bg-[#f0e9dd] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[#2e2a27] bg-[#141210] p-8 text-[#faf6ef] sm:p-12">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              {/* Left Column: Menu Copy & Table */}
              <div className="space-y-6 lg:col-span-7">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#ff5c1a]/30 bg-[#ff5c1a]/10 px-3.5 py-1 text-xs font-bold tracking-wider text-[#ff5c1a] uppercase">
                  <FileText className="h-3.5 w-3.5 text-[#ff5c1a]" />
                  <span>Official Catering Menu &amp; Terms</span>
                </span>
                <h2 className="font-display text-3xl leading-none text-white uppercase sm:text-5xl">
                  HOMEMADE MEALS. <br />
                  <span className="text-[#ff5c1a]">SCRATCH-BAKED CAKES.</span>
                </h2>
                <p className="text-sm leading-relaxed text-[#faf6ef]/75 sm:text-base">
                  Authentic Southern recipes, pure sweet cream butter, and generous party portions
                  prepared fresh to order for family dinners, reunions, birthdays, and celebrations.
                </p>

                {/* Menu Table Card - matches Home Page price table */}
                <div className="divide-y divide-[#2e2a27] rounded-2xl border border-[#2e2a27] bg-[#1e1c1a] p-5">
                  <div className="flex items-center justify-between py-3">
                    <div>
                      <span className="font-display text-base text-white uppercase sm:text-lg">
                        Homemade Pound Cakes
                      </span>
                      <p className="text-xs text-[#faf6ef]/60">
                        Lemon, Vanilla, Butter, or Sweet Potato bundt cakes
                      </p>
                    </div>
                    <span className="text-xs font-bold text-white/80">
                      Free on {COMPANY.pricing.cateringCakePromoThreshold}+ Orders
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <div>
                      <span className="font-display text-base text-white uppercase sm:text-lg">
                        Gourmet Infusion Cakes
                      </span>
                      <p className="text-xs text-[#faf6ef]/60">
                        Hennessy, Caribbean Coffee, or Midnight Mocha Rum bundt
                      </p>
                    </div>
                    <span className="text-xs font-bold text-white/80">Available by order</span>
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <div>
                      <span className="font-display text-base text-white uppercase sm:text-lg">
                        Savory BBQ Chicken &amp; Ribs
                      </span>
                      <p className="text-xs text-[#faf6ef]/60">
                        Slow-smoked fire-grilled chicken quarters &amp; tender ribs
                      </p>
                    </div>
                    <span className="text-xs font-bold text-white/80">Half &amp; Full Pans</span>
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <div>
                      <span className="font-display text-base text-white uppercase sm:text-lg">
                        Southern Sides &amp; Breads
                      </span>
                      <p className="text-xs text-[#faf6ef]/60">
                        Baked Mac &amp; Cheese, Country Greens, Cornbread &amp; Potato Salad
                      </p>
                    </div>
                    <span className="text-xs font-bold text-white/80">Half &amp; Full Pans</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#ff5c1a]/40 bg-gradient-to-r from-[#ff5c1a]/15 via-amber-500/10 to-transparent p-4 text-xs text-amber-200">
                  <div className="flex items-center gap-2.5">
                    <Gift className="h-5 w-5 shrink-0 text-[#ff5c1a]" />
                    <span>
                      <strong className="text-white">Catering Perk:</strong> Spend{" "}
                      <span className="font-bold text-[#ff5c1a]">
                        {COMPANY.pricing.cateringCakePromoThreshold}
                      </span>{" "}
                      or more on catering party pans and receive 1 FREE whole homemade Pound Cake!
                      (Excludes infusion cakes).
                    </span>
                  </div>
                  <span className="font-bold text-white/90">{COMPANY.owners.combined}</span>
                </div>
              </div>

              {/* Right Column: Visual Flyer Card - matches Home Page official price sheet card */}
              <div className="space-y-4 lg:col-span-5">
                <div className="relative aspect-square overflow-hidden rounded-2xl border border-[#2e2a27] bg-white">
                  <Image
                    src="/images/hott-meals-enhanced-flyer.png"
                    alt="Hott Meals Instantly flyer: pound cakes, infused cakes, food and cookies. Orders over $200 get a free cake, excluding infusion cakes. Contact Ms. Tasha at 773-417-9901 to order."
                    fill
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="object-contain"
                  />
                </div>
                <p className="text-center text-xs text-[#faf6ef]/60">
                  Hott Meals Instantly (H.M.I) flyer &amp; ordering details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESSERT & CAKE MENU - exact parity with Home Page Catalog */}
      <CakeMenu />

      {/* SAVORY CELEBRATION FEAST CATERING - matches Why DTF dark cards on Home Page */}
      <section className="border-t border-[#2e2a27] bg-[#141210] py-20 text-[#faf6ef]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-bold tracking-wider text-[#ff5c1a] uppercase">
              <Utensils className="h-3.5 w-3.5 text-[#ff5c1a]" />
              <span>Hot Party Buffet Pans</span>
            </span>
            <h2 className="font-display mt-3 text-3xl leading-none text-white uppercase sm:text-5xl">
              HOT MEALS FOR <span className="text-[#ff5c1a]">REUNIONS &amp; PARTIES</span>
            </h2>
            <p className="mt-3 text-sm text-[#faf6ef]/70 sm:text-base">
              Take the stress out of hosting. We prepare hearty, flavorful party pans seasoned to
              perfection and delivered piping hot for your guests.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SAVORY_FEASTS.map((item, i) => (
              <div
                key={i}
                className="flex flex-col justify-between space-y-3 rounded-2xl border border-[#2e2a27] bg-[#1e1c1a] p-6"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#ff5c1a]/30 bg-[#ff5c1a]/15 text-[#ff5c1a]">
                      {i === 0 ? (
                        <Flame className="h-5 w-5" />
                      ) : i === 1 ? (
                        <Utensils className="h-5 w-5" />
                      ) : i === 2 ? (
                        <Award className="h-5 w-5" />
                      ) : i === 3 ? (
                        <Layers className="h-5 w-5" />
                      ) : (
                        <Sparkles className="h-5 w-5" />
                      )}
                    </div>
                    <span className="inline-flex w-fit items-center rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-bold tracking-wider text-white/80 uppercase">
                      Party Pan
                    </span>
                  </div>
                  <h3 className="font-display mt-3 text-lg text-white uppercase">{item.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#faf6ef]/70">{item.desc}</p>
                </div>
                <div className="border-t border-[#2e2a27] pt-2 text-xs font-semibold text-[#ff5c1a]">
                  {item.serves}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a
              href={COMPANY.contacts.phone.tel}
              className="flex items-center gap-2 rounded-xl bg-[#ff5c1a] px-6 py-3.5 text-xs font-bold tracking-wider text-white uppercase shadow-lg shadow-[#ff5c1a]/20 transition-all duration-200 hover:bg-[#ff7538] hover:shadow-[#ff5c1a]/35"
            >
              <Phone className="h-4 w-4" />
              <span>Call for Menu Customization</span>
            </a>
            <a
              href={getSmsLink(
                `Hi ${COMPANY.owners.combined}, I would like to order catering for an event`
              )}
              className="flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-xs font-bold tracking-wider text-white uppercase transition-colors hover:bg-white/10"
            >
              <MessageSquare className="h-4 w-4 text-white/70" />
              <span>Text to Order Catering</span>
            </a>
          </div>
        </div>
      </section>

      {/* COMBINED EVENT PACKAGES (SHIRTS + CATERING) - matches Home Page bottom CTA */}
      <section className="bg-bone border-t border-[#e7ddd0] py-20">
        <div className="mx-auto max-w-7xl space-y-6 px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-neutral-300 bg-neutral-100 px-3 py-1 text-[11px] font-bold tracking-wider text-neutral-700 uppercase">
            <Sparkles className="h-3.5 w-3.5 text-[#ff5c1a]" />
            <span>Complete Event Solutions</span>
          </span>
          <h2 className="text-ink font-display text-3xl leading-none uppercase sm:text-5xl">
            CUSTOM SHIRTS + CATERING FEAST BUNDLE
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-neutral-600 sm:text-base">
            Hosting a family reunion, birthday milestone, graduation, or corporate gathering? Get
            matching custom front-and-back shirts plus hot buffet catering all under one roof.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/"
              className="flex items-center gap-2 rounded-xl bg-[#141210] px-6 py-3 text-xs font-bold tracking-wider text-white uppercase transition-colors hover:bg-black"
            >
              <Shirt className="h-4 w-4" />
              <span>Browse Shirts Catalog</span>
            </Link>
            <a
              href={getSmsLink(
                `Hi ${COMPANY.owners.combined}, I would like custom shirts and catering for an event`
              )}
              className="flex items-center gap-2 rounded-xl bg-[#ff5c1a] px-6 py-3 text-xs font-bold tracking-wider text-white uppercase shadow-md shadow-[#ff5c1a]/20 transition-colors hover:bg-[#ff7538]"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Text to Order a Package</span>
            </a>
          </div>
        </div>
      </section>

      {/* CUSTOMER TESTIMONIALS */}
      <Testimonials
        eyebrow="Customer reviews"
        titleLine1="Straight from"
        titleLine2="our customers."
        testimonials={CATERING_TESTIMONIALS}
      />
    </div>
  );
}
