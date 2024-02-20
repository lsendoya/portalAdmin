import { create } from 'zustand';
import { Product, Products } from '@/utils/types/product';

interface ToggleState {
  products: Products;
  productSelected: Product;
  productsIDs: string[];
  setProductToEdit: (product: Product) => void;
  setProducts: (product: Products) => void;
  didActionProduct: boolean;
  setActionProduct: () => void;
  setProductIDs: (ids: string[]) => void;
}

export const productStore = create<ToggleState>((set) => ({
  products: [],
  productSelected: {} as Product,
  productsIDs: [] as string[],
  didActionProduct: false,
  setProductToEdit: (product: Product) =>
    set(() => ({ productSelected: product })),
  setProductIDs: (ids: string[]) => set(() => ({ productsIDs: ids })),
  setProducts: (products: Products) => set(() => ({ products: products })),
  setActionProduct: () =>
    set((state) => ({ didActionProduct: !state.didActionProduct })),
}));
