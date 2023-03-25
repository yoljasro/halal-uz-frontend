// next components
import Link from "next/link";
import Image from "next/image";
// nuka carousel
import Carousel from "nuka-carousel/lib/carousel";
// react
import React, { FC, ChangeEventHandler, useState, useEffect } from "react";
// next intl
import { useTranslations } from "next-intl";
// router
import { useRouter } from "next/router";
// styles
import styles from "./index.module.sass";

export const Header: FC<any> = () => {
  const t = useTranslations();

  return (
    <div className={styles.header}>
      <div className={styles.header__info}>
        <p className={styles.header__title}>
          {t("mainC.company")}
          <span>{t("mainC.w")}</span>
        </p>
        <p className={styles.header__description}>{t("certificate")}</p>
        <button className={styles.header__btn}>
          <Link href={"/aboutUs"}>{t("btnMore")}</Link>
        </button>
      </div>
      <div className={styles.header__location}>
        <div className={styles.header__address}>
          {t("address")}
        </div>
        <div className={styles.header__loc}>
          {t("location")}
        </div>
      </div>
    </div>
  );
};
