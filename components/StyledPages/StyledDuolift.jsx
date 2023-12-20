import styled from "@emotion/styled";

export const StyledDouileft = styled.div`
  padding-top: 80px;
  padding-bottom: 24px;
  background-image: url("/background.jpg");
  background-size: cover;
`;
export const DefSection = styled.section`
  padding-top: 22px;

  @media screen and (min-width: 768px) {
    padding-top: 30px;
  }
  & .italic {
    font-style: italic;
  }
  & .green {
    color: #67f324;
  }
  & .smalMarginTop {
    margin-top: 16px;
  }
  & .defMarginTop {
    margin-top: 24px;
  }
  & .bigMarginTop {
    margin-top: 32px;
  }
  & .noIndent {
    text-indent: 0px;
  }
  & .red {
    color: #fa0000;
  }
  & .violet {
    color: #d14fff;
  }
  & p {
    color: #ffda93;

    text-align: justify;
    font-family: Cormorant;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-indent: 40px;
    @media screen and (min-width: 768px) {
      font-size: 24px;
    }
    @media screen and (min-width: 768px) {
      font-size: 24px;
    }
  }
  & h2 {
    color: #ffda93;

    text-align: justify;
    font-family: Cormorant;
    font-size: 20px;
    font-style: italic;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 14px;
    @media screen and (min-width: 768px) {
      font-size: 36px;
      margin-bottom: 48px;
    }
  }
  & .center {
    text-align: center;
    text-indent: 0px;
  }
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
      margin-bottom: 10px;
    }
    @media screen and (min-width: 1280px) {
      font-size: 56px;
      margin-bottom: 10px;
    }
  }
  & .listHeader {
    margin-top: 11px;
    @media screen and (min-width: 768px) {
      margin-top: 32px;
    }
  }
  & li {
    color: #ffda93;

    text-align: justify;
    font-family: Cormorant;
    font-size: 12px;
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
    @media screen and (min-width: 768px) {
      width: 8px;
      height: 8px;
      margin-right: 35px;
    }
  }
`;

export const StyledPrepear = styled(DefSection)`
  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }
`;
export const StyledSecondPart = styled(DefSection)`
  @media screen and (min-width: 768px) {
    margin-bottom: 48px;
  }

  & .flexBox {
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 1280px) {
      flex-direction: row-reverse;
      align-items: center;
      justify-content: space-between;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }

  & .flexText {
    @media screen and (min-width: 1280px) {
      width: 499px;
    }
  }
  & .imageDiv {
    width: 100%;
    margin-top: 24px;
    margin-bottom: 24px;
    border-radius: 20px;
    overflow: hidden;
    @media screen and (min-width: 768px) {
      margin-top: 32px;
      margin-bottom: 32px;
    }
    @media screen and (min-width: 1280px) {
      width: 650px;
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  & .acordion {
    margin-top: 29px;
    box-shadow: none;
    background-color: transparent;
    font-family: Cormorant;
    font-size: 14px;
    font-style: italic;
    font-weight: 700;
    line-height: normal;
    color: #f6c15b;
    & .icon {
      fill: #f6c15b;
    }
    @media screen and (min-width: 768px) {
      font-size: 26px;
    }

    @media screen and (min-width: 1280px) {
      font-size: 28px;
    }
    & .summary {
      padding: 0;
      margin: 0;
      min-height: 0px;
      & div {
        margin: 0;
      }
    }
    & .ditales {
      padding: 0;
      padding-top: 26px;
      & .title {
        display: flex;
        gap: 14px;
        align-items: center;
        margin-bottom: 26px;
      }
      & .red {
        color: #fa0000;
        & svg {
          fill: #fa0000;
        }
      }
      & .orange {
        margin-top: 24px;
        color: #ff7134;
        & svg {
          fill: #ff7134;
        }
      }
      & .green {
        margin-top: 24px;
        color: #67f324;
        & svg {
          fill: #67f324;
        }
      }
      & .blue {
        margin-top: 24px;
        color: #2622ff;
        & svg {
          fill: #2622ff;
        }
      }
    }
  }
`;

export const StyledThirdPart = styled(DefSection)`
  & .total {
    margin-top: 32px;
    font-style: italic;
    @media screen and (min-width: 768px) {
      margin-top: 76px;
    }
  }
`;
