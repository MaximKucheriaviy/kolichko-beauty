import { Drawer } from "@mui/material";
import Link from "next/link";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const MobileNavigaiton = ({ open, setOpen }) => {
  return (
    <Drawer anchor="right" open={open}>
      <button onClick={() => setOpen(false)}>close</button>
      <nav>
        <ul>
          <li>
            <AnchorLink href="/#service" offset={80}>
              Послуги
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              onClick={() => {
                setOpen(false);
              }}
              href="#about"
              offset="80"
            >
              Про клініку
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="/#funders" offset={50}>
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
    </Drawer>
  );
};
