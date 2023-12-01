import { Layout } from "@/components/Layout/Layout";
import {
  StyledHeroSection,
  StyledAboutSection,
  StyledServiceSection,
  StyledMastersSection,
  StyledFoundersSection,
  StyledGalerySection,
  StyledContactsSection,
} from "@/components/StyledPages/StyledMain";
import Image from "next/image";
import { Container } from "@mui/material";
import Link from "next/link";
import Carousel from "react-material-ui-carousel";
import { FaInstagram } from "react-icons/fa";

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
      <StyledServiceSection>
        <Container className="container">
          <h2 className="title">Послуги, які ми надаємо</h2>
        </Container>
        <div className="textBackgound">
          <Container className="courouselContainer">
            <Carousel indicators={false}>
              <div className="carouselItem">
                <div className="photo photo1">
                  <p>Ботулінотерапія</p>
                </div>
                <div className="photo photo2">
                  <p>Контурна пластика</p>{" "}
                </div>
                <div className="photo photo3">
                  <p>Векторний ліфтинг</p>
                </div>
                <div className="photo photo4">
                  <p>Тредліфтинг</p>
                </div>
              </div>
              <div className="carouselItem">
                <div className="photo photo1">
                  <p>Біоревіталізація</p>
                </div>
                <div className="photo photo2">
                  <p>Доглядові процедури</p>
                </div>
                <div className="photo photo3">
                  <p>Чистка обличчя</p>
                </div>
                <div className="photo photo4">
                  <p>Мезотерапія</p>
                </div>
              </div>
              <div className="carouselItem">
                <div className="photo photo1">
                  <p>Пілінг</p>
                </div>
                <div className="photo photo2">
                  <p>Смас-ліфтинг</p>
                </div>
                <div className="photo photo3">
                  <p>Масаж</p>
                </div>
                <div className="photo photo4">
                  <p>Масаж</p>
                </div>
              </div>
            </Carousel>
          </Container>
        </div>
      </StyledServiceSection>
      <StyledMastersSection>
        <Container className="container">
          <h2 className="title">Наші спеціалісти</h2>
          <div>
            <Carousel indicators={false}>
              <div className="carouselItem">
                <div className="masterInfo">
                  <Image
                    src="/masterLorem.jpg"
                    alt="master"
                    width={302}
                    height={303}
                  />
                  <h3>Ірина</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Eget porta sed purus
                    eget.
                  </p>
                </div>
                <div className="masterInfo">
                  <Image
                    src="/masterLorem.jpg"
                    alt="master"
                    width={302}
                    height={303}
                  />
                  <h3>Ірина</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Eget porta sed purus
                    eget.
                  </p>
                </div>
              </div>
            </Carousel>
          </div>
        </Container>
      </StyledMastersSection>
      <StyledFoundersSection>
        <Container>
          <h2>Засновники</h2>
          <div className="flexDiv">
            <Image src="/funder.jpg" alt="funder" width={384} height={546} />
            <p>
              Lorem ipsum dolor sit amet consectetur. Nisl sit turpis nulla enim
              a nibh vitae et vel. Dignissim augue at gravida sed velit morbi.
              Sed magna a nulla in. Cursus nisi dui amet erat at nullam quis.
              Adipiscing sed et ut rutrum enim. Facilisis leo sodales diam
              vestibulum duis vestibulum eros tempus.
            </p>
          </div>
        </Container>
      </StyledFoundersSection>
      <StyledGalerySection>
        <Container>
          <h2>Галерея</h2>
          <Carousel indicators={false} className="carousel">
            <div className="galeryItem">
              <div className="imageThumb">
                <Image
                  src="/galery1.jpg"
                  alt="galery"
                  width={496}
                  height={496}
                />
              </div>
              <div className="imageThumb">
                <Image
                  src="/galery2.jpg"
                  alt="galery"
                  width={496}
                  height={496}
                />
              </div>
            </div>
            <div className="galeryItem">
              <div className="imageThumb">
                <Image
                  src="/galery2.jpg"
                  alt="galery"
                  width={496}
                  height={496}
                />
              </div>
              <div className="imageThumb">
                <Image
                  src="/galery1.jpg"
                  alt="galery"
                  width={496}
                  height={496}
                />
              </div>
            </div>
          </Carousel>
        </Container>
      </StyledGalerySection>
      <StyledContactsSection>
        <Container className="container">
          <p className="poster">Чекаємо вас за адресою:</p>
          <Link
            className="geo"
            href="https://maps.app.goo.gl/WEQttbMfBu1XEH4LA"
          >
            м.Київ вул.Хрещатик 22
          </Link>
          <Link className="tel" href="tel:+380978588077">
            тел:+38(097)-858-80-77
          </Link>
          <Link
            className="insta"
            href="https://www.instagram.com/kopychkoandko/?igshid=NzZlODBkYWE4Ng%3D%3D"
          >
            <FaInstagram />
            kopychkoandko
          </Link>
        </Container>
      </StyledContactsSection>
    </Layout>
  );
}
