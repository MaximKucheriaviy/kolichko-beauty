import { StyledServiceSection } from "./StyledServices";
import { Container } from "@mui/material";
import Carousel from "react-material-ui-carousel";

export const Serice = () => {
  return (
    <StyledServiceSection id="service">
      <div className="titleDiv">
        <Container className="container">
          <h2 className="title">Послуги, які ми надаємо</h2>
        </Container>
      </div>
      <div className="textBackgound">
        <Container className="courouselContainer">
          <div className="carouselDesctop">
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
          </div>
          <div className="carouselMobile">
            <Carousel
              className="courouselContainer"
              navButtonsAlwaysInvisible={true}
              animation="slide"
              duration={700}
            >
              <div className="carouselItem">
                <div className="photo photo1">
                  <p>Ботулінотерапія</p>
                </div>
              </div>
              <div className="carouselItem">
                <div className="photo photo2">
                  <p>Контурна пластика</p>{" "}
                </div>
              </div>
              <div className="carouselItem">
                <div className="photo photo3">
                  <p>Векторний ліфтинг</p>
                </div>
              </div>
              <div className="carouselItem">
                <div className="photo photo4">
                  <p>Тредліфтинг</p>
                </div>
              </div>
              <div className="carouselItem">
                <div className="photo photo1">
                  <p>Біоревіталізація</p>
                </div>
              </div>
              <div className="carouselItem">
                <div className="photo photo2">
                  <p>Доглядові процедури</p>
                </div>
              </div>
              <div className="carouselItem">
                <div className="photo photo3">
                  <p>Чистка обличчя</p>
                </div>
              </div>
              <div className="carouselItem">
                <div className="photo photo4">
                  <p>Мезотерапія</p>
                </div>
              </div>
              <div className="carouselItem">
                <div className="photo photo1">
                  <p>Пілінг</p>
                </div>
              </div>
              <div className="carouselItem">
                <div className="photo photo2">
                  <p>Смас-ліфтинг</p>
                </div>
              </div>
              <div className="carouselItem">
                <div className="photo photo3">
                  <p>Масаж</p>
                </div>
              </div>
              <div className="carouselItem">
                <div className="photo photo4">
                  <p>Масаж</p>
                </div>
              </div>
            </Carousel>
          </div>
        </Container>
      </div>
    </StyledServiceSection>
  );
};
