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
// mui components
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { TextField } from "@mui/material";

export const Form = () => {
  const t = useTranslations();
  const [open, setOpen] = React.useState(false);  
  const router = useRouter();
  const [selectedLang, setSelectedLang] = useState(router.locale);
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  const close = () => {
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
    <div className={styles.form}>
      <div className={styles.cont}>
        {/* <p onClick={close}>CLose</p> */}
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
            label="Имя"
          />

          <TextField
            className={styles.cont__form__lastName}
            type={"text"}
            variant="outlined"
            label="Фамилия"
          />

          <TextField
            className={styles.cont__form__brandName}
            type={"text"}
            variant="outlined"
            label="Название бренда"
          />

          <InputLabel
            className={styles.cont__form__inputLabel}
            id="demo-simple-select-label"
          >
            Выбрать вид деятельности
          </InputLabel>
          <Select
            className={styles.cont__form__select}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            placeholder="text"
          >
            <MenuItem value={10}>Производство продуктов питания</MenuItem>
            <MenuItem value={20}>Заведение общественного питания</MenuItem>
            <MenuItem value={30}>Гостиницы (хостели, мотели и т.п)</MenuItem>
          </Select>

          <TextField
            className={styles.cont__form__tel}
            type={"tel"}
            variant="outlined"
            label="Телефон"
          />

          <TextField
            className={styles.cont__form__tel}
            type={"email"}
            variant="outlined"
            label="Эл. почта"
          />

          <button className={styles.cont__form__btn}>Отправить</button>
        </div>
      </div>
    </div>
  );
};
