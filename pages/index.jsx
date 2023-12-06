import { Layout } from "@/components/Layout/Layout";
import { Hero } from "@/components/Hero/Hero";
import { About } from "@/components/About/About";
import { Serice } from "@/components/Sevices/Services";
import { Masters } from "@/components/Masters/Masters";
import { Funders } from "@/components/Funders/Funders";
import { Galery } from "@/components/Galery/Galery";
import { Contacts } from "@/components/Contacts/Contacts";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Serice />
      <Masters />
      <Funders />
      <Galery />
      {/* <Contacts /> */}
    </Layout>
  );
}
