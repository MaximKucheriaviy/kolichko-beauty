import styled from "@emotion/styled";

export const StyledAboutSection = styled.section`
  background-image: linear-gradient(
      106deg,
      rgba(255, 223, 107, 0) 0%,
      rgba(255, 221, 124, 0.21) 55.07%,
      rgba(255, 218, 147, 0.59) 76.46%
    ),
    url("/background.jpg");
  padding-top: 101px;
  padding-bottom: 154px;
  @media screen and (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 69px;
  }

  & .title {
    color: #fcd996;

    font-family: Miama;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    font-size: 32px;
    text-align: center;

    @media screen and (min-width: 768px) {
      font-size: 48px;
    }
    @media screen and (min-width: 1280px) {
      font-size: 64px;
      text-align: left;
    }
  }
  & .text {
    margin-top: 82px;
    color: #fcd996;

    font-family: Cormorant Upright;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    @media screen and (min-width: 768px) {
      text-align: left;
    }
    @media screen and (min-width: 1280px) {
      width: 669px;
    }
  }
`;
