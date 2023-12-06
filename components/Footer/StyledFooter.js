import styled from "@emotion/styled";

export const StyledFooter = styled.footer`
  background-image: url("/background.jpg");
  padding-top: 10px;
  padding-bottom: 10px;
  & .container {
    height: 40px;
    @media screen and (min-width: 768px) {
      height: auto;
    }
    @media screen and (min-width: 1280px) {
      height: auto;
    }
    width: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
  }
  & .left {
    display: flex;
    align-items: center;
    & img {
      display: block;
      width: 62px;
      height: 26px;
      @media screen and (min-width: 768px) {
        width: 159px;
        height: 64px;
      }
      @media screen and (min-width: 1280px) {
        height: auto;
        width: auto;
      }
    }
  }
  & .center {
    display: flex;
    justify-content: center;
    align-items: center;
    & img {
      width: 63px;
      @media screen and (min-width: 768px) {
        width: 128px;
      }
      @media screen and (min-width: 1280px) {
        height: auto;
        width: auto;
      }
    }
  }
  & .right {
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 16px;
    @media screen and (min-width: 1280px) {
      gap: 42px;
    }
  }
  & .icon {
    width: 24px;
    height: 24px;
    @media screen and (min-width: 768px) {
      width: 40px;
      height: 40px;
    }
    @media screen and (min-width: 1280px) {
      width: 32px;
      height: 32px;
    }
    display: inline-block;
    fill: #f6c15b;
    transform: scale(1);
    transition-duration: 500ms;
    &:hover,
    &:focus {
      transform: scale(1.3);
    }
  }
`;
