import { FC } from "react";
import { Navbar } from "./components/Navbar";
import { navbarData } from "./data/navbar";
import { Home } from "./pages/Home";
const App: FC = () => {
  return (
    <div className="bg-red-400">
      <Navbar navbarData={navbarData} />
      <Home />
    </div>
  );
};

export default App;
