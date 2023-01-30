import React, { useState, useEffect } from "react";
import { FC } from "react";
import styles from "./index.module.sass"; 
import Image from "next/image";
import axios from "axios";

interface data {
  name: string;
  lastName: string;
} 
export const UserInfo: FC<any> = () => {
  const url = "http://localhost:4000/api/users-info";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const url = "https://localhost:4000/api/users-info"



  function saveData() {
    console.log(firstName, lastName)
    let data = { firstName, lastName }
    axios
      .post(url  , data)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      });
      
  }

  return (
    <div>
      <input
        type="text"
        onChange={(e:   any) => {
          setFirstName(e.target.value);
        }}
        placeholder="first-name"
        value={firstName}
        name="firstName"
      />
      <input
        type="text"
        onChange={(e: any) => {
          setLastName(e.target.value);
        }}
        placeholder="last-name"
        value={lastName}
        name="lastName"
      />
      <button onClick={saveData} type="button">
        Submit
      </button>
    </div>
  );
};

