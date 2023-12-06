import styled from "@emotion/styled";

export const StyledMastersSection = styled.section`
  background-image: url("/background.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 56px;
  padding-bottom: 30px;
  border-bottom: 3px solid #ffda93;
  height: 900px;
  @media screen and (min-width: 768px) {
    height: 500px;
  }
  @media screen and (min-width: 1280px) {
    height: 605px;
  }
  & button {
    background-color: transparent;
  }
  & .title {
    color: #ffda93;

    font-family: Miama;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    margin-bottom: 10px;
    @media screen and (min-width: 768px) {
      margin-bottom: 16px;
    }
    @media screen and (min-width: 1280px) {
      margin-bottom: 22px;
      font-size: 36px;
    }
  }
  & .carouselItem {
    min-height: 700px;

    @media screen and (min-width: 768px) {
      min-height: 330px;
      display: grid;
      grid-template-columns: 200px 373px;
      justify-content: center;
      grid-column-gap: 20px;
    }
    @media screen and (min-width: 1280px) {
      grid-template-columns: 299px 435px;
      grid-column-gap: 196px;
    }
    & .iamgeThumb {
      width: 100%;
      height: 385px;
      margin-left: auto;
      margin-right: auto;
      background-position: center;
      background-size: cover;
      border-radius: 20px;
      @media screen and (min-width: 768px) {
        width: 200px;
        height: 282px;
      }
      @media screen and (min-width: 1280px) {
        width: 299px;
        height: 423px;
      }
    }
    & .textThumb {
      margin-top: 16px;
      @media screen and (min-width: 768px) {
        margin-top: 0px;
        padding-top: 0px;
      }
      @media screen and (min-width: 1280px) {
        padding-top: 43px;
      }
    }
    & h3 {
      color: #ffda93;

      text-align: center;
      font-family: Cormorant;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      font-style: italic;
      @media screen and (min-width: 768px) {
        font-size: 32px;
      }
      @media screen and (min-width: 1280px) {
        font-size: 36px;
        text-align: left;
      }
    }

    & .subtitle {
      color: #ffda93;

      font-family: Cormorant;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-align: center;
      margin-top: 24px;
      @media screen and (min-width: 768px) {
        margin-top: 0px;
        font-size: 20px;
      }
      @media screen and (min-width: 1280px) {
        font-size: 24px;
        text-align: left;
      }
    }
    & .expiriance {
      color: #ffda93;

      font-family: Cormorant;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-align: center;
      margin-top: 16px;
      @media screen and (min-width: 768px) {
        margin-top: 10px;
        font-size: 20px;
      }
      @media screen and (min-width: 1280px) {
        font-size: 24px;
        text-align: left;
        margin-top: 34px;
      }
    }
    & .text {
      color: #ffda93;

      text-align: center;
      font-family: Cormorant;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-align: center;
      margin-top: 18px;
      @media screen and (min-width: 768px) {
        margin-top: 13px;
        font-size: 24px;
      }
      @media screen and (min-width: 1280px) {
        font-size: 24px;
        text-align: left;
        margin-top: 24px;
      }
    }
  }
`;
