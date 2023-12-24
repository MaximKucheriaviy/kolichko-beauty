import { Layout } from "@/components/Layout/Layout";
import { Container } from "@/components/Container/Container";
import {
  StyledButolinoTherapy,
  StyledHero,
  StyledAdvantages,
  StyledReasons,
  Effect,
} from "@/components/StyledPages/StyledButolin";
import Image from "next/image";

export default function ButolinoTherapia() {
  return (
    <Layout>
      <StyledButolinoTherapy>
        <StyledHero>
          <Container>
            <h1>Ботулінотерапія</h1>
            <p>
              Це косметологічна процедура, яка передбачає введення під шкіру
              спеціального препарату ботулотоксину (токсину ботулізму) шляхом
              ін’єкції. Застосування таких уколів призводить до розслаблення
              м’язів обличчя, що допомагає розгладити наявні зморшки. При цьому
              утворення нових у зоні введення токсину на момент його дії
              виключено.
            </p>
          </Container>
        </StyledHero>
        <StyledAdvantages>
          <Container>
            <h2>Переваги та недоліки ботулінотерапії</h2>
            <p>
              Як і у будь-якої процедури у косметології ботулінотерапія має свої
              недоліки та переваги. При цьому кожен із них може стати ключовим у
              прийнятті остаточного рішення для всіх охочих скористатися цією
              послугою.
            </p>
            <p className="defMarginTop noIndent">
              Почнемо з явних плюсів терапії:
            </p>
            <ol className="filingList">
              <li>
                <span>1.</span>Мінімальний перелік протипоказань.
              </li>
              <li>
                <span>2.</span>Безболісність.
              </li>
              <li>
                <span>3.</span>Тривалість ефекту.
              </li>
              <li>
                <span>4.</span>Безпека зареєстрованих препаратів.
              </li>
              <li>
                <span>5.</span>Мінімальна травматизація шкірних покривів.
              </li>
              <li>
                <span>6.</span>Швидкий результат.
              </li>
              <li>
                <span>6.</span>Висока ефективність.
              </li>
            </ol>
            <p>
              Щоб відчути всі вищеперелічені переваги, необхідно звернутися до
              спеціалізованої клініки, яка має відповідну ліцензію та
              використовує у косметологічній практиці виключно зареєстровані
              препарати.
            </p>
            <p className="defMarginTop noIndent">
              Щодо мінусів процедури, то вони такі:
            </p>
            <ul className="forList">
              <li>
                <span className="point"></span>
                мімічні м’язи, які розташовані біля місця уколу, можуть набувати
                надмірної рухливості, провокуючи появу нових мімічних зморшків;
              </li>
              <li>
                <span className="point"></span>
                перші дні після ін’єкцій може зберігатися набряк, яскраво
                виражений на повіках (проходить самостійно);
              </li>
              <li>
                <span className="point"></span>
                проводити процедуру повинен лише кваліфікований лікар-косметолог
                — будь-яка помилка в процесі проведення ботулінотерапії може
                призвести до асиметрії обличчя;
              </li>
              <li>
                <span className="point"></span>
                тривалість ефекту зберігається на 6-8 місяців.
              </li>
            </ul>
            <p className="defMarginTop italic">
              Зловживання ін’єкціями для омолодження може позбавити обличчя
              звичної міміки та зробити його неприродним. Тому дуже важливо
              консультуватися з питання краси та природності з
              лікарем-косметологом.
            </p>
            <Image
              src="/butolino1.jpg"
              alt="bootulino"
              width="2560"
              height="1707"
              className="defMarginTop"
            />
          </Container>
        </StyledAdvantages>
        <StyledReasons>
          <Container>
            <h2>Показання до ботулінотерапії</h2>
            <p className="noIndent">
              Основними показаннями для проходження ботулінотерапії є:
            </p>
            <ul className="forList">
              <li>
                <span className="point"></span>
                гіпергідроз (функціональне порушення системи потовиділення);
              </li>
              <li>
                <span className="point"></span>
                асиметрія брів по висоті;
              </li>
              <li>
                <span className="point"></span>
                занадто широкі крила носа та опущений кінчик;
              </li>
              <li>
                <span className="point"></span>
                нечіткий овал обличчя;
              </li>
              <li>
                <span className="point"></span>
                вікові зміни в області декольте;
              </li>
              <li>
                <span className="point"></span>
                асиметрія обличчя;
              </li>
              <li>
                <span className="point"></span>
                опущені куточки губ;
              </li>
              <li>
                <span className="point"></span>
                мімічні зморшки у будь-якій зоні обличчя;
              </li>
              <li>
                <span className="point"></span>
                губопідборідні зморшки;
              </li>
              <li>
                <span className="point"></span>
                тяжі на шиї;
              </li>
              <li>
                <span className="point"></span>
                зморшки навколо очей;
              </li>
              <li>
                <span className="point"></span>
                складки на спинці носа;
              </li>
              <li>
                <span className="point"></span>
                горизонтальні та вертикальні зморшки на лобі та між бровами.
              </li>
            </ul>
            <p className="bigMarginTop noIndent">
              Головними протипоказаннями для процедури вважаються:
            </p>
            <ul className="forList">
              <li className="red">
                <span className="point redPoinmt"></span>
                порушення згортання крові;
              </li>
              <li className="red">
                <span className="point redPoinmt"></span>
                алергія на білок;
              </li>
              <li className="red">
                <span className="point redPoinmt"></span>
                індивідуальна нестерпність ботулотоксину чи наявність високої
                чутливості щодо нього;
              </li>
              <li className="red">
                <span className="point redPoinmt"></span>
                лихоманка;
              </li>
              <li className="red">
                <span className="point redPoinmt"></span>
                інфекції та запалення в області передбачуваних уколів;
              </li>
              <li className="red">
                <span className="point redPoinmt"></span>
                онкологія;
              </li>
              <li className="red">
                <span className="point redPoinmt"></span>
                вагітність та період годування груддю.
              </li>
            </ul>
            <p className="green bigMarginTop">
              Для процедури використовуються дозволені для застосування та
              офіційно зареєстровані препарати. Виділимо основні, що широко
              використовуються в медицині та косметології:
            </p>
            <ol className="filingList">
              <li className="green">
                <span>1.</span>Botox.
              </li>
              <li className="green">
                <span>2.</span>Botulax.
              </li>
              <li className="green">
                <span>3.</span>Dysport.
              </li>
              <li className="green">
                <span>4.</span>Lantox.
              </li>
              <li className="green">
                <span>5.</span>Neuronox.
              </li>
              <li className="green">
                <span>6.</span>Relatox.
              </li>
              <li className="green">
                <span>7.</span>Xeomin.
              </li>
            </ol>
            <p>
              Здебільшого препарати дуже схожі — відмінності полягають у
              концентрації речовини, стабілізаторах і вартості. При цьому
              необхідна кількість препарату розраховується косметологом
              індивідуально з урахуванням таких параметрів:
            </p>
            <ul className="forList">
              <li className="red">
                <span className="point redPoinmt"></span>
                особливості організму людини;
              </li>
              <li className="red">
                <span className="point redPoinmt"></span>
                статі пацієнта (чоловікам необхідне введення більшої кількості
                препарату, ніж жінкам);
              </li>
              <li className="red">
                <span className="point redPoinmt"></span>
                виду препарату;
              </li>
              <li className="red">
                <span className="point redPoinmt"></span>
                зони його введення.
              </li>
            </ul>
          </Container>
        </StyledReasons>
        <Effect>
          <Container>
            <h2>Якого ефекту можна досягти від процедури?</h2>
            <p>
              Ефект від ботулінотерапії стає помітним через 7-10 днів після
              проходження процедури. Неозброєним оком пацієнт зможе помітити
              зникнення дрібних зморшків, розгладження глибоких складок,
              симетричність овалу обличчя та плавність його ліній.
            </p>
          </Container>
        </Effect>
        <Effect>
          <Container>
            <h2>Як проходить процедура ботулінотерапії</h2>
            <p>
              Перед початком ботулінотерапії лікар проводить обов’язкову
              консультацію з пацієнтом, яка включає огляд, оцінку масштабів
              проблеми та підбір методу її вирішення, а також вивчення медичної
              документації для виявлення можливих протипоказань. Також
              косметолог складає індивідуальний протокол для кожного пацієнта,
              де обумовлюються місця ін’єкцій та розраховується кількість
              одиниць препарату. Потреби у спеціальній підготовці пацієнта до
              ботулінотерапії немає. У день призначеної процедури слід
              заздалегідь ретельно очистити обличчя від косметики та відмовитись
              від вживання алкоголю.
            </p>
          </Container>
        </Effect>
        <Effect>
          <Container>
            <h2>Як правильно відновлюватись після ботулінотерапії</h2>
            <p>
              Реабілітаційний період включає список рекомендацій від
              лікаря-косметолога, які допоможуть закріпити результат від
              процедури.
            </p>
            <ol className="filingList">
              <li>
                <span>1.</span>Не приймайте горизонтальне становище перші 4-5
                годин після ін’єкцій.
              </li>
              <li>
                <span>2.</span>Перші 2 тижні після процедури не спіть обличчям у
                подушку.
              </li>
              <li>
                <span>3.</span>Відмовтеся від масажу в областях введення
                препарату.
              </li>
              <li>
                <span>4.</span>Виключіть із раціону гостру їжу.
              </li>
              <li>
                <span>5.</span>Протягом місяця не приймайте антибіотиків.
              </li>
              <li>
                <span>6.</span>Намагайтеся не чіпати руками область, в яку були
                зроблені уколи.
              </li>
              <li>
                <span>7.</span>Не займайтеся спортом перші дві доби.
              </li>
              <li>
                <span>8.</span>Відмовтеся від відвідування солярію, басейну,
                сауни.
              </li>
              <li>
                <span>9.</span>Не знаходьтеся довго під впливом сонячних
                променів.
              </li>
              <li>
                <span>10.</span>Відмовтеся від прийому антикоагулянтів.
              </li>
              <li>
                <span>11.</span>Повністю виключіть із вживання алкогольні напої
                будь-якої міцності.
              </li>
            </ol>
          </Container>
        </Effect>
      </StyledButolinoTherapy>
    </Layout>
  );
}
