import { DefSection } from "./StyledDuolift";
import styled from "@emotion/styled";

export const StyledButolinoTherapy = styled.div`
  background-image: url("/background.jpg");
  padding-top: 80px;
`;

export const StyledHero = styled(DefSection)`
  & h1 {
    color: #ffda93;
    margin-bottom: 20px;
    text-align: center;
    font-family: Cormorant;
    font-size: 24px;
    font-style: italic;
    font-weight: 600;
    line-height: normal;
    @media screen and (min-width: 768px) {
      font-size: 40px;
      margin-bottom: 10px;
    }
    @media screen and (min-width: 1280px) {
      font-size: 56px;
      margin-bottom: 10px;
    }
  }
`;

export const StyledAdvantages = styled(DefSection)`
  & h2 {
    font-size: 16px;
    text-align: center;
    font-style: normal;
  }
  & .forList {
    margin-top: 5px;
    @media screen and (min-width: 768px) {
      margin-top: 20px;
    }
    color: #ffda93;
    & li {
      text-align: justify;
      font-family: Cormorant;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      &:not(:last-child) {
        margin-bottom: 5px;
      }
      @media screen and (min-width: 768px) {
        font-size: 20px;
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

  & .filingList {
    margin-bottom: 24px;
    & li {
      color: #ffda93;
      text-align: justify;
      font-family: Cormorant;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      display: flex;
      & span {
        margin-right: 10px;
      }
      &:not(:last-child) {
        margin-bottom: 4px;
      }
      @media screen and (min-width: 768px) {
        font-size: 20px;
      }
    }
  }
  & .thumb {
    @media screen and (min-width: 768px) {
      width: 547px;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export const StyledReasons = styled(DefSection)`
  & h2 {
    text-align: center;
    font-style: normal;
  }
  & .forList {
    margin-top: 5px;
    color: #ffda93;
    & li {
      text-align: justify;
      font-family: Cormorant;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      &:not(:last-child) {
        margin-bottom: 5px;
      }
      @media screen and (min-width: 768px) {
        font-size: 20px;
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
  & .filingList {
    margin-bottom: 24px;
    & li {
      color: #ffda93;
      text-align: justify;
      font-family: Cormorant;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      display: flex;
      & span {
        margin-right: 10px;
      }
      &:not(:last-child) {
        margin-bottom: 4px;
      }
      @media screen and (min-width: 768px) {
        font-size: 20px;
      }
    }
    & .green {
      color: #67f324;
    }
  }
`;

export const Effect = styled(DefSection)`
  & h2 {
    text-align: center;
    font-style: normal;
  }
  & .filingList {
    margin-top: 5px;
    & li {
      color: #ffda93;
      text-align: justify;
      font-family: Cormorant;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      display: flex;
      & span {
        margin-right: 10px;
      }
      &:not(:last-child) {
        margin-bottom: 4px;
      }
      @media screen and (min-width: 768px) {
        font-size: 20px;
      }
    }
    & .green {
      color: #67f324;
    }
  }
`;
