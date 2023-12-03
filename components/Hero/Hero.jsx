import { Container } from "../Container/Container";
import { StyledHeroSection } from "./StyledHero";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Image from "next/image";
export const Hero = () => {
  return (
    <StyledHeroSection className="hero">
      <Container className="heroContainer">
        <Image src={"/logo.png"} alt="logo" width={185} height={79} />
        <Image src={"/textLogo.png"} alt="logo" width={691} height={241} />
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
