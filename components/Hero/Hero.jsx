import { Container } from "../Container/Container";
import { StyledHeroSection } from "./StyledHero";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Image from "next/image";
export const Hero = () => {
  return (
    <StyledHeroSection className="hero" id="hero">
      <Container className="heroContainer">
        <div className="logoDiv">
          <Image src="/logoFull.png" alt="logo" width={571} height={442} />
        </div>
        <div className="buttonDiv">
          <AnchorLink href="#service" offset={60} className="blueButton">
            Перелік послуг
          </AnchorLink>
          <AnchorLink href="#galery" offset={70} className="whiteButton">
            Галерея
          </AnchorLink>
        </div>
      </Container>
    </StyledHeroSection>
  );
};
