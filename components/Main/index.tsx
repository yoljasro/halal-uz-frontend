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
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Form } from "../Form";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export const Main: FC<any> = () => {
  const [open, setOpen] = React.useState(false);
  const t = useTranslations();
  const router = useRouter();
  const [selectedLang, setSelectedLang] = useState(router.locale);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  useEffect(() => {
    if (selectedLang) {
      router.push(router.asPath, undefined, {
        locale: selectedLang,
      });
    }
  }, [selectedLang]);

  return (

    
    <div className={styles.cont}>
          <React.Fragment>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Form/>
      </Modal>
    </React.Fragment>
      <div className={styles.cont__logo}>
        <Image src={"/assets/img/logo.svg"} width={80} height={80} alt="logo" />
        <div className={styles.cont__logo__line}></div>
        <h1 className={styles.cont__logo__title}>
          ВСЕМИРНЫЙ ХАЛЯЛЬНЫЙ <br /> КОМИТЕТ  <span>(WICS)</span>{" "}
        </h1>
      </div>
      <div className={styles.cont__media}>
        <button onClick={handleOpen} className={styles.cont__media__btn}>Подать заявку</button>
        
      <select
        value={selectedLang}
        onChange={(e) => setSelectedLang(e.target.value)}
        className={styles.cont__media__select}
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
        <option className={styles.cont__media__select__option} value="arab">
        ARAB
          </option>
      </select>
      </div>
    </div>
  );
};
