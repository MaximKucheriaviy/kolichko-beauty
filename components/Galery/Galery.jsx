import { StyledGalerySection } from "./StyledGalery";
import { Container } from "../Container/Container";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";

export const Galery = () => {
  return (
    <StyledGalerySection id="galery">
      <Container>
        <h2>Галерея</h2>
        <Carousel indicators={false} className="carousel">
          <div className="galeryItem">
            <div className="imageThumb">
              <Image src="/galery1.jpg" alt="galery" width={496} height={496} />
            </div>
            <div className="imageThumb">
              <Image src="/galery2.jpg" alt="galery" width={496} height={496} />
            </div>
          </div>
          <div className="galeryItem">
            <div className="imageThumb">
              <Image src="/galery2.jpg" alt="galery" width={496} height={496} />
            </div>
            <div className="imageThumb">
              <Image src="/galery1.jpg" alt="galery" width={496} height={496} />
            </div>
          </div>
        </Carousel>
      </Container>
    </StyledGalerySection>
  );
};
