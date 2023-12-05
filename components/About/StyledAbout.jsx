import styled from "@emotion/styled";

export const StyledAboutSection = styled.section`
  background-image: linear-gradient(
      106deg,
      rgba(255, 223, 107, 0) 0%,
      rgba(255, 221, 124, 0.21) 55.07%,
      rgba(255, 218, 147, 0.59) 76.46%
    ),
    url("/background.jpg");

  & .title {
    color: #fcd996;

    font-family: Miama;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    font-size: 32px;
    text-align: center;

    @media screen and (min-width: 768px) {
      font-size: 64px;
      text-align: left;
    }
  }
  & .container {
    padding-top: 101px;
    padding-bottom: 154px;
    @media screen and (min-width: 768px) {
      padding-top: 96px;
      padding-bottom: 140px;
    }
  }
  & .text {
    margin-top: 83px;
    color: #fcd996;

    font-family: Cormorant Upright;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    @media screen and (min-width: 768px) {
      font-size: 32px;
      width: 669px;
      text-align: left;
    }
  }
`;
