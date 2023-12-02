import styled from "@emotion/styled";

export const StyledContactsSection = styled.section`
  padding-top: 104px;
  padding-bottom: 172px;
  background-image: url("/aboutBackground.jpg");
  background-repeat: no-repeat;
  background-size: cover;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
  }
  & .poster {
    color: #341f00;

    font-family: Miama;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  & .geo {
    color: #341f00;

    font-family: Miama;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  & .tel {
    color: #341f00;

    font-family: Miama;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  & .insta {
    color: #341f00;

    font-family: Miama;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;
