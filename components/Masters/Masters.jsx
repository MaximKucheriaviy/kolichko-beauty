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
  );
};
