import styled from "@emotion/styled";

export const StyledFoundersSection = styled.section`
  background-image: url("/aboutBackground.jpg");
  padding-top: 64px;
  padding-bottom: 56px;
  color: #341f00;
  & h2 {
    text-align: center;
    font-family: Miama;
    font-size: 64px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  & .flexDiv {
    margin-top: 29px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  & img {
    border-radius: 20px;
  }
  p {
    width: 625px;
    color: #341f00;
    font-family: Cormorant Upright;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
