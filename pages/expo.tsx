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

const Expo = () => {
  return (
    <div className={styles.newsMain}>
      <h1 className={styles.newsMain__title}>
      Halal Expo Istanbul 2024 – Одна из крупнейших международных выставок, посвященных халяль-индустрии, состоится с 26 по 29 октября 2024 года в Стамбуле. 
      </h1>
      <div className={styles.newsMain__images}>
        <Image
          src={"/assets/img/expo.jpg"}
          alt="kazanImage"
          width={600}
          height={400}
        />
      </div>
      <div className={styles.newsMain__text}>
        <p className={styles.newsMain__description}>
        Ожидается участие более 400 компаний из 40 стран, а также обсуждение трендов в халяльной пищевой продукции, косметике, финансах и туризме.

        </p>
      </div>
    </div>
  );
};
export default Expo;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
};
