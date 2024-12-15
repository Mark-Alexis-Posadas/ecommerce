import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export const Navbar = ({ navbarData, setIsComponentVisible, cartCount }) => {
  const [active, setActive] = useState(0);

  const handleClick = (index) => {
    setActive(index);
  };

  return (
    <nav className="flex items-center p-5 justify-between shadow-md bg-slate-50">
      <h1>logo</h1>
      <ul className="flex items-center gap-4">
        {navbarData.map((item, index) => (
          <li key={uuidv4()}>
            <Link
              to={`/${item.url}`}
              className={`capitalize ${
                active === index ? "text-green-600" : "text-gray-600"
              }`}
              onClick={() => handleClick(index)}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <button
        onClick={() => setIsComponentVisible(true)}
        className="flex items-center gap-2"
      >
        <FontAwesomeIcon icon={faCartArrowDown} />
        <span>{cartCount}</span>
      </button>
    </nav>
  );
};
