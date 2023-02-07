// next components
import Link from "next/link";
import Image from "next/image";
// nuka carousel
import Carousel from "nuka-carousel/lib/carousel";
// react
import React, { FC, ChangeEventHandler, useState, useEffect } from "react";
// next intl
import { useTranslations } from "next-intl";
// router
import { useRouter } from "next/router";
// styles
import styles from "./index.module.sass";
import { Button } from "@mui/material";

export const Header: FC<any> = () => {
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
      {/* <Carousel
        autoplay={false}
        autoplayInterval={7000}
        animation={'fade'}
        wrapAround={true}
        pauseOnHover={true}
        renderCenterRightControls={null}
        renderCenterLeftControls={null}
        renderBottomCenterControls={null}
        swiping={false}
      > */}
      <div className={styles.cont__map}>
        <div className={styles.cont__map__img}>
          <Image
            src={"/assets/img/headerBg.png"}
            alt="header"
            width={1440}
            height={720}
          />
        </div>
      </div>

      {/* <div className={styles.cont__map}>
          <Image
            src={"/assets/img/travelone.jpg"}
            alt="header"
            width={1440}
            height={720}
          />
          {/* <div className={styles.cont__map__location}>
            Xorazm
          </div>
          <div className={styles.cont__map__region}>
            <Image
              src={"/assets/img/location.png"}
              alt="location"
              width={20}
              height={24}
            />{" "}
            Xorazm didimu tepada
          </div> */}
      {/* </div> */}
      {/* 
        <div className={styles.cont__map}>
          <Image
            src={"/assets/img/traveltwo.jpg"}
            alt="header"
            width={1440}
            height={720}
          />
        </div>

        <div className={styles.cont__map}>
          <Image
            src={"/assets/img/travel3.jpg"}
            alt="header"
            width={1440}
            height={720}
          />
        </div>

        <div className={styles.cont__map}>
          <Image
            src={"/assets/img/travel4.jpg"}
            alt="header"
            width={1440}
            height={720}
          />
        </div>

        <div className={styles.cont__map}>
          <Image
            src={"/assets/img/travelfive.png"}
            alt="header"
            width={1440}
            height={720}
          />
        </div>

        <div className={styles.cont__map}>
          <Image
            src={"/assets/img/travel6.jpg"}
            alt="header"
            width={1440}
            height={720}
          />
        </div>

        <div className={styles.cont__map}>
          <Image
            src={"/assets/img/travel7.jpg"}
            alt="header"
            width={1440}
            height={720}
          />
        </div>

        <div className={styles.cont__map}>
          <Image
            src={"/assets/img/travel8.jpg"}
            alt="header"
            width={1440}
            height={720}
          />
        </div>

        <div className={styles.cont__map}>
          <Image
            src={"/assets/img/travel9.jpg"}
            alt="header"
            width={1440}
            height={720}
          />
        </div>

        <div className={styles.cont__map}>
          <Image
            src={"/assets/img/travel11.jpg"}
            alt="header"
            width={1440}
            height={720}
          />
        </div>

        <div className={styles.cont__map}>
          <Image
            src={"/assets/img/travel12.jpg"}
            alt="header"
            width={1440}
            height={720}
          />
        </div> */}
      {/* </Carousel> */}
      <div className={styles.cont__info}>
        <h1 className={styles.cont__info__title}>{t("mainC.company")}</h1>
        <p className={styles.cont__info__description}>{t("certificate")}</p>
        <button className={styles.cont__info__btn}>
          <Link href={"/aboutUs"}>{t("btnMore")} </Link>
        </button>
      </div>

      <div className={styles.cont__location}>Центр Исламской Цивилизации</div>
      <div className={styles.cont__region}>
        <Image
          src={"/assets/img/location.png"}
          alt="location"
          width={20}
          height={24}
        />{" "}
        Ташкент
      </div>
    </div>
  );
};
