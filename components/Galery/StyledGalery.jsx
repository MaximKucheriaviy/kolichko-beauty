import styled from "@emotion/styled";

export const StyledGalerySection = styled.section`
  padding-top: 32px;
  padding-bottom: 23px;
  background-image: url("/background.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-bottom: 3px solid #ffda93;
  /* height: 350px; */
  @media screen and (min-width: 768px) {
    padding-top: 72px;
    padding-bottom: 36px;
    /* height: 470px; */
  }
  @media screen and (min-width: 1280px) {
    padding-top: 64px;
    padding-bottom: 49px;
    /* height: 745px; */
  }
  & h2 {
    color: #f6c15b;

    font-family: Miama;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
    margin-bottom: 50px;
    @media screen and (min-width: 768px) {
      font-size: 40px;
    }
    @media screen and (min-width: 1280px) {
      font-size: 64px;
    }
  }
  & img {
    width: 100%;
    height: auto;
    min-height: 100%;
  }
  & .imageItem {
    border-radius: 20px;
    overflow: hidden;
  }
`;
