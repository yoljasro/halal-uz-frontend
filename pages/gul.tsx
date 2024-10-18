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

const Gul = () => {
  return (
    <div className={styles.newsMain}>
      <h1 className={styles.newsMain__title}>
      Gulfood 2025 – В феврале 2025 года в Дубае пройдет выставка Gulfood
      </h1>
      <div className={styles.newsMain__images}>
        <Image
          src={"/assets/img/gulfod.jpg"}
          alt="kazanImage"
          width={600}
          height={400}
        />
      </div>
      <div className={styles.newsMain__text}>
        <p className={styles.newsMain__description}>
        где большое внимание будет уделено халяль-продукции. Более 5,000 экспонентов представят инновации и разработки в области халяльного питания и напитков.

        </p>
      </div>
    </div>
  );
};
export default Gul;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
};
