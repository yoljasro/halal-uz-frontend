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

const Food = () => {
  return (
    <div className={styles.newsMain}>
      <h1 className={styles.newsMain__title}>
        Из журнала «под знаком Халяль» Исламские стандарты : тренды и бренды
      </h1>
      <div className={styles.newsMain__images}>
        <Image
          src={"/assets/img/food2.jpg"}
          alt="kazanImage"
          width={600}
          height={400}
        />
        <Image
          src={"/assets/img/food3.jpg"}
          alt="kazanImage"
          width={600}
          height={400}
        />
        <Image
          src={"/assets/img/food4.jpg"}
          alt="kazanImage"
          width={600}
          height={400}
        />
        <Image
          src={"/assets/img/food5.jpg"}
          alt="kazanImage"
          width={600}
          height={400}
        />
      </div>
      <div className={styles.newsMain__text}>
        <p className={styles.newsMain__description}>
        On May 27, 2023, the Association of Cooks of Uzbekistan took part in the traditional XIX charity festival of cultural traditions and national cuisine between diplomatic missions and international organizations in the Central Garden.
The main purpose of the festival is to increase the prestige of Uzbekistan in foreign countries, create conditions for the full-fledged leisure of employees of diplomatic missions, their informal, friendly communication, acquaintance with the cultural heritage of different countries. <br />{" "}
          <br />
          In addition, within the framework of the festival, charitable assistance was provided to the republican orphanages and nursing homes for the lonely and disabled Sakhovat, as well as medical and social assistance was provided to boarding schools for disabled children MiruvvatThe  festival of cultural traditions and national cuisine was held in the capitals Central Park. This event was recognized as a kind of bright event aimed at expanding the traditions and cultural and educational ties of different peoples of Uzbekistan.
          <br /> <br />
        </p>
      </div>
    </div>
  );
};
export default Food;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
};
