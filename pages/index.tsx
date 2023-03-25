// import { Main } from "../components/Main";
import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../components/Navbar";
import type { NextPage, GetStaticProps } from "next";
// import { Header } from "../components/Head";
// import { UserInfo } from "../components/UserInfo";
import styles from "../styles/Home.module.sass";
import { useRouter } from "next/router";
import { Header } from "../components/Header"; 
import { Partners } from "../components/Partners";
import { Footer } from "../components/Footer";
import { Members } from "../components/Members";
import { Travels } from "../components/Travels";
import { Restaurants } from "../components/Restaurants";
import { Main } from "../components/Main";
import { Chefs } from "../components/Chefs";
import { Productions } from "../components/Productions";
import { NewRes } from "../components/NewRes";
import { ProductionsNew } from "../components/ProductionsNew";
// import { Get } from "../components/get";
// import useTranslations  from 'use-intl'

export default function Home() {
  // const { locale, locales, push, asPath } = useRouter();

  return (
    <div className={styles.container}>
      <div>
      </div>
      <Head>

        <title>Halal.uz </title>
        <meta
          name="description"
          content="Halal.uz Halol sertifikatini beruvchi kom  paniya rasmiy web sayti"
        />
<meta name="google-site-verification" content="Pi7kisuljjOmFbBlvmk-S8DASJP-WbIGUQ1ERs9XwS4" />
        <link rel="icon" href="/assets/img/logo.svg" />
      </Head> 
      {/* <UserInfo /> */}
      <Navbar /> 
       <Header/>  
       {/* <Travels/> */}
      {/* <Restaurants/> */}
      {/* <NewRes/> */}
      {/* <Productions/> */}
      <ProductionsNew/>
      <Chefs/>
       <Members/>
       <Partners/>    
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
      props: {
          messages: (await import(`../messages/${locale}.json`)).default
      }
  }
}

