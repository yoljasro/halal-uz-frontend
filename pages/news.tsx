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
      <MainPageTitle subtitle="News" description=" Halal News" />
      <div className={styles.news__content}>
        <div
          onClick={() => {
            router.push("/newsMain");
          }}
          className={styles.news__card}
        >
          <Image
            alt="image"
            className={styles.news__image}
            src="/assets/img/coffee.jpg"
            width={500}
            height={350}
          />
          <div>
            <h3 className={styles.news__title}>
            Coffee & Tea Fest 2023 Uzbekistan 
            </h3>

            <p className={styles.news__description}>
            С 12 по 14 мая на площади  «Дружбы народов » официальный фестиваль кофе и чая в Узбекистане.☕️
            Основная цель фестиваля - Качественное развитие кофейной и чайной индустрии и бизнеса, а также перспектива сотрудничества и обмена опытом от топовых бариста и барменами. 
            Кроме того отдельное внимание будет уделено возрождению и развитию национальных традиций узбекского чаепития. 🫖
            </p>
            <p className={styles.news__date}>8-may 2023</p>
            <Button className={styles.news__btn} variant="contained">
              See more
            </Button>
          </div>
        </div>

        <div
          onClick={() => {
            router.push("/kazanNews");
          }}
          className={styles.news__card}
        >
          <Image
            alt="image"
            className={styles.news__image}
            src="/assets/img/kazanforum.jpg"
            width={500}
            height={350}
          />
          <div>
            <h3 className={styles.news__title}>
              KAZANFORUM International Chefs Cup 2023 by WHS Kazan is the
              center of world halal cuisine
            </h3>

            
            <p className={styles.news__description}>
            On May 17, the first day of cooking national dishes took place at the KAZANFORUM International Chefs Cup 2023, where each Association from Azerbaijan, Turkey, Uzbekistan, Malaysia and Iran developed a menu of 3 national dishes to be introduced into Kazan restaurants. Each restaurant was dedicated to the national cuisine of one particular country. 
            </p>
            <p className={styles.news__date}>8-may 2023</p>
            <Button className={styles.news__btn} variant="contained">
              See more
            </Button>
          </div>
        </div>

        <div
          onClick={() => {
            router.push("/sign");
          }}
          className={styles.news__card}
        >
          <Image
            alt="image"
            className={styles.news__image}
            src="/assets/img/sign2.png"
            width={500}
            height={350}
          />
          <div>
            <h3 className={styles.news__title}>
            Из журнала «под знаком Халяль» 
Исламские стандарты : тренды и бренды
            </h3>

            <p className={styles.news__description}>
            Ренессанс исламских традиций в России породил бум спроса на халяльную продукцию и вал ее производства. А вот полномочиями подтвердить каноническую дозволенность тех или иных продуктов, товаров и услуг с точки зрения Ислама призван действующий с 2004 года при Духовном управлении мусульман Республики Татарстан Комитет по стандарту «Халяль».
            </p>
            <p className={styles.news__date}>26-may 2023</p>
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
