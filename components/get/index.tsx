import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./index.module.sass";

export const Get = () => {
  const [data, setData] = useState([]);
  const url = "http://139.144.180.200:3000/product-info";
  useEffect(() => {
    axios.get(url).then(function (response) {
      setData(response.data);
    // console.log(response.data)
    });
  });
  return (
    <div>
      {data.map((item:any, index) => (
        <div key={index} className={styles.container}>
          <div className={styles.cont}>
            <p>{item.name}</p>
            <img src={`https://http://139.144.180.200:3000/img/img1.jpg`} alt="images products" />
          </div>
        </div>
      ))}
    </div>
  );
};
