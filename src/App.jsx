import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { navbarData } from "./data/navbar";
//components
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { CartModal } from "./components/CartModal";

//pages
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Products } from "./pages/Products";
import { Cart } from "./pages/Cart";
import { ProductDetails } from "./pages/ProductDetails";

//hooks
import { useComponentVisibile } from "./hooks/useComponentVisible";

const App = () => {
  const navigate = useNavigate();
  const { isComponentVisible, setIsComponentVisible, ref } =
    useComponentVisibile(false);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(null);

  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };

  const handleAddToCart = (product) => {
    setCartCount((prevCount) => (prevCount ?? 0) + 1);
    setIsComponentVisible(true);
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
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
          <Route
            index
            element={
              <Home
                handleAddToCart={handleAddToCart}
                handleProductClick={handleProductClick}
              />
            }
          />
          <Route
            path="/products/"
            element={
              <Products
                handleAddToCart={handleAddToCart}
                handleProductClick={handleProductClick}
              />
            }
          />
          <Route
            path="/products/category/:categoryName"
            element={
              <Products
                handleAddToCart={handleAddToCart}
                handleProductClick={handleProductClick}
              />
            }
          />
          <Route
            path="products/:id"
            element={<ProductDetails handleAddToCart={handleAddToCart} />}
          />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/cart"
            element={<Cart cartItem={cart} setCart={setCart} />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
