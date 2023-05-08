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
        Coffee & Tea Fest 2023 Uzbekistan
      </h1>
      <div className={styles.newsMain__images}>
        <video width="250" height="450" controls autoPlay>
          <source src={"/assets/video/video1.mp4"} />
          <source src={"/assets/video/video1.mp4"} />
        </video>
      </div>
      <div className={styles.newsMain__text}>
        <p className={styles.newsMain__description}>
          С 12 по 14 мая на площади «Дружбы народов » официальный фестиваль кофе
          и чая в Узбекистане.☕️ <br /> <br />
          Основная цель фестиваля - Качественное развитие кофейной и чайной
          индустрии и бизнеса, а также перспектива сотрудничества и обмена
          опытом от топовых бариста и барменами. <br /> <br /> Кроме того
          отдельное внимание будет уделено возрождению и развитию национальных
          традиций узбекского чаепития. 🫖 Посетители Tashkent Coffee & Tea
          Festival 2023 смогут попробовать авторские напитки, среди которых не
          только разновидности кофе, но и лимонады, какао, смузи, купить зёрна
          от лучших обжарщиков Узбекистана и приобрести полезные подарки для
          своих близких. <br /> <br />
          А так же вас ждет концерт ведущих звезд нашей страны, танцевальные
          батлы и грандиозный фейерверк! <br /> <br />
          Контактный номер: <br /> +99850 007-8878 <br /> +99894 983-09-99
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
