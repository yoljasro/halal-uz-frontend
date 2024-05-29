// Form.tsx
import React, { useState } from "react";
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
  const [serviceType, setServiceType] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setServiceType(event.target.value);
  };

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setter(event.target.value);
  };

  const handleSubmit = async () => {
    const data = { name, surname, brandName, serviceType, phone, email };
    const url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/form";

    if (!name || !surname || !brandName || !serviceType || !phone || !email) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post(url, data);
      console.log(response);
      alert("Request sent to the database");
    } catch (error) {
      console.error(error);
      alert("Error");
    }
  };

  return (
    <div className={styles.form}>
      <p className={styles.form__title}>Request Form</p>
      <div className={styles.form__text}>
        <p>Please fill out the form below to submit your request.</p>
      </div>
      <div className={styles.form__section}>
        <div className={styles.form__input}>
          <TextField
            className={styles.form__textField}
            type="text"
            placeholder="Name"
            variant="outlined"
            value={name}
            onChange={handleInputChange(setName)}
          />
          <TextField
            className={styles.form__textField}
            type="text"
            placeholder="Surname"
            variant="outlined"
            value={surname}
            onChange={handleInputChange(setSurname)}
          />
        </div>
        <div className={styles.form__input}>
          <TextField
            className={styles.form__textField}
            type="text"
            placeholder="Brand Name"
            variant="outlined"
            value={brandName}
            onChange={handleInputChange(setBrandName)}
          />
        </div>
        <div className={styles.form__select}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Service Type</InputLabel>
            <Select
              className={styles.form__activity}
              value={serviceType}
              onChange={handleChange}
              displayEmpty
              label="Service Type"
            >
              <MenuItem value="" disabled>
                Select Service Type
              </MenuItem>
              <MenuItem value="foodProduction">Food Production</MenuItem>
              <MenuItem value="foodEstablishment">Food Establishment</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={styles.form__input}>
          <TextField
            className={styles.form__textField}
            type="text"
            placeholder="Phone"
            variant="outlined"
            value={phone}
            onChange={handleInputChange(setPhone)}
          />
          <TextField
            className={styles.form__textField}
            type="email"
            placeholder="Email"
            variant="outlined"
            value={email}
            onChange={handleInputChange(setEmail)}
          />
        </div>
        <Button
          variant="contained"
          onClick={handleSubmit}
          className={styles.form__btn}
        >
          Send
        </Button>
      </div>
    </div>
  );
};
