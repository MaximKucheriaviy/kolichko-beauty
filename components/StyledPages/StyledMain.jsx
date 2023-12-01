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
  & .titleDiv {
    padding-top: 32px;
    padding-bottom: 32px;
  }
  & .title {
    text-align: center;
    color: #eef157;

    font-family: Cormorant;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  & .textBackgound {
    background-color: blue;
  }
`;
