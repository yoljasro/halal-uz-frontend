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
// axios
// next
import type { NextPage, GetStaticProps } from "next";

import axios from "axios";
// styles
import styles from "../styles/aboutUs.module.sass";

interface About {
  id: string;
  description: string;
}

const AboutUs: FC<any> = () => {
  const t = useTranslations();
  const [about, setAbout] = useState<About[]>([]);
  const url = "http://smartshopcenter.org:5000/about";
  useEffect(() => {
    axios
      .get<{ about: About[] }>(url)
      .then(function (response) {
        setAbout(response.data.about);
        console.log(response);
      })
      .catch((err) => console.log(err));
  }, []);

  // const disablePdf = () => {
  //   window.open(
  //     "/assets/documents/halal1.pdf",
  //     "",
  //     "resizable=yes, scrollbars=yes, titlebar=yes, width=1024, toolbar=0 ,  height=900, top=10, left=10"
  //   );
  // };

  return (
    <div className={styles.cont}>
      <h1 className={styles.cont__title}>О НАС</h1>
      <div className={styles.cont__element}>
        <div className={styles.cont__content}>
          {about &&
            about.length > 0 &&
            about.map((item) => {
              return (
                <p className={styles.cont__content__description} key={item.id}>
                  {item.description}
                </p>
              );
            })}
        </div>
        <Image
          src={"/assets/img/aboutImg.png"}
          alt="aboutImg"
          width={359}
          height={297}
        />
      </div>
      <div className={styles.cont__certificate}>
        <p>Процесс получения серитификата</p>
        <a href="/assets/img/cer_uzb.jpg" target={"_blank"}>
          На узбекском
        </a>
        <a href="/assets/img/cer_ru.jpg" target={"_blank"}>
          На русском
        </a>
        <a href="/assets/img/cer_eng.jpg" target={"_blank"}>
          На английском
        </a>
      </div>
      <div className={styles.cont__documents}>
        <p className={styles.cont__documents__title}>
          Далее вы можете ознакомиться с документами, подтверждающие нашу
          деятельность.
        </p>
        <div className={styles.cont__documents__content}>
          <div className={styles.cont__documents__content__document}>
            <p>
              №1
              <a href="/assets/documents/halal1.pdf" target={"_blank"}>
                Устав на русском
              </a>
            </p>
            <p>
              №2
              <a href="/assets/documents/halal2.pdf" target={"_blank"}>
                Устав на английском
              </a>
            </p>
            <p>
              №3
              <a href="/assets/documents/halal3.pdf" target={"_blank"}>
                Требования Халяльной верификации
              </a>
            </p>
          </div>
          <div className={styles.cont__documents__content__document}>
            <p>
              №4
              <a href="/assets/documents/halal4.pdf" target={"_blank"}>
                OIC SMIIC 1 2019
              </a>
            </p>
            <p>
              №5
              <a href="/assets/documents/halal5.pdf" target={"_blank"}>
                OIC SMIIC 6 2019
              </a>
            </p>
            <p>
              №6
              <a href="/assets/documents/halal6.pdf" target={"_blank"}>
                OIC SMIIC 9 2019
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
};
