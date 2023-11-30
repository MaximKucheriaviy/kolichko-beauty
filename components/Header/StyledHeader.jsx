import styled from "@emotion/styled";

export const StyledHeader = styled.header`
  background: rgba(0, 113, 149, 0.5);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  & .navigation {
    display: flex;
    height: 80px;
    align-items: center;
    justify-content: center;
    gap: 58px;
  }
  a {
    color: #ffda93;
    font-family: Cormorant;
    font-size: 32px;
    font-style: italic;
    font-weight: 700;
    line-height: normal;
    text-decoration: none;
  }
`;
