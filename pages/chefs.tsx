// react
import React, { FC } from "react";
// styles
import styles from "../styles/nav.module.sass";
// next
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import { Countries } from "../components/Countries";
import { MainPageTitle } from "../components/MainPageTitle";
import Head from "next/head";

const Header: FC<any> = () => {
  const t = useTranslations();

  return (
    <div className={styles.cont}>
      <Head>
        <title>Halal Chefs </title>
        <meta
          name="description"
          content="Halal.uz Halol sertifikatini beruvchi kompaniya rasmiy web sayti"
        />
        <meta
          name="google-site-verification"
          content="Pi7kisuljjOmFbBlvmk-S8DASJP-WbIGUQ1ERs9XwS4"
        />
        <link rel="icon" href="/assets/img/logo.svg" />
      </Head>
      <div className={styles.cont__text}>
        <MainPageTitle
          subtitle="Халяльные Chefs в странах мира"
          description="Здесь вы можете увидеть сертифицированные халяль Chefs по всему миру"
        />
      </div>
      <div>
        <Countries link={"/uzbChefs"} azerbajan={"/chefs/azerbajan"} saudia={"/chefs/saudia"} turkey={"/chefs/turkey"}/>
      </div>
    </div>
  );
};

export default Header;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
};
