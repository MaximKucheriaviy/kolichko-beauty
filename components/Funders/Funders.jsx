import { StyledFoundersSection } from "./StyledFunders";
import { Container } from "../Container/Container";
import Image from "next/image";

export const Funders = () => {
  return (
    <StyledFoundersSection id="funders">
      <Container>
        <h2>Засновники</h2>
        <div className="flexDiv">
          <Image src="/funder.jpg" alt="funder" width={384} height={546} />
          <p>
            Lorem ipsum dolor sit amet consectetur. Nisl sit turpis nulla enim a
            nibh vitae et vel. Dignissim augue at gravida sed velit morbi. Sed
            magna a nulla in. Cursus nisi dui amet erat at nullam quis.
            Adipiscing sed et ut rutrum enim. Facilisis leo sodales diam
            vestibulum duis vestibulum eros tempus.
          </p>
        </div>
      </Container>
    </StyledFoundersSection>
  );
};
