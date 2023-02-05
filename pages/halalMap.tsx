// next components
import Link from "next/link";
import Image from "next/image";
// nuka carousel
// react
import React, {
  FC,
  ChangeEventHandler,
  useState,
  useEffect,
  useRef,
} from "react";
// next intl
import { useTranslations } from "next-intl";
// router
import { useRouter } from "next/router";
// styles
import { MainPageTitle } from "../components/MainPageTitle";
// hook
import { useSize } from "../hooks/index"; 
//react-yandex-map
// import { FullscreenControl, Map, Placemark, YMaps } from "react-yandex-maps";sa
// styles
import styles from "../styles/git.index.module.sass";
import { Select } from "@mui/material";

const HalalMap: FC<any> = ({ props }) => {
  const t = useTranslations();
  const router = useRouter();
  const [selectedLang, setSelectedLang] = useState(router.locale);
  const contactsBlockRef = useRef<HTMLDivElement>(null);
  const size = useSize(contactsBlockRef);
  const [height, setHeight] = useState("679px");

  useEffect(() => {
    if (size) {
      const { width } = size;
      if (width < 1399) {
        setHeight("245px");
      }
    }
  }, [size]);

  useEffect(() => {
    if (selectedLang) {
      router.push(router.asPath, undefined, {
        locale: selectedLang,
      });
    }
  }, [selectedLang]);

  return (
    <div className={styles.cont}>
      <h3 className={styles.cont__title}>ХАЛЯЛЬ ГИД</h3>
      <div className={styles.cont__eventText}>
        <p className={styles.cont__eventText__description}>
          В данном разделе карта мира, с локациями где есть Гостиницы, заведения
          общестенного питания, а также производители продуктов питания, которые
          удостоились сертификата Халяль
        </p>
      </div>
      <div className={styles.cont__select}>
        <select className={styles.cont__select__category}>
          <option disabled>Выберите категорию:</option>
          <option value="first">First</option>
          <option value="Second">Second</option>
        </select>

        <select className={styles.cont__select__region} placeholder='n'>
          <option disabled>Выберите страну</option>
          <option value="First">First</option>
          <option value="Second">Second</option>
        </select>
      </div>
      <div className={styles.cont__map}>
       
      </div>
    </div>
  );
};

export default HalalMap;
