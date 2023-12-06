import styled from "@emotion/styled";

export const StyledFoundersSection = styled.section`
  background-image: url("/aboutBackground.jpg");
  padding-top: 32px;
  padding-bottom: 19px;
  border-bottom: 3px solid #ffda93;

  @media screen and (min-width: 768px) {
    padding-top: 56px;
    padding-bottom: 32px;
  }
  & h2 {
    text-align: center;
    font-family: Miama;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 16px;
    @media screen and (min-width: 768px) {
      font-size: 40px;
    }
    @media screen and (min-width: 1280px) {
      font-size: 64px;
      margin-bottom: 51px;
    }
  }
  & .flexDiv {
    display: grid;
    gap: 23px;

    @media screen and (min-width: 768px) {
      grid-template-columns: 200px 416px;
      gap: 88px;
    }
    @media screen and (min-width: 1280px) {
      grid-template-columns: 374px 584px;
      gap: 226px;
    }
  }
  & .img {
    display: block;
    width: 191px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 20px;
    overflow: hidden;
    @media screen and (min-width: 768px) {
      width: 200px;
      /* height: 282px; */
      margin-left: 0px;
      margin-right: 0px;
    }
    @media screen and (min-width: 1280px) {
      width: 374px;
    }
  }

  & .textDiv {
    & span {
      font-weight: 900;
      font-style: italic;
    }
    display: flex;
    align-items: center;
    color: #341f00;
    font-family: Cormorant;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-align: center;
    @media screen and (min-width: 768px) {
      text-align: left;
      font-size: 24px;
    }
    @media screen and (min-width: 1280px) {
      font-size: 36px;
    }
  }
`;
