import styled from "@emotion/styled";
import { DefSection } from "./StyledDuolift";

export const StyledSmasLift = styled.div`
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
`;

export const StyledLevels = styled(DefSection)`
  & li {
    &:not(:last-child) {
      margin-bottom: 24px;
    }
    & span {
      font-size: 20px;
      margin-right: 20px;
    }
    & .first {
      text-indent: 0px;
    }
  }

  & .comfort {
    font-style: italic;
    margin-top: 48px;
  }
`;

export const StyledTeck = styled(DefSection)`
  & h2 {
    text-align: center;
    font-style: normal;
  }
  & .flex {
    @media screen and (min-width: 768px) {
      display: flex;
    }
  }
  & .flexText {
    @media screen and (min-width: 768px) {
      width: 383px;
    }
  }
  & .violet {
    color: #d14fff;
    @media screen and (min-width: 768px) {
      margin-top: 32px;
    }
  }
  & .image {
    width: 154px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (min-width: 768px) {
      width: 274px;
    }
    & img {
      width: 100%;
    }
  }
  & p {
    margin-top: 24px;
  }
  & .center {
    text-align: center;
    text-indent: 0px;
  }
  & .table {
    width: 272px;
    margin-top: 16px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (min-width: 768px) {
      width: 100%;
    }
  }
  & .videoContainer {
    margin-top: 32px;
    width: 272px;
    margin-left: auto;
    margin-right: auto;
    & iframe {
      width: 100%;

      @media screen and (min-width: 768px) {
        height: 431px;
      }
    }
    @media screen and (min-width: 768px) {
      width: 100%;
      height: auto;
    }
  }
`;
