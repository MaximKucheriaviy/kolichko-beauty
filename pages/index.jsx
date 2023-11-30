import { Layout } from "@/components/Layout/Layout";
import {
  StyledHeroSection,
  StyledAboutSection,
} from "@/components/StyledPages/StyledMain";
import Image from "next/image";
import { Container } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
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
      <StyledAboutSection className="about">
        <Container className="container">
          <div className="textDiv">
            <h2 className="title">Про клініку</h2>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur. Lobortis velit mollis in
              convallis sit tortor rhoncus. Egestas massa ut ac nulla auctor.
              Elit nunc massa tincidunt amet fames. Duis sed tempus congue
              congue mauris faucibus nibh
            </p>
          </div>
          <div>
            <Image src="/girl.png" alt="girl" width={441} height={505} />
          </div>
        </Container>
      </StyledAboutSection>
    </Layout>
  );
}
