import { StyledGalerySection } from "./StyledGalery";
import { Container } from "../Container/Container";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useDementions } from "@/service/useDemenshions";
import { splitedGalery } from "@/service/galery";

export const Galery = () => {
  const [galery, setGalery] = useState(null);
  const dementions = useDementions();

  useEffect(() => {
    if (!dementions.x) {
      return;
    }
    if (dementions.x < 768) {
      setGalery(splitedGalery());
    } else {
      setGalery(splitedGalery(2));
    }
  }, [dementions]);

  return (
    <StyledGalerySection id="galery">
      <Container>
        <h2>Галерея</h2>
        <Carousel
          className="carousel"
          navButtonsAlwaysInvisible={dementions.x && dementions.x < 768}
        >
          {galery &&
            galery.map((item, index) => {
              return (
                <div key={index} className="galeryItem">
                  {item.map((item, index) => {
                    return (
                      <div key={index} className="imageThumb">
                        <Image
                          src={item.name}
                          alt="galery"
                          width={496}
                          height={496}
                        />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          {/* <div className="galeryItem">
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
          </div> */}
        </Carousel>
      </Container>
    </StyledGalerySection>
  );
};
