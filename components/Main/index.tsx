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
import styles from "./index.module.sass";
import { MainPageTitle } from "../MainPageTitle";
import { restaurants } from "../../constants";
// mui
import Box from "@mui/material/Box";
import { Form } from "../Form";
// modal
import Modal from "react-modal";

export const Main: FC<any> = () => {
  const t = useTranslations();
  const router = useRouter();
  const [selectedLang, setSelectedLang] = useState(router.locale);
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (selectedLang) {
      router.push(router.asPath, undefined, {
        locale: selectedLang,
      });
    }
  }, [selectedLang]);

  return (
    <div className={styles.main}>
      <div className={styles.main__section}>
        <Link href={"/"}>
          <Image
            src={"/assets/img/logo.svg"}
            alt="logo"
            width={80}
            height={80}
          />
        </Link>
        <div className={styles.main__title}>
          <p>
            {t("mainC.company")} <span>{t("mainC.w")}</span>
          </p>
        </div>
      </div>
      <div className={styles.main__section}>
        <button className={styles.main__btn} onClick={handleClick}>
          {t("mainC.btn")}
        </button>
        <Modal
          className={styles.main__modal}
          isOpen={isOpen}
          onRequestClose={handleClose}
        >
          <button className={styles.main__closeBtn} onClick={handleClose}>
            X
          </button>
          <Form />
        </Modal>
        <select
          className={styles.main__select}
          value={selectedLang}
          onChange={(e) => setSelectedLang(e.target.value)}
        >
          <option className={styles.cont__media__select__option} value="ru">
            RU
          </option>
          <option className={styles.cont__media__select__option} value="en">
            ENG
          </option>
          <option className={styles.cont__media__select__option} value="uz">
            UZ
          </option>
          <option className={styles.cont__media__select__option} value="tr">
            TR
          </option>
          <option className={styles.cont__media__select__option} value="ar-SA">
            ARA
          </option>
        </select>
      </div>
    </div>
  );
};
