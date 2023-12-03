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
    color: #fcd996;

    font-family: Cormorant Upright;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
