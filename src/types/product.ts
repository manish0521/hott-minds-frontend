export type ProductCategory = "shirts" | "hoodies" | "caps" | "mugs";

export type ProductFilterCategory = "all" | ProductCategory;

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  price: string;
  youthPrice?: string;
  image: string;
  images?: { src: string; label: string }[];
  badge?: string;
  description: string;
  specs: string[];
}
