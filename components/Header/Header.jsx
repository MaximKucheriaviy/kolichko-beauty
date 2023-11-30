import { StyledHeader } from "./StyledHeader";
import { Container } from "../Container/Container";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <nav>
          <ul className="navigation">
            <li>
              <a href="/">Послуги</a>
            </li>
            <li>
              <a href="/">Про клініку </a>
            </li>
            <li>
              <a href="/">Засновники</a>
            </li>
            <li>
              <a href="/">Ціни</a>
            </li>
            <li>
              <a href="/">Контакти</a>
            </li>
          </ul>
        </nav>
      </Container>
    </StyledHeader>
  );
};
