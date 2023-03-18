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
import { Button } from "@mui/material";

export const Header: FC<any> = () => {
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
