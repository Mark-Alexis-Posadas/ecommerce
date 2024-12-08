export interface NavbarProps {
  navbarData: { name: string; url: string }[];
  setIsComponentVisible: (open: boolean) => void;
  cartCount: number | null;
}
