import styled from "@emotion/styled";

export const StyledServiceSection = styled.section`
  border-bottom: 3px solid #ffda93;
  height: 690px;
  @media screen and (min-width: 768px) {
    height: 450px;
  }
  @media screen and (min-width: 1280px) {
    height: 700px;
  }
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
      rgba(231, 213, 164, 0.26) 55.07%,
      rgba(242, 163, 10, 0.53) 76.46%
    );
    padding-top: 100px;
    padding-bottom: 100px;
    @media screen and (min-width: 768px) {
      padding-bottom: 14px;
      padding-top: 21px;
    }
    @media screen and (min-width: 1280px) {
      padding-bottom: 105px;
      padding-top: 95px;
    }

    & .carouselItem {
      padding-top: 10px;
      display: flex;
      justify-content: center;
      gap: 40px;
      @media screen and (min-width: 768px) {
        gap: 18px;
      }
      @media screen and (min-width: 768px) {
        gap: 40px;
      }
    }
    & .photo {
      width: 300px;
      height: 300px;
      border-radius: 50%;
      background-size: 100%;
      text-decoration: none;

      @media screen and (min-width: 768px) {
        width: 225px;
        height: 225px;
        background-size: 140%;
      }
      /* border-radius: 20px; */
      box-shadow: 0px 0px 10px black;
      background-color: gray;

      background-repeat: no-repeat;
      background-position: center;
      overflow: hidden;
      transition-property: background-size;
      transition-duration: 700ms;
      &:hover {
        background-size: 160%;
        @media screen and (min-width: 1280px) {
          background-size: 160%;
        }
        p {
          background-color: transparent;
          text-shadow: 0px 0px 5px white;
          color: #1b1000;
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
        font-size: 30px;
        font-style: normal;
        font-weight: 900;
        line-height: normal;
        @media screen and (min-width: 1280px) {
        }

        background-color: rgba(217, 217, 217, 0.5);
        transition-property: background-color color;
        transition-duration: 700ms;
      }
    }
  }
`;
