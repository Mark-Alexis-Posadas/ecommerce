export interface NavbarProps {
  navbarData: { name: string; url: string }[];
  setIsComponentVisible: (open: boolean) => void;
}
