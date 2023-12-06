import styled from "@emotion/styled";

export const StyledHeroSection = styled.section`
  background-image: url("/background.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-bottom: 3px solid #ffda93;
  & .heroContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 130px;
    padding-bottom: 105px;
    @media screen and (min-width: 768px) {
      padding-bottom: 40px;
    }
    @media screen and (min-width: 1280px) {
      padding-top: 137px;
      padding-bottom: 66px;
    }
  }
  & .logoDiv {
    width: 272px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (min-width: 768px) {
      width: 310px;
    }
    @media screen and (min-width: 1280px) {
      width: 571px;
    }
  }
  & .buttonDiv {
    display: flex;
    gap: 34px;
    margin-top: 98px;
    flex-direction: column;
    @media screen and (min-width: 768px) {
      flex-direction: row;
      margin-top: 16px;
      gap: 64px;
    }
    @media screen and (min-width: 1280px) {
      gap: 89px;
    }
    & a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 268px;
      height: 47px;
      @media screen and (min-width: 768px) {
        width: 240px;
        height: 40px;
        font-size: 24px;
      }
      @media screen and (min-width: 1280px) {
        width: 329px;
        height: 48px;
        font-size: 32px;
      }

      font-family: Cormorant;
      font-size: 26px;
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
