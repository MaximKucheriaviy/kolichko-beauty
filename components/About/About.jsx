import { StyledAboutSection } from "./StyledAbout";
import { Container } from "../Container/Container";
import Image from "next/image";
export const About = () => {
  return (
    <StyledAboutSection className="about" id="about">
      <Container className="container">
        <h2 className="title">Про клініку</h2>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur. Lobortis velit mollis in
          convallis sit tortor rhoncus. Egestas massa ut ac nulla auctor. Elit
          nunc massa tincidunt amet fames. Duis sed tempus congue congue mauris
          faucibus nibh
        </p>
      </Container>
    </StyledAboutSection>
  );
};
