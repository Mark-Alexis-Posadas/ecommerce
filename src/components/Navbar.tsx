import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { NavbarProps } from "../types/navbar";

export const Navbar: FC<NavbarProps> = ({ navbarData }) => {
  const [active, setActive] = useState<number>(0);
  const handleClick = (index: number) => {
    setActive(index);
  };
  return (
    <nav className="flex items-center p-4 justify-between">
      <h1>logo</h1>
      <ul className="flex items-center gap-4">
        {navbarData.map((item, index) => (
          <li key={uuidv4()}>
            <Link
              to={`/${item.url}`}
              className={`${
                active === index ? "text-green-600" : "text-gray-600"
              }`}
              onClick={() => handleClick(index)}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/cart">
        <FontAwesomeIcon icon={faCartArrowDown} />
      </Link>
    </nav>
  );
};
