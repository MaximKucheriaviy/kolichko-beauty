import { DefSection } from "./StyledDuolift";
import styled from "@emotion/styled";

export const StyledMasage = styled.div``;

export const MasageSection = styled(DefSection)`
  min-height: 100vh;
  padding-top: 80px;
  padding-bottom: 24px;
  background-image: url("/background.jpg");
  background-size: cover;
  & h1 {
    margin-top: 13px;
    padding-left: 13px;

    color: #ffda93;
    text-align: center;
    margin-bottom: 24px;
    font-family: Cormorant;
    font-size: 36px;
    font-style: italic;
    font-weight: 600;
    line-height: normal;
  }
  & .acordion {
    background-color: transparent;
    width: 100%;
    padding: 0;
  }
  & .summary {
    color: #ffda93;
    width: 100%;
    text-align: justify;
    font-family: Cormorant;
    font-size: 20px;
    font-style: italic;
    font-weight: 600;
    line-height: normal;
    padding: 0;
  }
  & .ditales {
    padding: 0;
  }
  & .icon {
    fill: #ffda93;
  }

  & .tipes {
    text-align: justify;
    text-indent: 0px;
    margin-top: 24px;
  }

  & .tasks {
    margin-top: 13px;
    padding-left: 13px;

    color: #ffda93;

    text-align: justify;
    font-family: Cormorant;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    & li:not(:last-child) {
      margin-bottom: 4px;
    }
  }
  & .subtitle {
    margin-top: 16px;
    margin-bottom: 16px;
  }

  & .for {
    margin-top: 24px;
    margin-bottom: 8px;
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
  & .filing {
    margin-top: 32px;
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
    }
  }

  & .delies {
    margin-top: 16px;
    margin-bottom: 16px;
    text-align: left;
  }

  & .absoluteDeni {
    text-indent: 0px;
    margin-top: 16px;
    margin-bottom: 16px;
    font-size: 16px;
  }

  & .custom {
    margin-bottom: 16px;
  }

  & .regularity {
    margin-top: 32px;
    margin-bottom: 16px;
  }
  & .effect {
    margin-top: 24px;
    margin-bottom: 16px;
  }
  & .forms {
    margin-top: 32px;
  }
  & .formsList {
    margin-top: 16px;
    color: #ffda93;

    text-align: justify;
    font-family: Cormorant;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  & .diagnostic {
    margin-bottom: 16px;
  }
  & .profilactic {
    margin-top: 24px;
  }

  & .asDeny {
  }
`;
