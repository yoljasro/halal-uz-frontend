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
      В Турции пройдет Всемирный Халяльный Саммит 2023
      </h1>
      <div className={styles.newsMain__images}>
        <Image
          src={"/assets/img/pres.jpg"}
          alt="kazanImage"
          width={600}
          height={400}
        />
        <Image
          src={"/assets/img/pres2.jpg"}
          alt="kazanImage"
          width={600}
          height={400}
        />

      </div>
      <div className={styles.newsMain__text}>
        <p className={styles.newsMain__description}>
        С 23-25 ноября 2023 года в Стамбуле пройдет Всемирный Халяльный Саммит а также Халяль Экспо 2023, в котором примут участия с выше 20 стран мира.
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
