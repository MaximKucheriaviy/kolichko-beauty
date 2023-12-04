import { Layout } from "@/components/Layout/Layout";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { Container } from "@/components/Container/Container";
import { StyledPriceList } from "@/components/StyledPages/StyledPriceList";
import { FaChevronDown } from "react-icons/fa";

const MyAcordion = ({ title, children }) => {
  return (
    <Accordion elevation={0} disableGutters className="acordion">
      <AccordionSummary
        className="summary"
        expandIcon={<FaChevronDown className="icon" />}
      >
        {title}
      </AccordionSummary>
      <AccordionDetails className="ditales">{children}</AccordionDetails>
    </Accordion>
  );
};

const PriceItem = ({ title, price }) => {
  return (
    <li className="priceItem">
      <div className="titleDiv">
        <div className="circle"> </div>
        <p>{title}</p>
      </div>
      <p className="price">{price}</p>
    </li>
  );
};

export default function List() {
  return (
    <Layout>
      <StyledPriceList>
        <Container className="container">
          <div className="briceBigItem">
            <p>Консультація косметолога</p>
            <p>800 грн</p>
          </div>
          <div className="briceBigItem">
            <p>Консультація головного лікаря </p>
            <p>1200 грн</p>
          </div>
          <MyAcordion title={`Плазмотерапія швейцарського бренду “REGEN LAB”`}>
            <ul>
              <PriceItem
                title={`PRP- терапія “BCT”1 пробірка`}
                price={"6000 грн"}
              />
              <PriceItem
                title={`PRP- терапія “CELLULAR MATRIX” 1 пробірка`}
                price={"8000 грн"}
              />
              <PriceItem
                title={`PRP- терапія набір “PLUS”`}
                price={"430 євро"}
              />
              <PriceItem
                title={`PRP- терапія королівський набір “PLUS”+”CELLULAR MATRIX”`}
                price={"21000 грн"}
              />
              <PriceItem
                title={`Ліпофілінг системою “REGEN LAB”`}
                price={"1500 євро"}
              />
            </ul>
          </MyAcordion>
          <MyAcordion title={`Ботулінотерапія`}>
            <ul>
              <PriceItem title={`Чоло (жін/чол)`} price={"3000/3300 грн"} />
              <PriceItem
                title={`Міжбрівка (жін/чол)`}
                price={"3000/3300 грн"}
              />
              <PriceItem
                title={`Чоло+міжбрівка (жін/чол)`}
                price={"5300/6000 грн"}
              />
              <PriceItem title={`Очі (жін/чол)`} price={"2400/3000 грн"} />
              <PriceItem
                title={`Мезоботекс нижнє віко (жін/чол)`}
                price={"1200/1800 грн"}
              />
              <PriceItem
                title={`Чоло+міжбрівка+очі (жін/чол)`}
                price={"7100/8000 грн"}
              />
              <PriceItem
                title={`Зморшки кролика (жін/чол)`}
                price={"1200/1500 грн"}
              />
              <PriceItem
                title={`Підборіддя (жін/чол)`}
                price={"1500/1800 грн"}
              />
              <PriceItem title={`Яснева посмішка`} price={"1200 грн"} />
              <PriceItem title={`Кисетні зморшки`} price={"1200 грн"} />
              <PriceItem
                title={`Лікування бруксизму`}
                price={"4000/4400 грн"}
              />
              <PriceItem title={`Платізма шиї`} price={"6000 грн"} />
              <PriceItem
                title={`Ботулінотерапія всього обличчя FULL FACE (жін/чол)`}
                price={"12000/13000 грн"}
              />
              <PriceItem
                title={`Ботулінотерапія FULL FACE + платізма шиї`}
                price={"17000 грн"}
              />
              <PriceItem
                title={`Лікування гіпергідроза (жін./чол.)`}
                price={"8000/9600 грн"}
              />
              <PriceItem title={`Лікування мігрені`} price={"35000 грн"} />
            </ul>
          </MyAcordion>
          <MyAcordion
            title={`Контурна пластика губ, скул, підборіддя, носослізного каналу`}
          >
            <ul>
              <PriceItem
                title={`Філери 1 категаріі (Juviderm 3, Juviderm 4, Neuramis, Luminera)`}
                price={"6000 грн"}
              />
              <PriceItem
                title={`Філери 2 категоріі (Belotero balance/soft/lips, Juviderm volbela/volift)`}
                price={"8000 грн"}
              />
              <PriceItem
                title={`Філери 3 категоріі (Hyabel, Vario Derm) Німеччина`}
                price={"10200 грн"}
              />
              <PriceItem title={`Філер для тіла 10 мл`} price={"400 євро"} />
            </ul>
          </MyAcordion>
          <MyAcordion title={`Мезотерапія`}>
            <ul>
              <PriceItem title={`Гіалуронідаза`} price={"1200 грн"} />
              <PriceItem
                title={`Ліполітик F-XBC body (5 мл)`}
                price={"1500 грн"}
              />
              <PriceItem title={`PB Serum Тріада`} price={"3500 грн"} />
              <PriceItem title={`PB Serum Medical Low`} price={"300 євро"} />
              <PriceItem title={`PB Serum Medical Medium`} price={"300 євро"} />
              <PriceItem
                title={`Чоло+міжбрівка (жін/чол)`}
                price={"300 євро"}
              />
            </ul>
          </MyAcordion>
          <MyAcordion title={`Біоревіталізація`}>
            <ul>
              <PriceItem title={`Neauvia 2,5 ml`} price={"4400 грн"} />
              <PriceItem title={`Rejuran I 1 ml`} price={"3500 грн"} />
              <PriceItem title={`Rejuran S 1 ml`} price={"3500 грн"} />
              <PriceItem title={`Rejiran Healer 2 ml`} price={"6000 грн"} />
              <PriceItem title={`Profhilo 2 ml`} price={"6900 грн"} />
              <PriceItem title={`Juvuderm Volite 1 ml`} price={"8000 грн"} />
              <PriceItem title={`Belotero Hydra 1 ml`} price={"4400 грн"} />
              <PriceItem title={`IAL system 1 ml`} price={"5100 грн"} />
            </ul>
          </MyAcordion>
        </Container>
      </StyledPriceList>
    </Layout>
  );
}
