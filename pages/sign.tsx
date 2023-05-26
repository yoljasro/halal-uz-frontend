import * as React from "react";
// styles
import styles from "../styles/newsMain.module.sass";
// next
import Image from "next/image";
import type { NextPage, GetStaticProps } from "next";
//component
import { MainPageTitle } from "../components/MainPageTitle";
// mui
import { Button } from "@material-ui/core";

const Sign = () => {
  return (
    <div className={styles.newsMain}>
      <h1 className={styles.newsMain__title}>
        Из журнала «под знаком Халяль» Исламские стандарты : тренды и бренды
      </h1>
      <div className={styles.newsMain__images}>
        <Image
          src={"/assets/img/sign.png"}
          alt="kazanImage"
          width={600}
          height={400}
        />
        <Image
          src={"/assets/img/sign2.png"}
          alt="kazanImage"
          width={600}
          height={400}
        />
      </div>
      <div className={styles.newsMain__text}>
        <p className={styles.newsMain__description}>
          СО ВСЕЙ ОТВЕТСТВЕННОСТЬЮ Впервые в истории России термин «Халяль»
          получил подтверждение на государственном уровне в 2009 году -
          Росстандарт зарегистрировал систему добровольной сертификации
          продукции и услуг на соответсвис каполам Ислама - Систему Халяль
          (Halal) разработанную Комитетом по стан дарту «Халяль» ДУМ РТ на
          основе ученых трудов и современных фете ханафитского мазхаба <br />{" "}
          <br />
          С 2019 гола Комитет, а это единственный г России полноправный член
          Всемир ного совета «Халяль» (World Halal Council), реализует
          утвержденнук Правительством т дорожную карт HalalliteStvle^. Для
          просвещения широкой общественности им написана и в 2020 голу издана
          книга « Дозволенное и запретное в питании и не только». Сейчас
          специалистами подготовлена и издана новая книга «Халяль - это просто
          Сертификация «Халяль» - дело добровольное. В компании, пожелавшей
          получить свидетельство проводится аудит всей технологической цепочки
          «от поля до прилавка».
          <br /> <br />
          Комитет прорабатывает и вопрос аккредитации в международных
          организациях для признания эмблемы «Халяль» и доверия к маркированной
          таким образом продукции со стороны мировых органов по сертифика-ции.
          Причем требования порой строже, чем у других стран. Так, на всех
          птицефабриках Татарстана убой птицы на Халяль только ручной. Это дает
          больше шансов для нашей продукции, ведь у мусульман ручной убой всегда
          в приоритете. Впрочем, работы у Комитета и на внутреннем рынке
          хвата-ет. Например, то же сливочное масло в целях удешевления чем
          только не «дополняют», заменяя молочный жир на более дешевый.
          <br /> <br />
          Специалисты Росконтроля в масле одного из известных брендов даже
          говяжий жир находили. В йогурты, мороженое и сладости производители
          регулярно добавляют кармин, а это тоже не Халяль. Потому про-верка
          продукции на содержание нехаляльных компонентов тоже в приоритетах
          специалистов Коми-тета. Наряду с обучением персонала готовящихся к
          сертификации предприятий стандартам «Халяль» и контролем соблюдения
          стандартов уже сертифицированными производствами
        </p>
      </div>
    </div>
  );
};
export default Sign;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
};
