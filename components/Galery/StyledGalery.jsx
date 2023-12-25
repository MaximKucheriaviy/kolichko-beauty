import styled from "@emotion/styled";

export const StyledGalerySection = styled.section`
  padding-top: 32px;
  padding-bottom: 23px;
  background-image: url("/background.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-bottom: 3px solid #ffda93;
  height: 350px;
  @media screen and (min-width: 768px) {
    padding-top: 72px;
    padding-bottom: 36px;
    height: 470px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 64px;
    padding-bottom: 49px;
    height: 745px;
  }
  & h2 {
    color: #f6c15b;

    font-family: Miama;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
    @media screen and (min-width: 768px) {
      font-size: 40px;
    }
    @media screen and (min-width: 1280px) {
      font-size: 64px;
    }
  }
  & .carousel {
    margin-top: 30px;
    @media screen and (min-width: 768px) {
    }
  }
  & .galeryItem {
    display: flex;
    gap: 80px;
    justify-content: center;
    @media screen and (min-width: 1280px) {
      gap: 56px;
    }
    & .imageThumb {
      width: 196px;
      height: 196px;
      border-radius: 20px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      & img {
        width: auto;
        border-radius: 20px;
        height: 100%;
      }
      @media screen and (min-width: 768px) {
        width: 257px;
        height: 257px;
      }
      @media screen and (min-width: 1280px) {
        width: 496px;
        height: 496px;
      }
    }
  }
`;
