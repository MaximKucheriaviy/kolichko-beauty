import { Container } from "../Container/Container";
import { StyledHeroSection } from "./StyledHero";
import Link from "next/link";
import Image from "next/image";
export const Hero = () => {
  return (
    <StyledHeroSection className="hero">
      <Container className="heroContainer">
        <Image src={"/logo.png"} alt="logo" width={185} height={79} />
        <p className="invite">Ласкаво просимо</p>
        <Image src={"/textLogo.png"} alt="logo" width={691} height={241} />
        <div className="buttonDiv">
          <Link href="/" className="blueButton">
            Перелік послуг
          </Link>
          <Link href="/" className="whiteButton">
            Галерея
          </Link>
        </div>
      </Container>
    </StyledHeroSection>
  );
};
