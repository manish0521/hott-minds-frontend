"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import ProductModal from "@/components/ProductModal";
import type { Product } from "@/types";

const QuickViewContext = createContext<(product: Product) => void>(() => {});

/**
 * Owns the product quick-view modal so the page around it can stay a Server Component —
 * any `QuickViewButton` inside opens the modal.
 */
export function QuickViewProvider({ children }: { children: ReactNode }) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <QuickViewContext value={setSelectedProduct}>
      {children}
      <ProductModal
        key={selectedProduct?.id ?? "closed"}
        product={selectedProduct}
        open={Boolean(selectedProduct)}
        onOpenChange={(open) => {
          if (!open) setSelectedProduct(null);
        }}
      />
    </QuickViewContext>
  );
}

export function QuickViewButton({
  product,
  className,
  children,
}: {
  product: Product;
  className?: string;
  children: ReactNode;
}) {
  const openQuickView = useContext(QuickViewContext);

  return (
    <button type="button" onClick={() => openQuickView(product)} className={className}>
      {children}
    </button>
  );
}
