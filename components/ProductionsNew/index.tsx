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

export const ProductionsNew = () => {
  const t = useTranslations();

  return (
    <div className={styles.cont} id="productions">
      <MainPageTitle
        subtitle={t("pageManufacturers.title")}
        description={t("pageManufacturers.information")}
      />
      <div className={styles.production}>
        <div className={styles.production__card}>
          <Image
            src={"/assets/img/siyob.png"}
            alt="siyob"
            width={180}
            height={180}
          />
          <h3 className={styles.production__title}>SIYOB FERMA</h3>
          <div className={styles.production__card__section}>
            <button className={styles.production__btn}>Перейти на сайт</button>{" "}
            <br />
            <a
              className={styles.production__link}
              target={"_blank"}
              href="/assets/documents/siyob.pdf"
            >
              Посмотреть сертификат
            </a>
            <SocialNetworks
              instagram=" https://instagram.com/siyobferma.uz?igshid=NDk5N2NlZjQ="
              facebook="https://www.facebook.com/siyob.ferma?mibextid=LQQJ4d"
              telegram="https://www.facebook.com/siyob.ferma?mibextid=LQQJ4d"
            />
          </div>
        </div>

        <div className={styles.production__card}>
          <Image
            src={"/assets/img/shashlikP.png"}
            alt="siyob"
            width={180}
            height={180}
          />
          <h3 className={styles.production__title}>SHASHLIKUZ</h3>
          <div className={styles.production__card__section}>
            <button className={styles.production__btn}>Перейти на сайт</button>{" "}
            <br />
            <a
              className={styles.production__link}
              target={"_blank"}
              href="/assets/documents/shashlikuz.pdf"
            >
              {" "}
              Посмотреть сертификат
            </a>
            <SocialNetworks
              instagram="https://instagram.com/shashlikuz?igshid=NDk5N2NlZjQ="
              facebook="https://www.facebook.com/shashlikuz1?mibextid=LQQJ4d"
              telegram="https://t.me/shashlikuz_group"
            />
          </div>
        </div>
        <div className={styles.production__card}>
          <Image
            src={"/assets/img/agroBravo.png"}
            alt="siyob"
            width={180}
            height={180}
          />
          <h3 className={styles.production__title}>AGRO-BRAVO</h3>
          <div className={styles.production__card__section}>
            <button className={styles.production__btn}>Перейти на сайт</button>{" "}
            <br />
            <a
              className={styles.production__link}
              target={"_blank"}
              href="/assets/documents/shashlikuz.pdf"
            >
              {" "}
              Посмотреть сертификат
            </a>
            <SocialNetworks
              instagram="https://instagram.com/shashlikuz?igshid=NDk5N2NlZjQ="
              facebook="https://www.facebook.com/shashlikuz1?mibextid=LQQJ4d"
              telegram="https://t.me/shashlikuz_group"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
