import { StyledHeader } from "./StyledHeader";
import { Container } from "../Container/Container";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Link from "next/link";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <nav>
          <ul className="navigation">
            <li>
              <AnchorLink href="#service">Послуги</AnchorLink>
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
