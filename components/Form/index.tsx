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
import { TextField } from "@mui/material";

export const Form = () => {
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
    <div className={styles.form}>
      <div className={styles.cont}>
        <h1 className={styles.cont__title}>ОСТАВИТЬ ЗАЯВКУ</h1>
        <p className={styles.cont__description}>
          Lorem ipsum dolor sit amet consectetur. Ornare nec leo molestie <br />
          bibendum ut. Elit urna nisl eros volutpat tellus aliquam.{" "}
        </p>
        <div className={styles.cont__form}>
          <TextField
            className={styles.cont__form__input}
            type={"text"}
            variant="outlined"
            placeholder="Имя"
          />

          <TextField
            className={styles.cont__form__input}
            type={"text"}
            variant="outlined"
            placeholder="Фамилия"
          />
        </div>
      </div>
    </div>
  );
};
