import styled from "@emotion/styled";

export const StyledHeroSection = styled.section`
  background-image: url("/background.jpg");

  & .heroContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 198px;
    padding-bottom: 82px;
  }
  & .invite {
    color: #ffda93;

    font-family: Miama;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  & .buttonDiv {
    display: flex;
    gap: 88px;
    margin-top: 53px;
    & a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 329px;
      height: 48px;

      font-family: Cormorant;
      font-size: 32px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-decoration: none;
      text-transform: uppercase;
    }
    & .whiteButton {
      color: #08059a;
      border-radius: 20px;
      border: 1px solid #ffda93;

      background: #feffb9;
    }
    & .blueButton {
      border-radius: 20px;
      border: 1px solid #ffda93;
      background: rgba(0, 87, 255, 0);

      color: #fdfec2;
    }
  }
`;

export const StyledAboutSection = styled.section`
  background-image: url("/aboutBackground.jpg");
  & .title {
    color: #563400;

    font-family: Miama;
    font-size: 64px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  & .container {
    padding-right: 0;
    display: flex;
    justify-content: space-between;
    padding-bottom: 69px;
  }
  & .textDiv {
    padding-top: 96px;
  }
  & .text {
    margin-top: 59px;
    width: 669px;
    color: #563400;

    font-family: Cormorant Upright;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

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

export const StyledMastersSection = styled.section`
  background-image: url("/background.jpg");
  padding-top: 56px;
  padding-bottom: 39px;
  & .container {
    display: grid;
    grid-template-columns: 436px 1fr;
    grid-column-gap: 103px;
    align-items: center;
  }
  & .title {
    width: 436px;
    color: #eef157;
    font-family: Miama;
    font-size: 64px;
    font-style: normal;
    font-weight: 400;
  }
  & .carouselItem {
    display: flex;
    gap: 64px;
    & img {
      width: 241px;
      height: 242px;
      border-radius: 50%;
      border-top: 10px solid #3763ff;
      border-right: 10px solid #3763ff;
    }
    & h3 {
      color: #f6c15b;

      font-family: Cormorant;
      font-size: 36px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-align: center;
    }
    & p {
      color: #f6c15b;

      font-family: Cormorant;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      width: 234px;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export const StyledFoundersSection = styled.section`
  background-image: url("/aboutBackground.jpg");
  padding-top: 64px;
  padding-bottom: 56px;
  color: #341f00;
  & h2 {
    text-align: center;
    font-family: Miama;
    font-size: 64px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  & .flexDiv {
    margin-top: 29px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  & img {
    border-radius: 20px;
  }
  p {
    width: 625px;
    color: #341f00;
    font-family: Cormorant Upright;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
