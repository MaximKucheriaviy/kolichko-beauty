import styled from "@emotion/styled";

export const StyledPriceList = styled.section`
  background-image: url("background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
  .container {
    padding-top: 100px;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  & .briceBigItem {
    display: flex;
    justify-content: space-between;
  }
  & .acordion,
  & .briceBigItem {
    & .summary {
      padding: 0;
      margin: 0;
      min-height: 0px;
      & div {
        margin: 0;
      }
    }
    & .ditales {
      & ul {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      gap: 10px;
      padding: 0;
      padding-top: 10px;
      font-size: 14px;
    }
    box-shadow: none;
    background-color: transparent;
    font-family: Cormorant;
    font-size: 18px;
    font-style: italic;
    font-weight: 700;
    line-height: normal;
    color: #f6c15b;
  }

  & .icon {
    fill: rgba(246, 193, 91, 1);
  }

  & .priceItem {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    & .circle {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: #f6c15b;
    }
    & .titleDiv {
      flex-shrink: 2;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    & .price {
      white-space: nowrap;
    }
  }
`;
