import { StyledFoundersSection } from "./StyledFunders";
import { Container } from "../Container/Container";
import Image from "next/image";

export const Funders = () => {
  return (
    <StyledFoundersSection id="funders">
      <Container>
        <h2>Засновники</h2>
        <div className="flexDiv">
          <div className="img">
            <Image src="/funder.jpg" alt="funder" width={373} height={524} />
          </div>
          <div className="textDiv">
            <p className="text">
              <span>Копичко Юлія Олександрівна</span>, засновник, головний
              лікар, дермато-косметолог, пластичний хірург, міжнародний
              сертифікований тренер по інʼєкційній косметології та плазмотерапії
              Швейцарського бренду “Regen Lab”. Оснований напрямок:
              плазмотерапія, ліпофілінг, Смас-ліфтинг, контурна пластика,
              ботулінотерапія.
            </p>
          </div>
        </div>
      </Container>
    </StyledFoundersSection>
  );
};
