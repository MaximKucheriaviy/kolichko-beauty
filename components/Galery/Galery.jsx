import { StyledGalerySection } from "./StyledGalery";
import { Container } from "../Container/Container";
import { useDementions } from "@/service/useDemenshions";
import Image from "next/image";
import { ImageList, ImageListItem } from "@mui/material";

export const Galery = ({ galery = [], nameShow = true }) => {
  return (
    <StyledGalerySection id="galery">
      <Container>
        {nameShow && <h2>Галерея</h2>}
        <ImageList cols={4} variant="quilted" rowHeight={248} gap={20}>
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
