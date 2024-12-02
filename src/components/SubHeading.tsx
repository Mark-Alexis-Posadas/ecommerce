import { FC } from "react";
import { Children } from "../types/children";

export const SubHeading: FC<Children> = ({ children }) => {
  return <h2 className="font-bold text-md">{children}</h2>;
};
