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
import { useComponentVisibile } from "./hooks/useComponentVisible";

const App: FC = () => {
  const { isComponentVisible, setIsComponentVisible, ref } =
    useComponentVisibile(false);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState<number | null>(null);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    setCartCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="relative">
      {isComponentVisible && (
        <CartModal
          cartItem={cart}
          setCart={setCart}
          cartRef={ref}
          setCartCount={setCartCount}
        />
      )}

      <Navbar
        navbarData={navbarData}
        setIsComponentVisible={setIsComponentVisible}
        cartCount={cartCount}
      />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="/products/"
            element={<Products handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/products/category/:categoryName"
            element={<Products handleAddToCart={handleAddToCart} />}
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
