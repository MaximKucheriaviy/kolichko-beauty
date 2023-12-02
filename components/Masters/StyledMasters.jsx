import styled from "@emotion/styled";

export const StyledMastersSection = styled.section`
  background-image: url("/background.jpg");
  padding-top: 56px;

  & .title {
    color: #ffda93;

    font-family: Miama;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    margin-bottom: 22px;
    height: 79px;
  }
  & .carouselItem {
    display: grid;
    grid-template-columns: 420px 410px;
    justify-content: center;
    grid-column-gap: 87px;

    & .iamgeThumb {
      display: flex;
      align-items: flex-end;
    }
    & h3 {
      color: #ffda93;

      font-family: Cormorant;
      font-size: 36px;
      font-style: italic;
      font-weight: 700;
      line-height: normal;
    }
    & .subtitle {
      color: #ffda93;

      font-family: Cormorant;
      font-size: 24px;
      font-style: italic;
      font-weight: 700;
      line-height: normal;
    }
    & .info {
      display: flex;
      gap: 53px;
      margin-top: 35px;

      & p {
        color: #ffda93;

        font-family: Cormorant;
        font-size: 24px;
        font-style: italic;
        font-weight: 700;
        line-height: normal;
      }
    }
    & .text {
      margin-top: 24px;

      color: #ffda93;

      font-family: Cormorant;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
`;
