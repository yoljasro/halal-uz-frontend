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

const KazanNews = () => {
  return (
    <div className={styles.newsMain}>
      <h1 className={styles.newsMain__title}>
        KAZANFORUM International Chefs Cup 2023 by WHS Kazan is the center of
        world halal cuisine
      </h1>
      <div className={styles.newsMain__images}>
        <Image
          src={"/assets/img/kazanforum.jpg"}
          alt="kazanImage"
          width={600}
          height={400}
        />
        <Image
          src={"/assets/img/kazanform2.jpg"}
          alt="kazanImage"
          width={600}
          height={400}
        />
        <Image
          src={"/assets/img/kazanform3.jpg"}
          alt="kazanImage"
          width={600}
          height={400}
        />

        <Image
          src={"/assets/img/kazanform4.jpg"}
          alt="kazanImage"
          width={600}
          height={400}
        />
      </div>
      <div className={styles.newsMain__text}>
        <p className={styles.newsMain__description}>
          National cuisine is an integral part of any country and culture. The
          richer the national cuisine at the destination, the more likely that
          visitors will return. <br /> <br />
          Aim: promote the popularization of halal cuisine and dishes that exist
          on the territory of the Republic of Tatarstan of the Russian
          Federation and beyond. Bring more diverse halal cuisine to Kazan
          restaurants as a legacy of the KAZANFORUM International Chefs Cup 2023
          by WHS. <br /> <br />
          18-19-20 МАY 2023 From May 18 to May 20, 2023, chefs from Turkey,
          Uzbekistan, Azerbaijan, Iran and Malaysia will prepare a halal menu
          from local delicacies of their countries in 5 well-known restaurants
          in Kazan, the capital of the Republic of Tatarstan. Each restaurant
          will be dedicated to the national cuisine of one specific country.
          Restaurant guests can order their favorite dish from a specially
          designed halal menu. While in 5 restaurants guests will be able to get
          acquainted and taste the national dishes of Türkiye, Uzbekistan,
          Azerbaijan, Iran and Malaysia <br /> <br />
          Moreover, in the main restaurant, which will be selected by the
          Government of the Republic of Tatarstan, there will be a full
          acquaintance with a complete immersion in the flavor of Turkish
          national cuisine. In this restaurant, guests can order dishes of the
          regional cuisine of the Black Sea coast, Central Anatolia, the
          South-Eastern region, as well as watch spectacular Shows for preparing
          and serving baklava, spicy bulgur cutlets Chig kofte, Myhlama (Turkish
          cheese fondue).
        </p>
      </div>
    </div>
  );
};
export default KazanNews;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
};
