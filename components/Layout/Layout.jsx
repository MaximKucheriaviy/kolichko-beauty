import Head from "next/head";
import { StyledLayout } from "./StyledLayout";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      {/* <main>{children}</main> */}
      <Footer />
    </StyledLayout>
  );
};
