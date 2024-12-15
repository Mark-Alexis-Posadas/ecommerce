import { FC } from "react";
import { Children } from "../types/children";

export const Section: FC<Children> = ({ children }) => {
  return <section className="py-20">{children}</section>;
};
