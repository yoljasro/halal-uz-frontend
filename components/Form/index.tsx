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
import Button from "@mui/material";
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

  const handleChange = (event: SelectChangeEvent) => {
    setActivity(event.target.value as string);
  };

  const url = "http://smartshopcenter.org:5000/request";
  const data = { name, surname, brandName, activity, phone, email };
 
  const handleSubmit = () => {
    console.log(data);
    if( name === ""){
      alert("Name required ")
    }
    else if (surname === ""){
      alert("Surname Required")
    }
    else if (brandName === ""){
      alert("BrandName Required")
    }
    else if (activity === ""){
      alert("Activity Required")
    }
    else if (phone === ""){
      alert("Phone Required")
    }
    else if (email === ""){
      alert("Email  Required")
    }
    axios
      .post(url, data)
      .then(function (response) {
        console.log(response);
        alert("Request Sended in Database")
      })
      .catch(function (error) {
        console.log(error);
        alert("Email already exits")
      });

      // required sytems

      
  };

  return (
    <div className={styles.form}>
      <p className={styles.form__title}>{t("mainC.request")}</p>
      <div className={styles.form__text}>
        <p>{t("mainC.requestDesc")}</p>
      </div>

      <div className={styles.form__section}>
        <div className={styles.form__input}>
          <TextField
            className={styles.form__textField}
            type={"text"}
            placeholder={"Имя"}
            variant={"outlined"}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <TextField
            className={styles.form__textField}
            type={"text"}
            placeholder={"Фамилия"}
            variant={"outlined"}
            onChange={(e) => {
              setSurName(e.target.value);
            }}
          />
        </div>
        <div className={styles.form__input}>
          <TextField
            className={styles.form__brandName}
            type={"text"}
            placeholder={"Название бренда"}
            variant={"outlined"}
            onChange={(e) => {
              setBrandName(e.target.value);
            }}
          />
        </div>
        <div className={styles.form__select}>
          <InputLabel
            className={styles.form__label}
            id="demo-simple-select-label"
          >
            Выбрать вид деятельности
          </InputLabel>
          <Select
            className={styles.form__activity}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={activity}
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
        </div>
        <div className={styles.form__input}>
          <TextField
            className={styles.form__textField}
            type={"text"}
            placeholder={"Телефон"}
            variant={"outlined"}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />

          <TextField
            className={styles.form__textField}
            type={"text"}
            placeholder={"Эл. почта"}
            variant={"outlined"}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <button className={styles.form__btn} onClick={handleSubmit}>Отправить</button>
      </div>
    </div>
  );
};