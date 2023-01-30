// next image link components
import Image from "next/image";
import Link from "next/link";
// react
import React, { FC, ChangeEventHandler, useState, useEffect } from "react";
// next intl
import { useTranslations } from "next-intl";
// router
import { useRouter } from "next/router";
//styles
import styles from "./index.module.sass";
import { MainPageTitle } from "../MainPageTitle";
import { SocialNetworks } from "../socialNetworks";

export const Productions = () => {
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
      <MainPageTitle
        subtitle="ПРОИЗВОДИТЕЛИ"
        description="Здесь указаны производители продуктов питания, которые получили сертификат Халяль"
      />
      <div className={styles.cont__productions}>
        <div className={styles.cont__productions__card}>
          <Image
            src={"/assets/img/siyob.png"}
            alt="siyob"
            width={180}
            height={180}
            className={styles.cont__productions__card__img}
          />
          <p className={styles.cont__productions__card__title}>SIYOB FERMA</p>
          <div className={styles.cont__productions__card__hoverContent}>
            <button>Перейти на сайт</button> <br />
            <SocialNetworks />
          </div>
        </div>

        <div className={styles.cont__productions__card}>
          <Image
            src={"/assets/img/shashlik.png"}
            alt="sashlik"
            width={180}
            height={180}
            className={styles.cont__productions__card__img}
          />
          <p className={styles.cont__productions__card__title}> SHASHLIKUZ</p>
          <div className={styles.cont__productions__card__hoverContent}>
            <button>Перейти на сайт</button> <br />
            <SocialNetworks />
          </div>
        </div>
        <div className={styles.cont__productions__card}>
          <Image
            src={"/assets/img/agroBravo.png"}
            alt="agroBravo"
            width={180}
            height={180}
            className={styles.cont__productions__card__img}
          />
          <p className={styles.cont__productions__card__title}>
            SIYOB AGROBRAVO
          </p>
          <div className={styles.cont__productions__card__hoverContent}>
            <button>Перейти на сайт</button> <br />
            <SocialNetworks />
          </div>
        </div>
      </div>
    </div>
  );
};
