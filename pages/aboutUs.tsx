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
import styles from "../styles/aboutUs.module.sass";

const AboutUs: FC<any> = ({ props }) => {
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

  window.open(
    "/assets/documents/nihol.pdf",
    "",
    "resizable=yes, scrollbars=yes, toolbar=0 titlebar=yes, width=1024, height=900, top=10, left=10"
  );

  return (
    <div className={styles.cont}>
      <h1 className={styles.cont__title}>О НАС</h1>
      <div className={styles.cont__content}>
        <p className={styles.cont__content__description}>
          О нас - Всемирная платформа кулинарных сообществ исламских стран
          (WICS) была основана кулинарными ассоциациями 22 исламских стран 13
          мая 2017 года в Стамбуле (Турция). В 2019 году при WICS был основан
          Всемирный Халяльный Комитет (Далее ВХК). ВХК – сертифицирует
          туристические объекты, заведения общественного питания, а также
          производителей продуктов питания – основаясь на священном Коране и
          международных стандартов.
        </p>
      </div>
      <p className={styles.cont__document}>
        Далее вы можете ознакомиться с документами, подтверждающие нашу
        деятельность.
      </p>
      <Link className={styles.cont__link} href="/">
        {" "}
        <span>№1</span> Просмотр документов
      </Link>{" "}
      <br />
      <Link className={styles.cont__link} href="/">
        {" "}
        <span>№2</span> Просмотр документов
      </Link>
      <a href={"/assets/documents/nihol.pdf"} target={"_blank"}>
        Text
      </a>
    </div>
  );
};

export default AboutUs;
