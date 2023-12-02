import styled from "@emotion/styled";

export const StyledAboutSection = styled.section`
  background-image: url("/aboutBackground.jpg");
  & .title {
    color: #563400;

    font-family: Miama;
    font-size: 64px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  & .container {
    padding-right: 0;
    display: flex;
    justify-content: space-between;
    padding-bottom: 69px;
  }
  & .textDiv {
    padding-top: 96px;
  }
  & .text {
    margin-top: 59px;
    width: 669px;
    color: #563400;

    font-family: Cormorant Upright;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
