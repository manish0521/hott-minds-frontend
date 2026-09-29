import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Flame,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  MessageSquare,
  ArrowRight,
  FileText,
  Clock,
  Truck,
  Palette,
  Zap,
  Info,
  Gift,
  ChefHat,
} from "lucide-react";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import ProductCatalog from "@/components/ProductCatalog";
import { QuickViewProvider } from "@/components/QuickView";
import Testimonials from "@/components/Testimonials";
import { COMPANY } from "@/constants/company";
import { PRODUCTS } from "@/constants/products";
import { PAGES } from "@/constants/site";
import { APPAREL_TESTIMONIALS } from "@/constants/testimonials";
import { pageMetadata } from "@/lib/metadata";
import { homeJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata(PAGES.home);

export default function Home() {
  return (
    <QuickViewProvider>
      <JsonLd data={homeJsonLd()} />
      <div className="bg-bone text-ink">
        {/* HERO SECTION */}
        <PageHero
          eyebrow={`${COMPANY.divisions.apparel} · ${COMPANY.contacts.location.city} DTF Print Studio`}
          titleLine1="Your art,"
          titleLine2="Pressed"
          titleAccent="Perfect."
          intro="Full-color custom DTF apparel printing on premium tees, hoodies, caps, bags, and drinkware. Local hand-pressed quality in Chicago with nationwide shipping. Soft-hand transfers that stretch, survive 60+ washes and never crack."
          note={{
            label: "Every order",
            text: "No color setup fees, ultra-crisp detail, and a 60+ wash guarantee.",
          }}
          primaryCta={{ label: "Text to Order", href: COMPANY.contacts.phone.sms }}
          stats={[
            { label: "Art proof", value: "24 hr" },
            { label: "Turnaround", value: "3-5 days" },
            { label: "Order minimum", value: "None" },
            { label: "Wash tested", value: "60+" },
          ]}
          showcase={{
            image: "/images/hott-minds-flame-tee.jpg",
            alt: "Designs by Hott Minds Signature Flame T-Shirt",
            title: "Signature Flame T-Shirt",
            subtitle: `${COMPANY.pricing.adultTee} Adult · ${COMPANY.pricing.youthTee} Youth`,
            action: { label: "Quick view", product: PRODUCTS[0] },
          }}
        />

        {/* MARQUEE - validated against PDF Page 3 */}
        <div className="overflow-hidden border-y border-[#ff5c1a] bg-[#ff5c1a] py-3 text-white select-none">
          <div className="animate-marquee font-display flex items-center gap-8 text-sm tracking-widest whitespace-nowrap uppercase">
            <span>NO MINIMUMS</span>
            <span>/</span>
            <span>FULL-COLOR DTF</span>
            <span>/</span>
            <span>24-HOUR PROOFS</span>
            <span>/</span>
            <span>SHIRTS, HOODIES, CAPS &amp; MUGS</span>
            <span>/</span>
            <span>LOCAL HAND-PRESSED</span>
            <span>/</span>
            <span>60+ WASH DURABILITY</span>
            <span>/</span>
            <span>NO MINIMUMS</span>
            <span>/</span>
            <span>FULL-COLOR DTF</span>
            <span>/</span>
            <span>24-HOUR PROOFS</span>
            <span>/</span>
            <span>SHIRTS, HOODIES, CAPS &amp; MUGS</span>
            <span>/</span>
            <span>LOCAL HAND-PRESSED</span>
            <span>/</span>
            <span>60+ WASH DURABILITY</span>
            <span>/</span>
          </div>
        </div>

        {/* OFFICIAL PRICE LIST & FLYER HIGHLIGHT SECTION */}
        <section className="border-b border-[#e7ddd0] bg-[#f0e9dd] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-[#2e2a27] bg-[#141210] p-8 text-[#faf6ef] sm:p-12">
              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
                {/* Left Column: Official Price Sheet Copy */}
                <div className="space-y-6 lg:col-span-7">
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#ff5c1a]/30 bg-[#ff5c1a]/10 px-3.5 py-1 text-xs font-bold tracking-wider text-[#ff5c1a] uppercase">
                    <FileText className="h-3.5 w-3.5 text-[#ff5c1a]" />
                    <span>Official Standard Price Sheet</span>
                  </span>
                  <h2 className="font-display text-3xl leading-none text-white uppercase sm:text-5xl">
                    CLEAR PRICING. <br />
                    <span className="text-[#ff5c1a]">ZERO HIDDEN SETUP FEES.</span>
                  </h2>
                  <p className="text-sm leading-relaxed text-[#faf6ef]/75 sm:text-base">
                    We specialize in custom DTF heat-press printing for parties, family reunions,
                    school events, sports teams, and personal brands. DTF your shirts, bags, mugs,
                    and more!
                  </p>

                  {/* Price Table Card */}
                  <div className="divide-y divide-[#2e2a27] rounded-2xl border border-[#2e2a27] bg-[#1e1c1a] p-5">
                    <div className="flex items-center justify-between py-3">
                      <div>
                        <span className="font-display text-base text-white uppercase sm:text-lg">
                          Adult Shirt
                        </span>
                        <p className="text-xs text-[#faf6ef]/60">
                          Heavyweight cotton, front print included
                        </p>
                      </div>
                      <span className="font-display text-2xl text-[#ff5c1a]">
                        {COMPANY.pricing.adultTee}
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-3">
                      <div>
                        <span className="font-display text-base text-white uppercase sm:text-lg">
                          Youth Shirt
                        </span>
                        <p className="text-xs text-[#faf6ef]/60">
                          Comfort-fit cotton for kids &amp; youth sizes
                        </p>
                      </div>
                      <span className="font-display text-2xl text-[#ff5c1a]">
                        {COMPANY.pricing.youthTee}
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-3">
                      <div>
                        <span className="font-display text-base text-white uppercase sm:text-lg">
                          Full-Back Printing
                        </span>
                        <p className="text-xs text-[#faf6ef]/60">
                          Large rear graphic (price varies with image size)
                        </p>
                      </div>
                      <span className="font-display text-2xl text-[#ff884d]">
                        {COMPANY.pricing.fullBackAddon}
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-3">
                      <div>
                        <span className="font-display text-base text-white uppercase sm:text-lg">
                          Hoodies, Caps &amp; Mugs
                        </span>
                        <p className="text-xs text-[#faf6ef]/60">
                          Custom apparel &amp; UV-DTF hard goods
                        </p>
                      </div>
                      <span className="text-sm font-bold text-white/80">Available by order</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-xs text-amber-300">
                    <span className="flex items-center gap-2">
                      <Info className="h-4 w-4 shrink-0 text-amber-400" />
                      <span>
                        <strong>Important:</strong> Text orders and all pictures must be clear.{" "}
                        {COMPANY.operations.salesPolicyNotice}
                      </span>
                    </span>
                    <span className="font-bold text-white">{COMPANY.owners.combined}</span>
                  </div>
                </div>

                {/* Right Column: Visual Mockup Card */}
                <div className="space-y-4 lg:col-span-5">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-[#2e2a27] bg-[#1e1c1a] shadow-2xl">
                    <Image
                      src="/images/official-price-sheet.jpg"
                      alt="Designs by Hott Minds Official Standard Price Sheet"
                      fill
                      sizes="(max-width: 1024px) 100vw, 450px"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-center text-xs text-[#faf6ef]/60">
                    Official Hott Minds studio pricing & terms guide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT CATALOG WITH FILTER TABS — active tab comes from ?category= */}
        <ProductCatalog />

        {/* WHY DTF PRINTING SECTION - validated against PDF Page 4 */}
        <section className="border-t border-[#2e2a27] bg-[#141210] py-20 text-[#faf6ef]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-bold tracking-wider text-[#ff5c1a] uppercase">
                <Zap className="h-3.5 w-3.5 text-[#ff5c1a]" />
                <span>Direct-To-Film Technology</span>
              </span>
              <h2 className="font-display mt-3 text-3xl leading-none text-white uppercase sm:text-5xl">
                SCREEN PRINT COLOR. <span className="text-[#ff5c1a]">ZERO SETUP FEES.</span>
              </h2>
              <p className="mt-3 text-sm text-[#faf6ef]/70 sm:text-base">
                Traditional screen printing charges for every single color screen. Vinyl peels after
                two washes. DTF gives you photorealistic unlimited colors with lasting flexibility.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-3 rounded-2xl border border-[#2e2a27] bg-[#1e1c1a] p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#ff5c1a]/30 bg-[#ff5c1a]/15 text-[#ff5c1a]">
                  <Palette className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg text-white uppercase">
                  Unlimited Colors &amp; Gradients
                </h3>
                <p className="text-xs leading-relaxed text-[#faf6ef]/70">
                  Print photographs, neon highlights, complex gradients and detailed artwork without
                  extra screen fees.
                </p>
              </div>

              <div className="space-y-3 rounded-2xl border border-[#2e2a27] bg-[#1e1c1a] p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#ff5c1a]/30 bg-[#ff5c1a]/15 text-[#ff5c1a]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg text-white uppercase">60+ Wash Guarantee</h3>
                <p className="text-xs leading-relaxed text-[#faf6ef]/70">
                  Industrial adhesive powder binds deep into fabric fibers. Does not crack, peel, or
                  fade through heavy weekly laundry.
                </p>
              </div>

              <div className="space-y-3 rounded-2xl border border-[#2e2a27] bg-[#1e1c1a] p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#ff5c1a]/30 bg-[#ff5c1a]/15 text-[#ff5c1a]">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg text-white uppercase">
                  Soft-Hand Stretch Feel
                </h3>
                <p className="text-xs leading-relaxed text-[#faf6ef]/70">
                  No stiff plastic shields on your chest. Our transfers stretch with the fabric for
                  breathable comfort.
                </p>
              </div>

              <div className="space-y-3 rounded-2xl border border-[#2e2a27] bg-[#1e1c1a] p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#ff5c1a]/30 bg-[#ff5c1a]/15 text-[#ff5c1a]">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg text-white uppercase">No Minimums Required</h3>
                <p className="text-xs leading-relaxed text-[#faf6ef]/70">
                  Need just 1 custom shirt or 100 reunion hoodies? You get the exact same premium
                  attention and rapid turnaround.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4-STEP HOW IT WORKS - validated against PDF Page 4 */}
        <section className="bg-bone border-t border-[#e7ddd0] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-neutral-300 bg-neutral-100 px-3 py-1 text-[11px] font-bold tracking-wider text-neutral-700 uppercase">
                <Clock className="h-3.5 w-3.5 text-[#ff5c1a]" />
                <span>Simple 4-Step Process</span>
              </span>
              <h2 className="text-ink font-display mt-3 text-3xl leading-none uppercase sm:text-5xl">
                ART TO DOORSTEP IN FOUR STEPS
              </h2>
              <p className="mt-2 text-sm text-neutral-600">
                We make custom printing fast, accurate, and completely stress-free.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="relative rounded-2xl border border-[#e7ddd0] bg-white p-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-display block text-4xl text-[#ff5c1a]/40">01</span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ff5c1a]/10 text-[#ff5c1a]">
                    <MessageSquare className="h-4 w-4" />
                  </div>
                </div>
                <h3 className="text-ink font-display mb-2 text-lg uppercase">Send Your Art</h3>
                <p className="text-xs leading-relaxed text-neutral-600">
                  Text or email your high-resolution artwork or sketch. Vector or 300 dpi PNG
                  preferred. All pictures must be clear!
                </p>
              </div>

              <div className="relative rounded-2xl border border-[#e7ddd0] bg-white p-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-display block text-4xl text-[#ff5c1a]/40">02</span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ff5c1a]/10 text-[#ff5c1a]">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                </div>
                <h3 className="text-ink font-display mb-2 text-lg uppercase">Approve the Proof</h3>
                <p className="text-xs leading-relaxed text-neutral-600">
                  24-hour digital art proof delivered to your phone or inbox showing exact sizing,
                  placement, and colors.
                </p>
              </div>

              <div className="relative rounded-2xl border border-[#e7ddd0] bg-white p-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-display block text-4xl text-[#ff5c1a]/40">03</span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ff5c1a]/10 text-[#ff5c1a]">
                    <Flame className="h-4 w-4" />
                  </div>
                </div>
                <h3 className="text-ink font-display mb-2 text-lg uppercase">
                  We Print &amp; Press
                </h3>
                <p className="text-xs leading-relaxed text-neutral-600">
                  Hand-pressed on commercial equipment with high-density DTF inks for 60+ wash
                  durability.
                </p>
              </div>

              <div className="relative rounded-2xl border border-[#e7ddd0] bg-white p-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-display block text-4xl text-[#ff5c1a]/40">04</span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ff5c1a]/10 text-[#ff5c1a]">
                    <Truck className="h-4 w-4" />
                  </div>
                </div>
                <h3 className="text-ink font-display mb-2 text-lg uppercase">Ships in 3-5 Days</h3>
                <p className="text-xs leading-relaxed text-neutral-600">
                  Fast local Chicago pickup or doorstep tracked shipping nationwide in time for your
                  event.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CUSTOMER TESTIMONIALS */}
        <Testimonials
          eyebrow="Customer reviews"
          titleLine1="Straight from"
          titleLine2="our customers."
          testimonials={APPAREL_TESTIMONIALS}
        />

        {/* CATERING CROSS-PROMO BANNER */}
        <section className="border-t border-[#2e2a27] bg-[#141210] py-14 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
              <div className="max-w-2xl space-y-3">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#ff5c1a]/30 bg-[#ff5c1a]/10 px-3.5 py-1 text-xs font-bold tracking-wider text-[#ff5c1a] uppercase">
                  <ChefHat className="h-3.5 w-3.5 text-[#ff5c1a]" />
                  <span>{COMPANY.divisions.catering}</span>
                </span>
                <h2 className="font-display text-3xl leading-none text-white uppercase sm:text-4xl">
                  PLANNING A PARTY OR CELEBRATION? <br />
                  <span className="text-[#ff5c1a]">WE COOK, YOU CELEBRATE.</span>
                </h2>
                <p className="text-sm leading-relaxed text-white/80">
                  Pair your custom shirts with hot savory celebration food trays and our famous
                  homemade Pound Cakes or gourmet Rum Infusion Cakes.{" "}
                  <span className="inline-flex items-center gap-1 font-bold text-amber-300">
                    <Gift className="h-4 w-4 text-[#ff5c1a]" />
                    Orders over {COMPANY.pricing.cateringCakePromoThreshold} get a FREE cake!
                  </span>
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-4">
                <Link
                  href="/services"
                  className="group flex items-center gap-2 rounded-xl bg-[#ff5c1a] px-7 py-4 text-sm font-bold tracking-wider text-white uppercase shadow-lg shadow-[#ff5c1a]/25 transition-all duration-200 hover:bg-[#ff7538] hover:shadow-[#ff5c1a]/40"
                >
                  <span>Explore Catering &amp; Cake Menu</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </QuickViewProvider>
  );
}
