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

const Summit = () => {
  return (
    <div className={styles.newsMain}>
      <h1 className={styles.newsMain__title}>
      В Ташкенте прошла встреча Президента Всемирного Халяльного Комитета WICS с Президнетом Всемирного Халяльного Саммита WHS
      </h1>
      <div className={styles.newsMain__images}>
        <Image
          src={"/assets/img/summit1.png"}
          alt="kazanImage"
          width={600}
          height={400}
        />
        <Image
          src={"/assets/img/summit2.png"}
          alt="kazanImage"
          width={600}
          height={400}
        />
      </div>
      <div className={styles.newsMain__text}>
        <p className={styles.newsMain__description}>
        18.09.2023 В Ташкенте состоялась встреча Президента Всемирного Халяльного Комитета WICS Акбара Умарова с Президнетом Всемирного Халяльного Саммита WHS Yunus Ete

Во время беседе было подчеркнуто многовековое сотрудничество между Узбекистаном и Турцией. 

В ходе встречи, стороны обсудили возможность проведение в 2024 году Всемирного Халяльного Саммита в Узбекистане.
        </p>
      </div>
    </div>
  );
};
export default Summit;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
};
