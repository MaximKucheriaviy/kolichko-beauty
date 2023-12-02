import styled from "@emotion/styled";

export const StyledGalerySection = styled.section`
  padding-top: 64px;
  padding-bottom: 49px;
  background-image: url("/background.jpg");
  & h2 {
    color: #f6c15b;

    font-family: Miama;
    font-size: 64px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
  }
  & .carousel {
    margin-top: 24px;
  }
  & .galeryItem {
    display: flex;
    gap: 56px;
    justify-content: center;
    & .imageThumb {
      width: 496px;
      height: 496px;
      border-radius: 20px;
      overflow: hidden;
    }
    & img {
    }
  }
`;
