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
import { useTranslations } from "next-intl";

const National = () => {
    const t = useTranslations();

  return (
    <div className={styles.newsMain}>
      <h1 className={styles.newsMain__title}>
        {t("news.national")}
      </h1>
      <div className={styles.newsMain__images}>
        <Image
          src={"/assets/img/national.png"}
          alt="kazanImage"
          width={600}
          height={400}
        />
      </div>
      <div className={styles.newsMain__text}>
        <p className={styles.newsMain__description}>
        B  рамках Международной недели паломнического туризма 28 ноября текущего года в Бухарской области прошел Национальный гастрономический фестиваль, привлекший путешественников-мусульман 
        из разных стран.
          <br /> <br />
        </p>
      </div>
    </div>
  );
};
export default National;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
};
