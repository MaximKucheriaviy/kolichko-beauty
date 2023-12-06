import { StyledMastersSection } from "./StyledMasters";
import { Container } from "../Container/Container";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";
import { useDementions } from "@/service/useDemenshions";

export const Masters = () => {
  const dementions = useDementions();
  return (
    <StyledMastersSection>
      <Container className="container">
        <h2 className="title">Наші спеціалісти</h2>
        <div>
          <Carousel
            interval={10000}
            navButtonsAlwaysInvisible={dementions.x && dementions.x < 768}
            navButtonsAlwaysVisible={
              dementions.x && dementions.x >= 768 && dementions.x < 1280
            }
          >
            <div className="carouselItem">
              <div
                className="iamgeThumb"
                style={{ backgroundImage: `url("/mershiy.jpg")` }}
              ></div>
              <div className="textThumb">
                <h3>Володимир Мерщій</h3>
                <div className="info">
                  <p className="subtitle">масажист-реабілітолог</p>
                  <p className="expiriance">18 років роботи </p>
                </div>
                <p className="text">
                  Основний напрямок: всі види лікувального масажу, естетика
                  тіла, корекція фігури, антицелюлітний масаж, лімфодренажний,
                  спортивний, розслаблюючий, реабілітаційний комплексний масаж.
                </p>
              </div>
            </div>
            <div className="carouselItem">
              <div
                className="iamgeThumb"
                style={{ backgroundImage: `url("/timush.jpg")` }}
              ></div>
              <div className="textThumb">
                <h3>Анна Тімуш</h3>
                <p className="subtitle">косметолог-естетист-інʼєкціоніст</p>
                <p className="expiriance">6 років роботи</p>
                <p className="text">
                  Напрямок діяльності: доглядові та апаратні процедури обличчя,
                  масаж, інʼєкції краси: ботулінотерапія, контурна пластика,
                  ліполітична мезотерапія, біоревіталізація
                </p>
              </div>
            </div>
          </Carousel>
        </div>
      </Container>
    </StyledMastersSection>
  );
};
