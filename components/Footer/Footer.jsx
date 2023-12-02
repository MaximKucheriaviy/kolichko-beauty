import { StyledFooter } from "./StyledFooter";
import { Container } from "../Container/Container";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container className="container">
        <div className="left">
          <Image src="/textLogo.png" alt="logo" width={190} height={66} />
        </div>
        <div className="center">
          <Image src="/logo.png" alt="logo" width={135} height={58} />
        </div>
        <div className="right">
          <Link href="/">
            <FaInstagram className="icon" />
          </Link>
          <Link href="/">
            <FaTelegramPlane className="icon" />
          </Link>
        </div>
      </Container>
    </StyledFooter>
  );
};
