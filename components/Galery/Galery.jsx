import { StyledGalerySection } from "./StyledGalery";
import { Container } from "../Container/Container";
import { useDementions } from "@/service/useDemenshions";
import Image from "next/image";
import { ImageList, ImageListItem } from "@mui/material";
import { useState, useEffect } from "react";

export const Galery = ({ galery = [], nameShow = true }) => {
  const dimentions = useDementions();
  const [size, setSize] = useState(248);
  useEffect(() => {
    if (dimentions.x >= 1280) {
      setSize(248);
    } else if (dimentions.x >= 768) {
      setSize(149);
    } else {
      setSize(115);
    }
  }, [dimentions]);
  console.log(size);
  return (
    <StyledGalerySection id="galery">
      <Container>
        {nameShow && <h2>Галерея</h2>}
        <ImageList
          cols={dimentions.x >= 768 ? 4 : 2}
          variant="quilted"
          rowHeight={size}
          gap={20}
        >
          {galery.map((item) => {
            return (
              <ImageListItem
                className="imageItem"
                key={item.name}
                cols={item.cols || 1}
                rows={item.rows || 2}
              >
                <Image
                  src={item.name}
                  alt="galeryImage"
                  width={item.name.includes("vert") ? 297 : 496}
                  height={496}
                />
              </ImageListItem>
            );
          })}
        </ImageList>
      </Container>
    </StyledGalerySection>
  );
};
