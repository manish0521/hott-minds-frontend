"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { X, ZoomIn, Check, MessageSquare } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { getSmsLink } from "@/constants/company";
import type { Product } from "@/types";

interface ProductModalProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ProductModal({ product, open, onOpenChange }: ProductModalProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const isLightboxOpenRef = useRef(false);
  useEffect(() => {
    isLightboxOpenRef.current = isLightboxOpen;
  }, [isLightboxOpen]);
  const lastLightboxCloseTime = useRef(0);

  const handleCloseLightbox = () => {
    lastLightboxCloseTime.current = Date.now();
    setIsLightboxOpen(false);
  };

  const isYarlTarget = (target: EventTarget | null) => {
    if (target instanceof Element) {
      return Boolean(target.closest(".yarl__portal, .yarl__root, [class*='yarl__']"));
    }
    return false;
  };

  const shouldBlockDismiss = (target?: EventTarget | null) => {
    if (isLightboxOpenRef.current) return true;
    if (Date.now() - lastLightboxCloseTime.current < 400) return true;
    if (target && isYarlTarget(target)) return true;
    return false;
  };

  if (!product) return null;
  const images = product.images ?? [{ src: product.image, label: "Product" }];
  const activeImage = images[imageIndex] ?? images[0];

  return (
    <>
      {/* PRIMARY PRODUCT DETAILS MODAL */}
      <Dialog.Root
        open={open}
        onOpenChange={(isOpen) => {
          if (!isOpen && shouldBlockDismiss()) {
            return;
          }
          if (!isOpen) {
            handleCloseLightbox();
          }
          onOpenChange(isOpen);
        }}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="dialog-overlay fixed inset-0 z-50 bg-black/80 backdrop-blur-sm" />

          <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-3 sm:p-6">
            <Dialog.Content
              className="dialog-content pointer-events-auto relative max-h-[90dvh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-[#2e2a27] bg-[#141210] p-5 text-[#faf6ef] shadow-2xl focus:outline-none sm:p-8"
              aria-describedby="product-modal-description"
              onPointerDownOutside={(e) => {
                if (shouldBlockDismiss(e.target)) {
                  e.preventDefault();
                }
              }}
              onInteractOutside={(e) => {
                if (shouldBlockDismiss(e.target)) {
                  e.preventDefault();
                }
              }}
              onEscapeKeyDown={(e) => {
                if (isLightboxOpenRef.current || Date.now() - lastLightboxCloseTime.current < 400) {
                  e.preventDefault();
                }
              }}
            >
              {/* Close Button */}
              <Dialog.Close
                className="absolute top-4 right-4 z-20 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-[#2e2a27] text-white transition-colors hover:bg-[#ff5c1a] focus:outline-none"
                aria-label="Close product preview"
              >
                <X className="h-5 w-5" />
              </Dialog.Close>

              <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2">
                {/* Product Media - Click to Open Lightbox */}
                <div className="space-y-3">
                  <button
                    type="button"
                    onClick={() => setIsLightboxOpen(true)}
                    className="group relative aspect-square w-full cursor-zoom-in overflow-hidden rounded-2xl border border-[#2e2a27] bg-[#1e1c1a] transition-colors hover:border-[#ff5c1a]/60"
                    title="Click to inspect image in lightbox"
                  >
                    <Image
                      src={activeImage.src}
                      alt={`${product.name} — ${activeImage.label}`}
                      fill
                      loading="eager"
                      sizes="(max-width: 640px) 100vw, 350px"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 transition-opacity group-hover:opacity-100">
                      <span className="flex items-center gap-1.5 rounded-full border border-white/20 bg-[#141210] px-3.5 py-1.5 text-xs font-bold text-white">
                        <ZoomIn className="h-4 w-4 text-[#ff5c1a]" />
                        <span>Click to Zoom</span>
                      </span>
                    </span>
                  </button>
                  {images.length > 1 && (
                    <div className="flex gap-2" aria-label="Product views">
                      {images.map((image, index) => (
                        <button
                          key={image.src}
                          type="button"
                          aria-pressed={imageIndex === index}
                          onClick={() => setImageIndex(index)}
                          className={`flex-1 rounded-lg border px-3 py-2 text-sm font-semibold transition-colors ${imageIndex === index ? "border-[#ff5c1a] bg-[#ff5c1a]/15 text-[#ff5c1a]" : "border-white/20 text-white hover:border-white/50"}`}
                        >
                          {image.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Product Information */}
                <div className="space-y-4">
                  <span className="inline-flex w-fit items-center rounded-md border border-[#ff5c1a]/30 bg-[#ff5c1a]/10 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-[#ff5c1a] uppercase">
                    {product.categoryLabel}
                  </span>

                  <Dialog.Title className="font-display text-2xl leading-tight text-white uppercase sm:text-3xl">
                    {product.name}
                  </Dialog.Title>

                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-3xl text-[#ff5c1a]">{product.price}</span>
                    {product.youthPrice && (
                      <span className="text-xs text-[#faf6ef]/70">
                        Youth Size: {product.youthPrice}
                      </span>
                    )}
                  </div>

                  <Dialog.Description
                    id="product-modal-description"
                    className="text-xs leading-relaxed text-[#faf6ef]/70"
                  >
                    {product.description}
                  </Dialog.Description>

                  {/* Specs List */}
                  <div className="space-y-1.5 border-t border-white/10 pt-2 text-xs">
                    {product.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 text-[#faf6ef]/85">
                        <Check className="h-3.5 w-3.5 shrink-0 text-[#ff5c1a]" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action CTA */}
                  <div className="pt-3">
                    <a
                      href={getSmsLink(`Hi, I'm interested in the ${product.name}`)}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#ff5c1a] py-3.5 text-center text-xs font-bold tracking-wider text-white uppercase transition-colors duration-200 hover:bg-[#ff7538]"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>Text to Order</span>
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Content>
          </div>
        </Dialog.Portal>
      </Dialog.Root>

      {/* YET-ANOTHER-REACT-LIGHTBOX WITH ZOOM PLUGIN */}
      <Lightbox
        open={isLightboxOpen}
        close={handleCloseLightbox}
        slides={images.map((image) => ({
          src: image.src,
          alt: `${product.name} — ${image.label}`,
        }))}
        index={imageIndex}
        on={{ view: ({ index }) => setImageIndex(index) }}
        plugins={[Zoom]}
        zoom={{
          maxZoomPixelRatio: 3,
          zoomInMultiplier: 1.5,
          doubleTapDelay: 300,
          doubleClickDelay: 300,
          doubleClickMaxStops: 2,
          keyboardMoveDistance: 50,
          wheelZoomDistanceFactor: 100,
          pinchZoomDistanceFactor: 100,
          scrollToZoom: true,
        }}
        controller={{ closeOnBackdropClick: true }}
        render={
          images.length === 1
            ? {
                buttonPrev: () => null,
                buttonNext: () => null,
              }
            : undefined
        }
        styles={{
          root: { "--yarl__color_backdrop": "rgba(0, 0, 0, 0.92)" },
        }}
      />
    </>
  );
}
