import * as React from "react";
// styles
import styles from "../styles/news.module.sass";
// next
import Image from "next/image";
import Head from "next/head";
import type { NextPage, GetStaticProps } from "next";
//component
import { MainPageTitle } from "../components/MainPageTitle";
// mui
import { Button } from "@material-ui/core";
// useRouter
import { useRouter } from "next/router";

const News = () => {
  const router = useRouter();

  return (
    <div className={styles.news}>
      <Head>
        <title>Halal News </title>
        <meta
          name="description"
          content="Halal.uz Halol sertifikatini beruvchi kom  paniya rasmiy web sayti"
        />
        <meta
          name="google-site-verification"
          content="Pi7kisuljjOmFbBlvmk-S8DASJP-WbIGUQ1ERs9XwS4"
        />
        <link rel="icon" href="/assets/img/logo.svg" />
      </Head>
      <MainPageTitle subtitle="News" description="This is Halal News" />
      <div className={styles.news__content}>
        <div
          onClick={() => {
            router.push("/newsMain");
          }}
          className={styles.news__card}
        >
          <Image
            className={styles.news__image}
            src="/assets/img/newsimage.jpg"
            width={500}
            height={350}
          />
          <div>
            <h3 className={styles.news__title}>
              Самарқанднинг Пастдарғом туманига янги ҳоким тайинланди
            </h3>
            <p className={styles.news__description}>
              Бугун, 19 апрель куни Самарқанд вилоятининг Пастдарғом тумани
              ҳокимлигида ўтказилаётган халқ депутатлари туман Кенгашининг
              навбатдан ташқари сессиясида депутатлар томонидан Ваҳобжон
              Абдуғаниевич Муродқобилов номзоди Пастдарғом тумани ҳокими
              лавозимига тасдиқланди. Бу ҳақда Самарқанд вилояти ҳокимлиги
              Матбуот хизмати хабар берди. Маълумот учун, Ваҳобжон Муродқобилов
              1974 йилда Самарқанд вилояти, Пастдарғом туманида туғилган. Мазкур
              тайинловга қадар Ўзбекистон Республикаси Олий Мажлиси Қонунчилик
              палатаси депутати вазифасида фаолият олиб борган.
            </p>
            <p className={styles.news__date}>17-Aprile 2023</p>
            <Button className={styles.news__btn} variant="contained">
              See more
            </Button>
          </div>
        </div>
        <div
          onClick={() => {
            router.push("/newsMain");
          }}
          className={styles.news__card}
        >
          <Image
            className={styles.news__image}
            src="/assets/img/newsimage.jpg"
            width={500}
            height={350}
          />
          <div>
            <h3 className={styles.news__title}>
              Самарқанднинг Пастдарғом туманига янги ҳоким тайинланди
            </h3>
            <p className={styles.news__description}>
              Бугун, 19 апрель куни Самарқанд вилоятининг Пастдарғом тумани
              ҳокимлигида ўтказилаётган халқ депутатлари туман Кенгашининг
              навбатдан ташқари сессиясида депутатлар томонидан Ваҳобжон
              Абдуғаниевич Муродқобилов номзоди Пастдарғом тумани ҳокими
              лавозимига тасдиқланди. Бу ҳақда Самарқанд вилояти ҳокимлиги
              Матбуот хизмати хабар берди. Маълумот учун, Ваҳобжон Муродқобилов
              1974 йилда Самарқанд вилояти, Пастдарғом туманида туғилган. Мазкур
              тайинловга қадар Ўзбекистон Республикаси Олий Мажлиси Қонунчилик
              палатаси депутати вазифасида фаолият олиб борган.
            </p>
            <p className={styles.news__date}>17-Aprile 2023</p>
            <Button className={styles.news__btn} variant="contained">
              See more
            </Button>
          </div>
        </div>
        <div className={styles.news__card}>
          <Image
            className={styles.news__image}
            src="/assets/img/news.png"
            width={500}
            height={350}
          />
          <div>
            <h3 className={styles.news__title}>
              Charge Two Devices at the Same Time With This Magnetic Wireless
              Charging Dock
            </h3>
            <p className={styles.news__description}>
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. Iterative approaches to corporate strategy foster
              collaborative thinking to further the overall value proposition.
              Organically grow the holistic world view of disruptive innovation
              via workplace diversity and empowerment. Bring to the table
              win-win survival strategies to ensure proactive domination. At the
              end of the day, going forward, a new normal that has evolved from
              generation X is on the runway heading towards a streamlined cloud
              solution.
            </p>
            <p className={styles.news__date}>17-Aprile 2023</p>
            <Button className={styles.news__btn} variant="contained">
              See more
            </Button>
          </div>
        </div>
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
