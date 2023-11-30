import { StyledHeader } from "./StyledHeader";
import { Container } from "../Container/Container";
import Link from "next/link";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <nav>
          <ul className="navigation">
            <li>
              <Link href="/">Послуги</Link>
            </li>
            <li>
              <Link href="/">Про клініку </Link>
            </li>
            <li>
              <Link href="/">Засновники</Link>
            </li>
            <li>
              <Link href="/">Ціни</Link>
            </li>
            <li>
              <Link href="/">Контакти</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </StyledHeader>
  );
};
