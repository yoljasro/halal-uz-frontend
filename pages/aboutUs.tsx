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

  const disablePdf = () => {
    window.open(
      "/assets/documents/halal1.pdf",
      "",
      "resizable=yes, scrollbars=yes, titlebar=yes, width=1024, toolbar=0 ,  height=900, top=10, left=10"
    );
  };


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
      <a
        // onClick={disablePdf}
        className={styles.cont__link}
        href="/assets/documents/halal1.pdf"
        target="_blank"
      >
        Просмотр документов
      </a>
      <br />
      <a
        className={styles.cont__link}
        href="/assets/documents/halal2.pdf"
        target="_blank"
      >
        Просмотр документов
      </a>
      <br />
      <a
        className={styles.cont__link}
        href="/assets/documents/halal3.pdf"
        target="_blank"
      >
        Просмотр документов
      </a>
      <div className={styles.cont__links}>
        <a
          className={styles.cont__links__link}
          href="/assets/documents/halal4.pdf"
          target="_blank"
        >
          Просмотр документов
        </a>

        <a
          className={styles.cont__links__link}
          href="/assets/documents/halal5.pdf"
          target="_blank"
        >
          Просмотр документов
        </a>

        <a
          className={styles.cont__links__link}
          href="/assets/documents/halal6.pdf"
          target="_blank"
        >
          Просмотр документов
        </a>
      </div>
    </div>
  );
};

export default AboutUs;