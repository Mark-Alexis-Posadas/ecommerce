interface T {
  id: number;
  handleProductClick: (id: number) => void;
}
export interface Product extends T {
  image: string;
  title: string;
  description?: string;
  category: string;
  price: number;
}
