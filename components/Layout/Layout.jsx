import Head from "next/head";
import { StyledLayout } from "./StyledLayout";
import { Header } from "../Header/Header";

export const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <main>{children}</main>
    </StyledLayout>
  );
};
