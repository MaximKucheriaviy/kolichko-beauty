import { StyledMastersSection } from "./StyledMasters";
import { Container } from "../Container/Container";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";

export const Masters = () => {
  return (
    <StyledMastersSection>
      <Container className="container">
        <h2 className="title">Наші спеціалісти</h2>
        <div>
          <Carousel indicators={false}>
            <div className="carouselItem">
              <div className="iamgeThumb">
                <Image
                  src="/masterLorem.jpg"
                  alt="master"
                  width={420}
                  height={441}
                />
              </div>
              <div className="textThumb">
                <h3>Олена</h3>
                <p className="subtitle">Дермато-венеролог</p>
                <div className="info">
                  <p>7 років роботи </p>
                  <p>100+ клієнтів</p>
                </div>
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur. Rhoncus velit ut at
                  penatibus ac. Velit arcu purus facilisi varius. Magna nunc
                  porttitor risus arcu congue adipiscing ac rutrum eget.
                  Scelerisque viverra facilisi tristique enim sagittis ac sed.
                </p>
              </div>
            </div>
          </Carousel>
        </div>
      </Container>
    </StyledMastersSection>
  );
};
