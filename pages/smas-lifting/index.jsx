import { Layout } from "@/components/Layout/Layout";
import { Container } from "@/components/Container/Container";
import { StyledSmasLift } from "@/components/StyledPages/StyledSmasLifting";
import {
  StyledHero,
  StyledLevels,
  StyledTeck,
} from "@/components/StyledPages/StyledSmasLifting";
import Image from "next/image";

export default function SmasLift() {
  return (
    <Layout>
      <StyledSmasLift>
        <StyledHero>
          <Container>
            <h1>Смас-ліфтинг</h1>
            <p>
              високотехнологічна медична процедура, яка застосовується локально
              для впливу або коагуляції на біологічну тканину, за допомогою дії
              теплового ефекту ультразвуку (УЗ).
            </p>
          </Container>
        </StyledHero>
        <StyledLevels>
          <Container>
            <h2>Є декілька рівнів впливу:</h2>
            <ol>
              <li>
                <p className="first">
                  <span>1. </span>Найглибший (від 17 мм до 4,5 мм) ліполітичний
                  вплив. Завдяку сфокусованому впливу УЗ відбувається руйнування
                  адипоцитів (жирових клітин).
                </p>
                <p>
                  В результаті спостерігається суттєве стоншення жирового
                  прошарку на потрібних ділянках тіла та зонах обличчя, такі як
                  брилі, субментальна зона, носогубна складка.
                </p>
              </li>
              <li>
                <p className="first">
                  <span>2. </span>
                  Середній (3-2,5 мм) дермальний вплив. УЗ дія направлена на
                  дермальний прошарок шкіри, де сконцентровані всі важливі
                  елементи та структури.
                </p>
                <p>
                  За рахунок точкової коагіляціі УЗ - створюється штучне
                  мікрозапалення, в яке відразу поступають клітини
                  реконструктори, такі як макрофаги, фібробласти, тучні клітини
                  та стволові клітини.
                </p>
                <p>
                  В наслідок цього відбувається якраво виражений процес
                  регенераціі шкірного покриву, який забезпечує ліфтинг ефект,
                  омолодження та підтяжку шкіри. Регенерація тканин відбувається
                  протягом 3 місяців з моменту процедури.
                </p>
              </li>
              <li>
                <p className="first">
                  <span>3. </span>Поверхневий (1,5-1,7 мм) епідермальний вплив.
                  Завдяки поверхневій УЗ дії на шкірі відразу розгладжуються
                  мілкі зморшки та заломи.
                </p>
                <p>
                  Також спостерігається регенераційний вплив на шкіру в таких
                  делікатних зонах, як верхня та нижня повіка, шия, декольте,
                  кисетні зморшки.
                </p>
              </li>
            </ol>
            <p className="comfort">
              Процедура на апараті UTIMS A-3 абсолютно комфортна для пацієнта.
              Вона проходить без болю, без пошкодження епідермісу і без
              операційного втручання. Спеціального реабілітаційного періоду не
              потрібно. Завдяки запатентованій технології CENTERLESS™
            </p>
          </Container>
        </StyledLevels>
        <StyledTeck>
          <Container>
            <h2>Запатентована технологія CENTERLESS™ на апараті UTIMS A-3</h2>
            <div className="flex">
              <div className="image">
                <Image
                  src={"/deviceSMAS.png"}
                  alt="device"
                  width={154}
                  height={279}
                />
              </div>
              <div className="flexText">
                <p>
                  Всі технології HIFU фокусують ультразвук в центрі точки
                  нагріву. Через це відбувається надмірний перегрів тканин, який
                  призводить до опіків і утворення рубців.
                </p>
                <p className="tec">
                  <span className="violet">
                    Інноваційна технологія CENTERLESS™ не перегріває тканинипо
                    центру точки нагріву. Суть технології полягає в ізолюванні
                    центру трансдьюсера. Таким чином, при формуванні термальної
                    області, відсутній перегрів по її центру.
                  </span>
                </p>
              </div>
            </div>
            <p className="center">Датчики CENTERLESS™</p>
            <div className="table">
              <Image
                src={"/table.SMAS.png"}
                alt="table"
                width={272}
                height={60}
              />
            </div>

            <div className="videoContainer">
              <iframe
                src="https://www.youtube.com/embed/iTXKb8wXa3M"
                title="HIFU UTIMS A3 with CENTERLESS HIFU"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </Container>
        </StyledTeck>
      </StyledSmasLift>
    </Layout>
  );
}
