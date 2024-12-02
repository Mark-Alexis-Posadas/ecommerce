import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

export const Navbar: FC = ({ navbarData }) => {
  return (
    <nav>
      <h1>logo</h1>
      <ul>
        {navbarData.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
      <FontAwesomeIcon icon={faCartArrowDown} />
    </nav>
  );
};
