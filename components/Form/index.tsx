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
// axios
import { MainPageTitle } from "../MainPageTitle";
// mui components
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { TextField } from "@mui/material";
import axios from "axios";

export const Form = () => {
  const [name, setName] = React.useState("");
  const [surname, setSurName] = React.useState("");
  const [brandName, setBrandName] = React.useState("");
  const [activity, setActivity] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const t = useTranslations();
  const [open, setOpen] = React.useState(false);

  interface RequestData {
    name: string;
    surname: string;
    prevState: null;
  }

  const handleChange = (event: SelectChangeEvent) => {
    setActivity(event.target.value as string);
  };
  const close = () => {
    setOpen(true);
  };
  const url = "http://localhost:5000/request";
  const data = { name, surname, brandName, activity, phone, email };
  const handleSubmit = () => {
    console.log(data);
    axios
      .post(url, data)
      .then(function (response) {
        console.log(response);
        alert("Submited")
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className={styles.form}>
      <div className={styles.cont}>
        <div className={styles.cont__btn}>
          <p>none</p>
      <button onClick={close} className={styles.cont__btn__close}>X</button>
      </div>
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
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <TextField
            className={styles.cont__form__lastName}
            type={"text"}
            variant="outlined"
            label="Фамилия"
            onChange={(e) => {
              setSurName(e.target.value);
            }}
          />

          <TextField
            className={styles.cont__form__brandName}
            type={"text"}
            variant="outlined"
            label="Название бренда"
            onChange={(e) => {
              setBrandName(e.target.value);
            }}
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
            value={activity}
            label="Age"
            placeholder="text"
            onChange={handleChange}
          >
            <MenuItem value={"Производство продуктов питания"}>
              Производство продуктов питания
            </MenuItem>
            <MenuItem value={"Заведение общественного питания"}>
              Заведение общественного питания
            </MenuItem>
            <MenuItem value={"Гостиницы (хостели, мотели и т.п)"}>
              Гостиницы (хостели, мотели и т.п)
            </MenuItem>
          </Select>

          <TextField
            className={styles.cont__form__tel}
            type={"tel"}
            variant="outlined"
            label="Телефон"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />

          <TextField
            className={styles.cont__form__tel}
            type={"email"}
            variant="outlined"
            label="Эл. почта"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <button onClick={handleSubmit} className={styles.cont__form__btn}>
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
};
