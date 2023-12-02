import styled from "@emotion/styled";

export const StyledFooter = styled.footer`
  background-image: url("/background.jpg");
  & .container {
    height: 80px;
    width: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
  }
  & .left {
    display: flex;
    align-items: center;
  }
  & .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .right {
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 42px;
  }
  & .icon {
    width: 32px;
    height: 32px;
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
