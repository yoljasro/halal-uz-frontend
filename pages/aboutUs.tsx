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
import axios from "axios";
// styles
import styles from "../styles/aboutUs.module.sass";

interface About{
  id: string;
  description: string;
}

const AboutUs: FC<any> = () => {
  const t = useTranslations();
  const [about, setAbout] = useState<About[]>([]);
  const url = "http://localhost:5000/about";
  useEffect(() => {
    axios.get<{about:About[]}>(url).then(function (response) {
      setAbout(response.data.about);
      console.log(response)
    }).catch(err => console.log(err));
  } ,[]);


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
        {
        about && about.length>0 && about.map(item=>{
          return(
            <p className={styles.cont__content__description} key={item.id}>{item.description}</p>
          )
         })
        }
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