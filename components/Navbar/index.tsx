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

export const Navbar = () => {
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
      <ul className={styles.cont__menu}>
        <Link className={styles.cont__menu__link} href="/">
            <li className={styles.cont__menu__link__main}>{t("main")}</li>
        </Link>
        <Link className={styles.cont__menu__link} href={"/aboutUs"}>
            <li>{t("our")}</li>
        </Link>
        
        <Link className={styles.cont__menu__link} href="#productions">
            <li>{t("productive")}</li>
        </Link>
        <Link className={styles.cont__menu__link} href="#chefs">
            <li>{t("chef")}</li>
        </Link>
        <Link className={styles.cont__menu__link} href="/restaurants">
            <li>{t("restaurants")}</li>
        </Link>
        <Link className={styles.cont__menu__link} href="#partners">
            <li>{t("partners")}</li>
        </Link>

        <Link className={styles.cont__menu__link} href="#members">
            <li>{t("partners")}</li>
        </Link>
        <Link className={styles.cont__menu__link} href="/halalMap">
            <li>Халяль Гид</li>   
        </Link>
      </ul>
    </div>
  );
};
