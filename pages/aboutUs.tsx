// next components
import Link from "next/link";
import Image from "next/image";
// nuka carousel
// react
import React, { FC, ChangeEventHandler, useState, useEffect } from "react";
// next intl
import { useTranslations } from "next-intl";
// router
import { useRouter } from "next/router";
// styles
import { MainPageTitle } from "../components/MainPageTitle"; 
// styles 
import styles from '../styles/AboutUs.module.sass'
import { Navbar } from "../components/Navbar";
import { Main } from "../components/Main";

 const AboutUs: FC<any> = ({props}) => {
  const t = useTranslations();
  const router = useRouter();
  const [selectedLang, setSelectedLang] = useState(router.locale);

  useEffect(() => {
    if (selectedLang) {
      router.push(router.asPath, undefined, {
        locale: selectedLang,
      });
    }
  }, [selectedLang]);




  return (

    <div className={styles.cont}>
        <Main/>
        <Navbar/>
        <MainPageTitle subtitle="ХАЛЯЛЬ ШЕФ" description="Этот раздел посвящён именитым Шеф-поварам, которые получили Международный Нагрудной Знак Халяль Шеф"/>
        <div className={styles.cont__chefs}>
          <div className={styles.cont__chefs__card}>Jasur</div>
        </div>
        </div>
  );
}

export default AboutUs