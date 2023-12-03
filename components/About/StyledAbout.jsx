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
    font-size: 24px;
    text-align: center;

    @media screen and (min-width: 768px) {
      font-size: 64px;
      text-align: left;
    }
  }
  & .container {
    padding-top: 48px;
    @media screen and (min-width: 768px) {
      padding-right: 0;
      display: flex;
      justify-content: space-between;
      padding-bottom: 69px;
      padding-top: 0;
    }
  }

  & .image {
    width: 100%;
    @media screen and (min-width: 768px) {
      width: auto;
    }
    & img {
      width: 100%;
      @media screen and (min-width: 768px) {
        width: auto;
      }

      height: auto;
    }
  }
  & .textDiv {
    @media screen and (min-width: 768px) {
      padding-top: 96px;
    }
  }
  & .text {
    margin-top: 59px;
    color: #fcd996;

    font-family: Cormorant Upright;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media screen and (min-width: 768px) {
      font-size: 32px;
      width: 669px;
    }
  }
`;
