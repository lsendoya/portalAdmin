interface Size {
  size2_4: number;
  size6_8: number;
  size10_12: number;
  size14_16: number;
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  size: Size;
  color: string;
  material: string | null;
  imageURLS: string[];
  isAvailable: boolean;
}
