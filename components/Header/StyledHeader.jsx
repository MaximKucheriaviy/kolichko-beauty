import styled from "@emotion/styled";

export const StyledHeader = styled.header`
  background: rgba(0, 47, 149, 0.884);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100vw;
  padding-top: 10px;
  padding-bottom: 10px;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
  backdrop-filter: blur(10px);
  & .burgerButton {
    display: block;
    margin: 0;
    margin-right: 30px;
    padding: 0;
    border: none;
    background-color: transparent;
    margin-left: auto;
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
  & .burger {
    width: 30px;
    height: 30px;
    display: block;
    fill: #ffda93;
  }
  & .inlineNavigation {
    display: none;
    @media screen and (min-width: 768px) {
      display: block;
    }
  }
  & .navigation {
    @media screen and (min-width: 768px) {
      height: 64px;
      gap: 38px;
    }
    @media screen and (min-width: 1280px) {
      gap: 58px;
      height: 80px;
    }
    display: flex;
    height: 80px;
    align-items: center;
    justify-content: center;
  }
  a {
    color: #ffda93;
    font-family: Cormorant;
    font-size: 24px;
    font-style: italic;
    font-weight: 700;
    line-height: normal;
    text-decoration: none;
    @media screen and (min-width: 1280px) {
      font-size: 32px;
    }
  }
`;
