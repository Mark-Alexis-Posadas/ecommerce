import { FC } from "react";
import { Children } from "../types/children";

export const SubHeading: FC<Children> = ({ children }) => {
  return <h2 className="font-bold text-4xl mb-10">{children}</h2>;
};
