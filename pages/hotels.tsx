import * as React from "react";
// styles
import styles from "../styles/hotels.module.sass";
// next
import type { NextPage, GetStaticProps } from "next";
import { MainPageTitle } from "../components/MainPageTitle";
import Head from "next/head";

const Hotels = () => {
  return (
    <div className={styles.cont}>
      <Head>
        <title>Halal Hotels </title>
        <meta
          name="description"
          content="Halal.uz Halol sertifikatini beruvchi kom  paniya rasmiy web sayti"
        />
        <meta
          name="google-site-verification"
          content="Pi7kisuljjOmFbBlvmk-S8DASJP-WbIGUQ1ERs9XwS4"
        />
        <link rel="icon" href="/assets/img/logo.svg" />
      </Head>
      <MainPageTitle subtitle="Hotels" description="This is Halal Hotels" />
    </div>
  );
};
export default Hotels;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
};
