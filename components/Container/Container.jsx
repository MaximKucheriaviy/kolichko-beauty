import styled from "@emotion/styled";

export const Container = styled.div`
  width: 320px;
  padding-left: 24px;
  padding-right: 24px;
  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-left: 42px;
    padding-right: 42px;
  }
  margin-left: auto;
  margin-right: auto;
`;
