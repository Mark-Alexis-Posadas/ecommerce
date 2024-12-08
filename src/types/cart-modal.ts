export interface CartModalType {
  cartItem: Array<{
    id: number;
    image: string;
    title: string;
    price: number;
    quantity: number;
  }>;
  setCart: React.Dispatch<
    React.SetStateAction<
      Array<{
        id: number;
        image: string;
        title: string;
        price: number;
        quantity: number;
      }>
    >
  >;
  setCartCount: React.Dispatch<React.SetStateAction<number | null>>;
  cartRef: React.RefObject<HTMLDivElement>;
}
