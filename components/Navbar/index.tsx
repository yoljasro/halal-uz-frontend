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

  return (
    <div className={styles.navbar}>
      <ul className={styles.navbar__menu}>
        <Link href="/">
          <li>{t("main")}</li>
        </Link>
        <Link href={"/aboutUs"}>
          <li>{t("our")}</li>
        </Link>

        <Link href="#productions">
          <li>{t("productive")}</li>
        </Link>
        <Link href="#chefs">
          <li>{t("chef")}</li>
        </Link>
        <Link href="/restaurants">
          <li>{t("restaurants")}</li>
        </Link>
        <Link href="#partners">
          <li>{t("partners")}</li>
        </Link>

        <Link href="#members">
          <li>{t("members")}</li>
        </Link>
        <Link href="/halalMap">
          <li>{t("map")}</li>
        </Link>
      </ul>
    </div>
  );
};
