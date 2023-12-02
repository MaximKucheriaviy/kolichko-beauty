import styled from "@emotion/styled";

export const StyledServiceSection = styled.section`
  background-image: url("/background.jpg");

  & .title {
    text-align: center;
    color: #eef157;

    font-family: Cormorant;
    font-size: 64px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  & .textBackgound {
    background-image: url("/courouselBackground.png");
    padding-bottom: 75px;
    padding-top: 50px;
    & .carouselItem {
      display: flex;
      justify-content: center;
      gap: 40px;
    }
    & .photo {
      width: 229px;
      height: 238px;
      border-radius: 20px;
      background-color: gray;
      background-image: url("/ImageLor.jpg");
      background-size: 110%;
      background-repeat: no-repeat;
      background-position: center;
      overflow: hidden;
      transition-property: background-size;
      transition-duration: 700ms;
      &:hover {
        background-size: 130%;
        p {
          background-color: transparent;
        }
      }
      & p {
        width: 100%;
        height: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #563400;
        font-family: Cormorant;
        font-size: 36px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;

        background-color: rgba(217, 217, 217, 0.5);
        transition-property: background-color;
        transition-duration: 700ms;
      }
    }
  }
`;
