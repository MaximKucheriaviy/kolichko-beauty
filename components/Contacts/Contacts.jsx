import Link from "next/link";
import { StyledContactsSection } from "./StyledContacts";
import { Container } from "@mui/material";
import { FaInstagram } from "react-icons/fa";

export const Contacts = () => {
  return (
    <StyledContactsSection id="contacts">
      <Container className="container">
        <p className="poster">Чекаємо вас за адресою:</p>
        <div className="linkContainer">
          <Link
            className="geo"
            href="https://maps.app.goo.gl/WEQttbMfBu1XEH4LA"
          >
            м.Київ вул.Хрещатик 22
          </Link>
          <Link className="tel" href="tel:+380978588077">
            тел:+38(097)-858-80-77
          </Link>
          <Link
            className="insta"
            href="https://www.instagram.com/kopychkoandko/?igshid=NzZlODBkYWE4Ng%3D%3D"
          >
            <FaInstagram />
            kopychkoandko
          </Link>
        </div>
      </Container>
    </StyledContactsSection>
  );
};
