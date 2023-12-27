import styled from "@emotion/styled";

import { DefSection } from "./StyledDuolift";

export const StyledBiorevit = styled.div`
  padding-top: 80px;
  padding-bottom: 24px;
  background-image: url("/background.jpg");
  background-size: cover;
`;

export const StyledHero = styled(DefSection)`
  & h1 {
    margin-bottom: 20px;
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
`;

export const About = styled(DefSection)`
  & .imageThumb {
    width: 240px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    border-radius: 20px;
    overflow: hidden;
    @media screen and (min-width: 768px) {
      width: 585px;
      margin-top: 30px;
    }
    @media screen and (min-width: 1280px) {
      display: none;
    }
  }
`;

export const Reason = styled(DefSection)``;
export const Effect = styled(DefSection)`
  & .flexBox {
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 1280px) {
      flex-direction: row;
      align-items: center;
      gap: 36px;
    }
    & .imageThumb {
      display: none;
      border-radius: 20px;
      overflow: hidden;
      @media screen and (min-width: 1280px) {
        display: block;
        width: 640px;
      }
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
      @media screen and (min-width: 1280px) {
        &:not(:last-child) {
          margin-bottom: 20px;
        }
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

export const Fireq = styled(DefSection)`
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

export const Medical = styled(DefSection)`
  & h2 {
    text-align: left;
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

export const Classes = styled(DefSection)`
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
      @media screen and (min-width: 768px) {
        font-size: 24px;
      }
      & span {
        margin-right: 10px;
      }
      &:not(:last-child) {
        margin-bottom: 4px;
      }
    }
  }
`;
