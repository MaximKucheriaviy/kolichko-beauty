import styled from "@emotion/styled";

export const StyledServiceSection = styled.section`
  & .titleDiv {
    height: 150px;
    @media screen and (min-width: 1280px) {
      height: 235px;
    }
    background-repeat: no-repeat;
    background-size: cover;
    background-image: linear-gradient(
        90deg,
        rgba(217, 217, 217, 0.12) 1.33%,
        rgba(217, 217, 217, 0.14) 39.87%,
        rgba(217, 217, 217, 0.86) 76.36%
      ),
      url("/serviceBack.png");
    display: flex;
    align-items: center;
  }
  & .title {
    color: #341f00;

    font-family: Miama;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 50px;
    text-align: right;

    width: 280px;
    margin-left: auto;

    @media screen and (min-width: 1280px) {
      font-size: 48px;
      line-height: 100px;
      width: 336px;
    }
  }

  & .textBackgound {
    background: linear-gradient(
      106deg,
      rgba(255, 223, 107, 0.4) 0%,
      rgba(255, 221, 124, 0.26) 55.07%,
      rgba(242, 163, 10, 0.53) 76.46%
    );
    & .carouselDesctop {
      display: none;
      @media screen and (min-width: 1280px) {
        display: block;
      }
    }
    padding-bottom: 75px;
    padding-top: 50px;
    & .carouselItem {
      display: flex;
      justify-content: center;
      gap: 40px;
    }
    & .photo {
      width: 229px;
      height: 304px;
      border-radius: 20px;
      background-color: gray;
      background-image: url("/ImageLor.jpg");
      background-size: 140%;
      background-repeat: no-repeat;
      background-position: center;
      overflow: hidden;
      transition-property: background-size;
      transition-duration: 700ms;
      &:hover {
        background-size: 160%;
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
