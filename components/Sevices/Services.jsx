import { StyledServiceSection } from "./StyledServices";
import { Container } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { splitedService } from "@/service/services";
import { useDementions } from "@/service/useDemenshions";
import { useState, useEffect } from "react";
import Link from "next/link";

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
              animation="slide"
              duration={700}
              interval={10000}
            >
              {services &&
                services.map((item, index) => {
                  return (
                    <div key={index} className="carouselItem">
                      {item.map((item) => {
                        console.log(item.href);
                        return (
                          <Link
                            href={item.link || "/"}
                            key={item.name}
                            className="photo"
                            style={{
                              backgroundImage: item.href
                                ? `url(${item.href})`
                                : `url("/ImageLor.jpg")`,
                            }}
                          >
                            <p>{item.name}</p>
                          </Link>
                        );
                      })}
                    </div>
                  );
                })}
            </Carousel>
          </div>
        </Container>
      </div>
    </StyledServiceSection>
  );
};
