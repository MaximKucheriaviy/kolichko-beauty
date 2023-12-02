import styled from "@emotion/styled";

export const StyledMastersSection = styled.section`
  background-image: url("/background.jpg");
  padding-top: 56px;
  padding-bottom: 39px;
  & .container {
    display: grid;
    grid-template-columns: 436px 1fr;
    grid-column-gap: 103px;
    align-items: center;
  }
  & .title {
    width: 436px;
    color: #eef157;
    font-family: Miama;
    font-size: 64px;
    font-style: normal;
    font-weight: 400;
  }
  & .carouselItem {
    display: flex;
    justify-content: center;
    gap: 64px;
    & img {
      width: 241px;
      height: 242px;
      border-radius: 50%;
      border-top: 10px solid #3763ff;
      border-right: 10px solid #3763ff;
    }
    & h3 {
      color: #f6c15b;

      font-family: Cormorant;
      font-size: 36px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-align: center;
    }
    & p {
      color: #f6c15b;

      font-family: Cormorant;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      width: 234px;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;
