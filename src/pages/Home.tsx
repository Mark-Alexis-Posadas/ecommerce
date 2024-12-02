import { FC } from "react";
import { Section } from "../components/Section";
import { SubHeading } from "../components/SubHeading";

export const Home: FC = () => {
  return (
    <Section>
      <h1>hello</h1>
      <SubHeading>Cataegories</SubHeading>
      <SubHeading>Featured Products</SubHeading>
      <SubHeading>Special Offers/Discounts</SubHeading>
    </Section>
  );
};
