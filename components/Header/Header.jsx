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
              <AnchorLink href="#service" offset={80}>
                Послуги
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#about" offset="80">
                Про клініку
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#funders" offset={50}>
                Засновники
              </AnchorLink>
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
