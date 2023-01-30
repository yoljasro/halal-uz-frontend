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

export const Partners: FC<any> = () => {
  const t = useTranslations();
  const router = useRouter();
  const [selectedLang, setSelectedLang] = useState(router.locale);

  useEffect(() => {
    if (selectedLang) {
      router.push(router.asPath, undefined, {
        locale: selectedLang,
      });
    }
  }, [selectedLang]);

  return (
    <div className={styles.cont}>
      <MainPageTitle subtitle="ПАРТНЁРЫ" />
      <div className={styles.cont__partners}>
        <Image
          alt="partner1"
          src="/assets/img/partner1.png"
          width={170}
          height={171}
        />

        <Image
          alt="partner2"
          src="/assets/img/partner2.png"
          width={170}
          height={171}
        />
        <Image
          alt="partner3"
          src="/assets/img/partner3.png"
          width={170}
          height={171}
        />  

        <Image
          alt="partner3"
          src="/assets/img/partner4.png"
          width={170}
          height={171}
        />

        <Image
          alt="partner5"
          src="/assets/img/partner5.png"
          width={170}
          height={171}
        />

        <Image
          alt="partner5"
          src="/assets/img/partner6.png"
          width={170}
          height={171}
        />

      </div>
    </div>
  );
};
