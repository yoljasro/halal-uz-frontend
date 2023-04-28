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

  return (
    <div className={styles.navbar}>
      <ul className={styles.navbar__menu}>
        <Link href={"/aboutUs"}>
          <li>{t("our")}</li>
        </Link>

        <Link target={"_blank"} href="/news">
          <li>{t("pagesTitle.news")}</li>
        </Link>

        <Link target={"_blank"} href="/nav">
          <li>{t("restaurants")}</li>
        </Link>

        <Link href="#productions">
          <li>{t("productive")}</li>
        </Link>
        <Link href="#chefs">
          <li>{t("chef")}</li>
        </Link>

        <Link href="#members">
          <li>{t("members")}</li>
        </Link>
        <Link href="#partners">
          <li>{t("partners")}</li>
        </Link>

        {/* <Link href="/hotels">
          <li>{t("pagesTitle.hotels")}</li>
        </Link> */}

        <Link href="/googleMap">
          <li>{t("map")}</li>
        </Link>
      </ul>
    </div>
  );
};
