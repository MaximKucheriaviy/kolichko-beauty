import { Layout } from "@/components/Layout/Layout";
import { Container } from "@/components/Container/Container";
import {
  StyledBiorevit,
  StyledHero,
  About,
  Reason,
  Effect,
  Fireq,
  Deny,
  Medical,
  Classes,
} from "@/components/StyledPages/StyledBiorevit";
import Image from "next/image";

export default function Diorevit() {
  return (
    <Layout>
      <StyledBiorevit>
        <StyledHero>
          <Container>
            <h1>Біоревіталізація</h1>
            <p>
              Біоревіталізація — це косметологічна процедура, яка передбачає
              точкове введення препаратів на основі гіалуронової кислоти під
              шкіру. Абсолютно безболісна процедура допомагає не тільки
              розгладжувати зморшки та уповільнювати процес старіння, але й
              сприяє зволоженню та покращенню зовнішнього вигляду шкірного
              покриву.
            </p>
          </Container>
        </StyledHero>
        <About>
          <Container>
            <h2 className="center">Як працює гіалуронова кислота</h2>
            <p>
              Принцип дії гіалуронової кислоти нагадує магніт — подібно звичному
              всім виробу, вона притягує та утримує воду в шкірі.
            </p>
            <p>
              У юному віці кількості даної кислоти в шкірному покриві людини
              достатньо, щоб волокна еластину та колагену в ній були щільно
              переплетені — внаслідок цього молода шкіра така гладка та пружна.
            </p>
            <p>
              З віком же кількість гіалуронової кислоти в покриві знижується, що
              призводить до розпаду молекул колагену та еластину, а також
              поступового засихання шкіри.
            </p>
            <div className="imageThumb">
              <Image
                src={"/biorevit1.jpg"}
                alt="drop"
                width={1024}
                height={636}
              />
            </div>
          </Container>
        </About>
        <Reason>
          <Container>
            <h2 className="center">Навіщо потрібна біоревіталізація</h2>
            <p>
              Така процедура як біоревіталізація необхідна для поповнення рівня
              гіалуронової кислоти, відновлення молодості шкіри та активації
              вироблення власної кислоти організмом.
            </p>
            <p>
              Точковий вплив сприяє проникненню активних речовин у глибокі шари
              шкіри, активації вироблення еластину та колагену, що призводить до
              вирівнювання шкіри та згладжування зморшок.
            </p>
            <p>
              Локальне введення препарату обумовлено тим, що окремі ділянки
              потребують глибокої дії: руки, зона декольте, перенісся, зовнішні
              кутики очей, шия, щоки, носогубні зморшки та лоб.
            </p>
          </Container>
        </Reason>
        <Effect>
          <Container>
            <h2 className="center">Досягнений ефект від біоревіталізації</h2>
            <ul className="forList">
              <li>
                <span className="point"></span>
                вирівнювання шкіри;
              </li>
              <li>
                <span className="point"></span>
                повернення здорового кольору обличчя;
              </li>
              <li>
                <span className="point"></span>
                освітлення пігментації;
              </li>
              <li>
                <span className="point"></span>
                зменшення зморшок;
              </li>
              <li>
                <span className="point"></span>
                ліквідація темних кіл під очима;
              </li>
              <li>
                <span className="point"></span>
                позбавлення від набряків;
              </li>
            </ul>
            <p className="defMarginTop">
              Варто сказати, що досягнений ефект від процедури залежить від
              індивідуальних особливостей та віку. Так, чим старша людина, тим
              яскравіше проявляються зовнішні позитивні зміни шкіри. Водночас у
              деяких пацієнтів ефект стає помітним вже після першого сеансу, а в
              інших може знадобитися додатковий час для досягнення найкращого
              результату.
            </p>
            <p>
              Проте не варто очікувати ефекту в короткі терміни — для отримання
              повноцінного результату омолодження повинен пройти щонайменше
              тиждень. Дія ін’єкцій гіалуронової кислоти відбувається на
              наростальній основі протягом 3-4 тижнів, а дія молодечого ефекту
              зберігається до пів року.
            </p>
          </Container>
        </Effect>
        <Fireq>
          <Container>
            <h2>Як часто потрібно проводити процедуру для підтримки ефекту</h2>
            <p>
              Стандартний курс біоревіталізації складається з трьох косметичних
              процедур, які проводяться з інтервалом від 3 до 4 тижнів. Курс
              можна повторити через 6 місяців після завершення процедури.
            </p>
            <p>
              Не варто зловживати біоревіталізацією, оскільки часте використання
              процедури призводить до перенасичення шкіри та повної зупинки
              самостійного вироблення власної гіалуронової кислоти епідермісом.
            </p>
          </Container>
        </Fireq>
        <Fireq>
          <Container>
            <h2>Як часто потрібно проводити процедуру для підтримки ефекту</h2>
            <ul className="forList">
              <li>
                <span className="point"></span>
                погіршення пружності та зовнішнього вигляду шкіри;
              </li>
              <li>
                <span className="point"></span>
                різка втрата ваги;
              </li>
              <li>
                <span className="point"></span>
                зневоднення, сухість покриву;
              </li>
              <li>
                <span className="point"></span>
                сонячні опіки;
              </li>
              <li>
                <span className="point"></span>
                поява зморшок.
              </li>
              <li>
                <span className="point"></span>
                позбавлення від набряків;
              </li>
            </ul>
          </Container>
        </Fireq>
        <Deny>
          <Container>
            <h2 className="red">Протипоказання</h2>
            <ul className="forList">
              <li className="red">
                <span className="point redPoinmt"></span>
                прийом ліків для розрідження крові;
              </li>
              <li className="red">
                <span className="point redPoinmt"></span>
                гостре загострення герпесу;
              </li>
              <li className="red">
                <span className="point redPoinmt"></span>
                запалення в зоні введення ін’єкцій;
              </li>
              <li className="red">
                <span className="point redPoinmt"></span>
                алергія на компоненти препарату.
              </li>
            </ul>
          </Container>
        </Deny>
        <Medical>
          <Container>
            <h2>Препарати, що використовуються для біоревіталізації</h2>
            <p>
              Склад препаратів, що використовуються для ін’єкцій, містить
              гіалуронову кислоту та інші компоненти. Вже залежно від
              вираженості вікових змін та віку самого пацієнта лікар-косметолог
              підбирає необхідний склад для процедури.
            </p>
            <p className="defMarginTop green noIndent">
              Найбільш відомими та часто використовуваними препаратами є:
            </p>
            <ul className="forList">
              <li className="green">
                <span className="point greenPoint"></span>
                Aquashine;
              </li>
              <li className="green">
                <span className="point greenPoint"></span>
                Filorga M-HA 18;
              </li>
              <li className="green">
                <span className="point greenPoint"></span>
                IAL-System;
              </li>
              <li className="green">
                <span className="point greenPoint"></span>
                Jalupro;
              </li>
              <li className="green">
                <span className="point greenPoint"></span>
                Juvederm Hydrate;
              </li>
              <li className="green">
                <span className="point greenPoint"></span>
                Meso Wharton;
              </li>
              <li className="green">
                <span className="point greenPoint"></span>
                Princess Rich;
              </li>
              <li className="green">
                <span className="point greenPoint"></span>
                Restylane Vital;
              </li>
              <li className="green">
                <span className="point greenPoint"></span>
                Skin R;
              </li>
              <li className="green">
                <span className="point greenPoint"></span>
                Teosyal Meso;
              </li>
              <li className="green">
                <span className="point greenPoint"></span>
                Teosyal Pure Sense Redensity;
              </li>
              <li className="green">
                <span className="point greenPoint"></span>
                Yvoire Hydro.
              </li>
            </ul>
          </Container>
        </Medical>
        <Classes>
          <Container>
            <h2>Види біоревіталізації</h2>
            <p>
              Сучасна косметологія кваліфікує біоревіталізацію на кілька
              підвидів: ін’єкційна (ручна або апаратна) та безін’єкційна
              (апаратна). До перших відносяться:
            </p>
            <ol className="filingList">
              <li>
                <span>1.</span>Air agent — введення гіалуронової кислоти
                проходить за допомогою спеціального пістолета під тиском.
              </li>
              <li>
                <span>2.</span>Пептидна — ін’єкції з застосуванням пептидів
                призначені вплинути на дозрівання та поділ клітин.
              </li>
              <li>
                <span>3.</span>Фракційна — введення складу препарату під покрив
                проводиться спеціальним апаратом, який має 10-12 тонких голок
                глибиною 0,4-4 мм.
              </li>
            </ol>
            <p className="noIndent">Другий підвид становлять:</p>
            <ol className="filingList">
              <li>
                <span>1.</span>Аквафорезна — введення гіалуронової кислоти під
                шкіру відбувається шляхом одночасного проведення лімфодренажу,
                лазеротерапії та електростимуляції.
              </li>
              <li>
                <span>2.</span>Ультрафонофорезна — склад проникає в підшкірні
                тканини за допомогою ультразвукових коливань.
              </li>
              <li>
                <span>3.</span>Киснева — препарат вводиться під впливом кисню,
                подача якого здійснюється під тиском.
              </li>
              <li>
                <span>4.</span>Киснева — препарат вводиться під впливом кисню,
                подача якого здійснюється під тиском.
              </li>
              <li>
                <span>5.</span>Іонофорезна — склад доставляється в необхідну
                область шляхом стабільного гальванічного струму.
              </li>
              <li>
                <span>6.</span>Лазерна — введення препарату відбувається методом
                лазерного випромінювання низької інтенсивності.
              </li>
              <li>
                <span>7.</span>Кріобіоревіталізація (кріо-методика) – кислота
                проникає в покрив за допомогою електрохвиль або впливу холоду
                (рідкого азоту).
              </li>
            </ol>
            <p className="italic">
              Всупереч травматичності, ін’єкційна методика біоревіталізації є
              найбільш ефективним і популярним косметологічним методом завдяки
              глибокому проникненню і доставляння ліків в будь-якій кількості
              завдяки голці. Своєю чергою безін’єкційна методика підійде тим,
              хто не хоче переживати болісні відчуття від ін’єкцій та видимі
              зміни у вигляді папул і синців.
            </p>
          </Container>
        </Classes>
      </StyledBiorevit>
    </Layout>
  );
}
