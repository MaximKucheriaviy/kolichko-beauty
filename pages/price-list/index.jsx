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
          <MyAcordion title={`Чистка обличчя`}>
            <ul>
              <PriceItem
                title={`Ультразвукова чистка обличчя`}
                price={"1200 грн"}
              />
              <PriceItem
                title={`Комбінована чистка обличчя 1 категаріі складності`}
                price={"1500 грн"}
              />
              <PriceItem
                title={`Комбінована чистка обличчя 2 категаріі складності`}
                price={"1700 грн"}
              />
              <PriceItem
                title={`Комбінована чистка обличчя 3 категоріі складності`}
                price={"2100 грн"}
              />
              <PriceItem
                title={`Чистка обличчя на космецевтиці Nelly Devuyst BioAcne + сонофорез`}
                price={"3000 грн"}
              />
            </ul>
          </MyAcordion>
          <MyAcordion title={`Пілінги`}>
            <ul>
              <PriceItem title={`Ретиноловий пілінг`} price={"800 грн"} />
              <PriceItem title={`Біофітозбагачений пілінг`} price={"800 грн"} />
              <PriceItem
                title={`Фруктовий пілінг "Кератоліз"`}
                price={"1500 грн"}
              />
              <PriceItem
                title={`Депігментуючий пілінг "Oxypeel" Nelly Devuyst`}
                price={"1200 грн"}
              />
              <PriceItem
                title={`Саліциловий пілінг Nelly Devuyst`}
                price={"1200 грн"}
              />
              <PriceItem
                title={`Пілінг AXA з гіалуроновою кислотою Nelly Devuyst`}
                price={"1200 грн"}
              />
            </ul>
          </MyAcordion>
          <MyAcordion title={`Лікування шкіри`}>
            <ul>
              <PriceItem
                title={`Лікування акне  Nelly Devuyst `}
                price={"1700 грн"}
              />
              <PriceItem
                title={`Лікування чутливості, розацеа, куперозу Nelly Devuyst`}
                price={"3000 грн"}
              />
              <PriceItem
                title={`Лікування пігментаціі Nelly Devuyst`}
                price={"1500 грн"}
              />
            </ul>
          </MyAcordion>
          <MyAcordion title={`Доглядові програми для шкіри`}>
            <ul>
              <PriceItem
                title={`Комплексний догляд Кератоліз Nelly Devuyst`}
                price={"3500 грн"}
              />
              <PriceItem
                title={`Комплекс Кератоліз Nelly Devuyst + апарат “DUOLIFT”`}
                price={"4500 грн"}
              />
              <PriceItem
                title={`Ліфтинговий догляд + детокс Nelly Devuyst`}
                price={"3000 грн"}
              />
              <PriceItem
                title={`Догдяд для чутливоі шкіри + ліфтинг Nelly Devuyst`}
                price={"3750 грн"}
              />
            </ul>
          </MyAcordion>
          <MyAcordion title={`Смас-ліфтинг обличчя на апараті  “UTIMS A3+”`}>
            <ul>
              <PriceItem title={`1 лінія`} price={"51 грн"} />
              <PriceItem title={`1 зона обличчя`} price={"12000 грн"} />
              <PriceItem title={`2 зони обличчя`} price={"21000 грн"} />
              <PriceItem
                title={`Обличчя повністю (стандартний протокол)`}
                price={"30000 грн"}
              />
              <PriceItem
                title={`Обличчя повністю (посилений протокол)`}
                price={"35000 грн"}
              />
              <PriceItem
                title={`Обличчя повністю (максимальній протокол з безкоштовною докоррекцією через 3 місяці)`}
                price={"54000 грн"}
              />
              <PriceItem title={`Шия`} price={"8000 грн"} />
              <PriceItem title={`Шия + підборіддя`} price={"12000 грн"} />
              <PriceItem title={`Обличчя + шия`} price={"33000 грн +"} />
              <PriceItem
                title={`Обличчя + шия + декольте`}
                price={"35000 грн +"}
              />
              <PriceItem
                title={`Докорекція зони через 3 місяці`}
                price={"30% від вартості"}
              />
            </ul>
          </MyAcordion>
          <MyAcordion
            title={`Апаратне лікування та омолодження на французькому сертифікованому апараті “DUOLIFT”`}
          >
            <ul>
              <PriceItem title={`Ультразвукове очищення`} price={"1200 грн"} />
              <PriceItem
                title={`Електропарація, фотодинамічна терапія`}
                price={"1500 грн"}
              />
              <PriceItem title={`RF-ліфтинг біполярний`} price={"1500 грн"} />
              <PriceItem
                title={`Комплексний доглядовий протокол`}
                price={"3000 грн"}
              />
            </ul>
          </MyAcordion>
          <MyAcordion title={`Масаж`}>
            <ul>
              <PriceItem title={`Масаж обличчя`} price={"600 грн"} />
              <PriceItem
                title={`Масаж обличчя + шия + декольте`}
                price={"800 грн"}
              />
              <PriceItem title={`Масаж спини (30 хв)`} price={"440 грн"} />
              <PriceItem
                title={`Загальний масаж тіла (спина,ноги,руки,живіт – 60 хв/90 хв)`}
                price={"750/1200 грн"}
              />
              <PriceItem
                title={`Лімфодренажний загальний массаж тіла (60 хв/90хв)`}
                price={"750/960 грн"}
              />
              <PriceItem
                title={`Спортивний загальний масаж тіла (60 хв/90хв)`}
                price={"750/960 грн"}
              />
              <PriceItem
                title={`Релакс-масаж загальний всього тіла (60 хв/90 хв)`}
                price={"750/960 грн"}
              />
            </ul>
          </MyAcordion>
        </Container>
      </StyledPriceList>
    </Layout>
  );
}
