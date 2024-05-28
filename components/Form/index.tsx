// Form.tsx
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import styles from "./index.module.sass";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import axios from "axios";

export const Form = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [brandName, setBrandName] = useState("");
  const [activity, setActivity] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const t = useTranslations();

  const handleChange = (event: SelectChangeEvent) => {
    setActivity(event.target.value as string);
  };

  const handleSubmit = () => {
    const data = { name, surname, brandName, activity, phone, email };
    const url = "http://localhost:5000/form";
    console.log(url)

    if (name === "" || surname === "" || brandName === "" || activity === "" || phone === "" || email === "") {
      alert("Please fill in all fields");
      return;
    }

    axios.post(url, data)
      .then(function (response) {
        console.log(response);
        alert("Request sent to the database");
      })
      .catch(function (error) {
        console.log(error);
        alert("Error");
      });
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
            type="text"
            placeholder={t("mainC.name")}
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            className={styles.form__textField}
            type="text"
            placeholder={t("mainC.surname")}
            variant="outlined"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <div className={styles.form__input}>
          <TextField
            className={styles.form__textField}
            type="text"
            placeholder={t("mainC.brandName")}
            variant="outlined"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
          />
        </div>
        <div className={styles.form__select}>
          <InputLabel className={styles.form__label}>{t("mainC.activity")}</InputLabel>
          <Select
            className={styles.form__activity}
            value={activity}
            onChange={handleChange}
            displayEmpty
          >
            <MenuItem value="" disabled>{t("mainC.selectActivity")}</MenuItem>
            <MenuItem value={t("mainC.foodProduction")}>{t("mainC.foodProduction")}</MenuItem>
            <MenuItem value={t("mainC.foodEstablishment")}>{t("mainC.foodEstablishment")}</MenuItem>
            <MenuItem value={t("mainC.hotels")}>{t("mainC.hotels")}</MenuItem>
          </Select>
        </div>
        <div className={styles.form__input}>
          <TextField
            className={styles.form__textField}
            type="text"
            placeholder={t("mainC.phone")}
            variant="outlined"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextField
            className={styles.form__textField}
            type="email"
            placeholder={t("mainC.email")}
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Button variant="contained" onClick={handleSubmit} className={styles.form__btn}>{t("mainC.send")}</Button>
      </div>
    </div>
  );
};

