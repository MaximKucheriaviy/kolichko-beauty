import { StyledServiceSection } from "./StyledServices";
import { Container } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { splitedService } from "@/service/services";
import { useDementions } from "@/service/useDemenshions";
import { useState, useEffect } from "react";

export const Serice = () => {
  const dementions = useDementions();
  const [services, setServices] = useState(null);
  useEffect(() => {
    if (!dementions.x) {
      return;
    }
    if (dementions.x >= 768 && dementions.x < 1280) {
      setServices(splitedService(3));
    } else if (dementions.x >= 1280) {
      setServices(splitedService(4));
    } else {
      setServices(splitedService());
    }
  }, [dementions]);
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
            <Carousel
              navButtonsAlwaysInvisible={dementions.x && dementions.x < 1280}
            >
              {services &&
                services.map((item, index) => {
                  return (
                    <div key={index} className="carouselItem">
                      {item.map((item) => {
                        return (
                          <div className="photo">
                            <p>{item.name}</p>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              {/* <div className="carouselItem">
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
              </div> */}
            </Carousel>
          </div>
        </Container>
      </div>
    </StyledServiceSection>
  );
};
