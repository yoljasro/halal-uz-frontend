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

const News = () => {
  return (
    <div className={styles.newsMain}>
      <h1 className={styles.newsMain__title}>
        Самарқанднинг Пастдарғом туманига янги ҳоким тайинланди
      </h1>
      <div className={styles.newsMain__images}>
        <Image
          className={styles.newsMain__image}
          src={"/assets/img/newsimage.jpg"}
          width={500}
          height={350}
        />
        <Image
          className={styles.newsMain__image}
          src={"/assets/img/newsimage2.jpg"}
          width={500}
          height={350}
        />
      </div>
      <div className={styles.newsMain__text}>
        <p className={styles.newsMain__description}>
          Бугун, 19 апрель куни Самарқанд вилоятининг Пастдарғом тумани
          ҳокимлигида ўтказилаётган халқ депутатлари туман Кенгашининг навбатдан
          ташқари сессиясида депутатлар томонидан Ваҳобжон Абдуғаниевич
          Муродқобилов номзоди Пастдарғом тумани ҳокими лавозимига тасдиқланди.{" "}
          <br /> <br /> Бу ҳақда Самарқанд вилояти ҳокимлиги Матбуот хизмати
          хабар берди. Маълумот учун, Ваҳобжон Муродқобилов 1974 йилда Самарқанд
          вилояти, Пастдарғом туманида туғилган. Мазкур тайинловга қадар
          Ўзбекистон Республикаси Олий Мажлиси Қонунчилик палатаси депутати
          вазифасида фаолият олиб борган. Ўзбекистон Республикаси Қурилиш
          вазирлигида бошқарма бошлиғи, Қурилиш вазирлиги ҳузуридаги
          “Шаҳарсозлик ҳужжатлари экспертизаси” ДУК бош директори вазифаларида
          ишлаган. <br /> <br /> Эслатиб ўтамиз, аввал Самарқанд вилояти
          Пастдарғом тумани ҳокими лавозимида фаолият олиб борган Шунқор
          Фармонович Худойбердиев Самарқанд вилояти ҳокимининг қишлоқ ва сув
          хўжалиги масалалари бўйича ўринбосари лавозимига тайинланган эди.
        </p>
      </div>
    </div>
  );
};
export default News;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
};
