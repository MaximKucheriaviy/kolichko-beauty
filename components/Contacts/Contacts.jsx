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
            href="https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B8+%D0%93%D0%BE%D0%BB%D0%B5%D0%B3%D0%BE,+7%D0%92,+%D0%9A%D0%B8%D1%97%D0%B2,+03058/@50.4386028,30.4349909,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4cc1ea427bced:0x2bf56d9cccc09cf2!8m2!3d50.4385994!4d30.4375712!16s%2Fg%2F11b6b6kw71?entry=ttu"
          >
            вул. Миколи Голего 7-В
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
