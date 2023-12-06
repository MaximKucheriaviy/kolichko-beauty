import { StyledHeader } from "./StyledHeader";
import { Container } from "../Container/Container";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { MobileNavigaiton } from "./MobileNavigaion";
import { links } from "@/service/links";

export const Header = () => {
  const [draverState, setDrawerState] = useState(false);
  return (
    <StyledHeader>
      <MobileNavigaiton open={draverState} setOpen={setDrawerState} />

      <button className="burgerButton">
        <FaBars className="burger" onClick={() => setDrawerState(true)} />
      </button>
      <Container>
        <nav className="inlineNavigation">
          <ul className="navigation">
            {links.map(({ title, href }) => (
              <li key={title}>
                <Link href={href} scroll={true}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </StyledHeader>
  );
};
