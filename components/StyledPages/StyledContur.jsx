import styled from "@emotion/styled";
import { DefSection } from "./StyledDuolift";

export const StyledContur = styled.div`
  padding-top: 80px;
  padding-bottom: 24px;
  background-image: url("/background.jpg");
  background-size: cover;
`;
export const StyledHero = styled(DefSection)`
  & h1 {
    color: #ffda93;

    text-align: center;
    font-family: Cormorant;
    font-size: 24px;
    font-style: italic;
    font-weight: 600;
    line-height: normal;

    @media screen and (min-width: 768px) {
      font-size: 40px;
    }
  }
  & .forList {
    color: #ffda93;
    & li {
      text-align: justify;
      font-family: Cormorant;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      @media screen and (min-width: 768px) {
        font-size: 24px;
      }
    }
    & .point {
      display: inline-block;
      background-color: #ffda93;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      margin-right: 8px;
    }
    & .redPoinmt {
      background-color: #fa0000;
    }

    & .greenPoint {
      background-color: #67f324;
    }
  }
`;

export const Types = styled(DefSection)``;
export const Stuf = styled(DefSection)``;
export const Deny = styled(DefSection)`
  & .forList {
    color: #ffda93;
    & li {
      text-align: justify;
      font-family: Cormorant;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      @media screen and (min-width: 768px) {
        font-size: 24px;
      }
    }
    & .point {
      display: inline-block;
      background-color: #ffda93;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      margin-right: 8px;
    }
    & .redPoinmt {
      background-color: #fa0000;
    }

    & .greenPoint {
      background-color: #67f324;
    }
  }
`;

export const Consequences = styled(DefSection)``;
