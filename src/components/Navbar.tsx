import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { NavbarProps } from "../types/navbar";

export const Navbar: FC<NavbarProps> = ({ navbarData }) => {
  return (
    <nav className="flex items-center p-4 justify-between">
      <h1>logo</h1>
      <ul className="flex items-center gap-4">
        {navbarData.map((item) => (
          <li key={uuidv4()}>
            <Link to={`/${item.url}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <FontAwesomeIcon icon={faCartArrowDown} />
    </nav>
  );
};
