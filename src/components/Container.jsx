import { FC } from "react";
import { Children } from "../types/children";

export const Container: FC<Children> = ({ children }) => {
  return <div className="lg:max-w-[1200px] m-auto">{children}</div>;
};
