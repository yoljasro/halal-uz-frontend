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

const Sum = () => {
  return (
    <div className={styles.newsMain}>
      <h1 className={styles.newsMain__title}>
      World Halal Summit 2024 – В декабре в Индонезии пройдет Всемирный саммит по вопросам халяль-индустрии. 
      </h1>
      <div className={styles.newsMain__images}>
        <Image
          src={"/assets/img/sum.jpg"}
          alt="kazanImage"
          width={600}
          height={400}
        />
      </div>
      <div className={styles.newsMain__text}>
        <p className={styles.newsMain__description}>
        Мероприятие объединит экспертов, производителей и представителей государств для обсуждения стандартов халяль и перспектив глобального рынка.

        </p>
      </div>
    </div>
  );
};
export default Sum;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
};
