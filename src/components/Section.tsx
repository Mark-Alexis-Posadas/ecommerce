import { FC } from "react";
import { Children } from "../types/children";

export const Section: FC<Children> = ({ children }) => {
  return <section className="p-5">{children}</section>;
};
