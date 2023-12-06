import styled from "@emotion/styled";

export const StyledContactsSection = styled.section`
  padding-top: 56px;
  padding-bottom: 57px;
  background-image: url("/aboutBackground.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  border-bottom: 3px solid #ffda93;

  @media screen and (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 57px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 104px;
    padding-bottom: 172px;
  }
  & a {
    border-bottom: 2px solid transparent;
    transition-property: border-bottom transform;
    transition-duration: 600ms;
    text-decoration: none;
    transform: scale(1);
    &:hover {
      border-bottom: 2px solid #341f00;
      transform: scale(1.1);
    }
  }
  & .container {
  }
  & .poster {
    color: #341f00;

    font-family: Miama;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    @media screen and (min-width: 768px) {
      font-size: 32px;
    }
  }
  & .linkContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    margin-top: 20px;
    @media screen and (min-width: 1280px) {
      gap: 48px;
      margin-top: 40px;
    }
    @media screen and (min-width: 1280px) {
      gap: 96px;
      margin-top: 50px;
    }
  }
  & .geo {
    color: #341f00;

    font-family: Miama;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media screen and (min-width: 768px) {
      font-size: 32px;
    }
    @media screen and (min-width: 1280px) {
      font-size: 40px;
    }
  }
  & .tel {
    color: #341f00;

    font-family: Miama;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media screen and (min-width: 768px) {
      font-size: 32px;
    }
    @media screen and (min-width: 1280px) {
      font-size: 40px;
    }
  }

  & .insta {
    color: #341f00;

    font-family: Miama;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    @media screen and (min-width: 768px) {
      font-size: 32px;
    }
    @media screen and (min-width: 1280px) {
      font-size: 40px;
    }
  }
`;
