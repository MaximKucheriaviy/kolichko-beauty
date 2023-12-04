import { StyledHeader } from "./StyledHeader";
import { Container } from "../Container/Container";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

export const Header = () => {
  return (
    <StyledHeader>
      <button className="burgerButton">
        <FaBars className="burger" />
      </button>
      <Container>
        <nav className="inlineNavigation">
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
              <Link href="/price-list">Ціни</Link>
            </li>
            <li>
              <AnchorLink href="#contacts" offset={40}>
                Контакти
              </AnchorLink>
            </li>
          </ul>
        </nav>
      </Container>
    </StyledHeader>
  );
};
