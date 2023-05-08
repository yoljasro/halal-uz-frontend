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
              С 12 по 14 мая на площади «Дружбы народов » официальный фестиваль
              кофе и чая в Узбекистане.☕️
              <br /> <br />
              Основная цель фестиваля - Качественное развитие кофейной и чайной
              индустрии и бизнеса, а также перспектива сотрудничества и обмена
              опытом от топовых бариста и барменами. ....
            </p>
            <p className={styles.news__date}>8-May 2023</p>
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
            src="/assets/img/kazan.jpg"
            width={500}
            height={350}
          />
          <div>
            <h3 className={styles.news__title}>
              KAZANFORUM International Chefs Cup 2023 by WHS "Kazan is the
              center of world halal cuisine"
            </h3>
            <p className={styles.news__description}>
            National cuisine is an integral part of any country and culture. The richer the national cuisine at the destination, the more likely that visitors will return.
Aim: promote the popularization of halal cuisine and dishes that exist on the territory of the Republic of Tatarstan of the Russian Federation and beyond. Bring more diverse halal cuisine to Kazan restaurants as a legacy of the KAZANFORUM International Chefs Cup 2023 by WHS. 
            </p>
            <p className={styles.news__date}>8-may 2023</p>
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
