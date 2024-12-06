import { FC, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { navbarData } from "./data/navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/Footer";
import { Products } from "./pages/Products";
import { Cart } from "./pages/Cart";
import { ProductDetails } from "./pages/ProductDetails";
import { CartModal } from "./components/CartModal";
const App: FC = () => {
  const [isToggleCart, setIsToggleCart] = useState<boolean>(false);
  return (
    <div className="relative">
      {isToggleCart && <CartModal />}

      <Navbar navbarData={navbarData} />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/products/" element={<Products />} />
          <Route
            path="/products/category/:categoryName"
            element={<Products />}
          />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
