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
import { SocialNetworks } from "../socialNetworks";
import { Button } from "@mui/material";

export const ProductionsNew = () => {
  const t = useTranslations();
  const router = useRouter();

  return (
    <div className={styles.cont} id="productions">
      <MainPageTitle
        subtitle={t("pageManufacturers.title")}
        description={t("pageManufacturers.information")}
      />
      <div className={styles.production}>
        <div className={styles.production__card}>
          <Image
            src={"/assets/img/siyob.png"}
            alt="siyob"
            width={180}
            height={180}
          />
          <h3 className={styles.production__title}>SIYOB FERMA</h3>
          <div className={styles.production__card__section}>
            <a rel="noreferrer" target={"_blank"} href={"https://siyobferma.uz"}>
              <Button variant="contained" className={styles.production__btn}>
                {t("pageManufacturers.site")}
              </Button>
            </a>
            <br />
            <Button variant="contained" className={styles.production__viewBtn}>
              <a rel="noreferrer"
                className={styles.production__link}
                target={"_blank"}
                href="/assets/documents/siyob.pdf"
              >
                {t("pageManufacturers.certificate")}
              </a>
            </Button>
            <SocialNetworks
              instagram=" https://instagram.com/siyobferma.uz?igshid=NDk5N2NlZjQ="
              facebook="https://www.facebook.com/siyob.ferma?mibextid=LQQJ4d"
              telegram="https://t.me/siyobferma_uz"
            />
          </div>
        </div>

        <div className={styles.production__card}>
          <Image
            src={"/assets/img/shashlikP.png"}
            alt="siyob"
            width={180}
            height={180}
          />
          <h3 className={styles.production__title}>SHASHLIKUZ</h3>
          <div className={styles.production__card__section}>
            <Button variant="contained" className={styles.production__btn}>
              {t("pageManufacturers.site")}
            </Button>
            <br />
            <Button variant="contained" className={styles.production__viewBtn}>
              <a rel="noreferrer"
                className={styles.production__link}
                target={"_blank"}
                href="/assets/documents/shashlikuz.pdf"
              >
                {" "}
                {t("pageManufacturers.certificate")}
              </a>
            </Button>
            <SocialNetworks
              instagram="https://instagram.com/shashlikuz?igshid=NDk5N2NlZjQ="
              facebook="https://www.facebook.com/shashlikuz1?mibextid=LQQJ4d"
              telegram="https://t.me/shashlikuz_group"
            />
          </div>
        </div>
        <div className={styles.production__card}>
          <Image
            src={"/assets/img/agroBravo.png"}
            alt="siyob"
            width={180}
            height={180}
          />
          <h3 className={styles.production__title}>AGRO-BRAVO</h3>
          <div className={styles.production__card__section}>
            <a rel="noreferrer" target="_blank" href={"https://agrobravo.uz/ru/"}>
              <Button variant="contained" className={styles.production__btn}>
                {t("pageManufacturers.site")}
              </Button>
            </a>
            <br />
            <Button variant="contained" className={styles.production__viewBtn}>
              <a rel="noreferrer"
                className={styles.production__link}
                target={"_blank"}
                href="/assets/documents/agro.pdf"
              >
                {" "}
                {t("pageManufacturers.certificate")}
              </a>
            </Button>
            <SocialNetworks
              instagram=" https://instagram.com/agrobravo.uz?igshid=NDk5N2NlZjQ="
              facebook="https://www.facebook.com/agrobravo.uz?mibextid=LQQJ4d"
              telegram="/"
            />
          </div>
          <div>
          </div>
        </div>

        <div className={styles.production__card}>
          <Image
            src={"/assets/img/goldenCorn.png"}
            alt="siyob"
            width={180}
            height={180}
          />
          <h3 className={styles.production__title}>GOLDEN-CORN</h3>
          <div className={styles.production__card__section}>
            <a rel="noreferrer" target={"_blank"} href={"https://golden-corn.uz/"}>
              <Button variant="contained" className={styles.production__btn}>
                {t("pageManufacturers.site")}
              </Button>
            </a>
            <br />
            <Button variant="contained" className={styles.production__viewBtn}>
              <a rel="noreferrer"
                className={styles.production__link}
                target={"_blank"}
                href="/assets/documents/goldencorn.pdf"
              >
                {" "}
                {t("pageManufacturers.certificate")}
              </a>
            </Button>
            <SocialNetworks
              instagram=" https://www.instagram.com/goldencorn_uz/"
              facebook="https://www.facebook.com/goldencornuz/"
              telegram="/"
            />
          </div>
        </div>

        <div className={styles.production__card}>
          <Image
            src={"/assets/img/chaki_chak.png"}
            alt="siyob"
            width={180}
            height={180}
          />
          <h3 className={styles.production__title}>Chak-Chak</h3>
          <div className={styles.production__card__section}>
            <a rel="noreferrer" target={"_blank"} href={"/"}>
              <Button variant="contained" className={styles.production__btn}>
                {t("pageManufacturers.site")}
              </Button>
            </a>
            <br />
            <Button variant="contained" className={styles.production__viewBtn}>
              <a rel="noreferrer"
                className={styles.production__link}
                target={"_blank"}
                href="/assets/documents/biriktiredi.pdf"
              >
                {" "}
                {t("pageManufacturers.certificate")}
              </a>
            </Button>
            <SocialNetworks
              instagram=""
              facebook=""
              telegram="/"
            />
          </div>
        </div>

        <div className={styles.production__card}>
          <Image
            src={"/assets/img/remax.svg"}
            alt="siyob"
            width={180}
            height={180}
            className={styles.production__remax}
          />
          <h3 className={styles.production__title}>Remax</h3>
          <div className={styles.production__card__section}>
            <a rel="noreferrer" target={"_blank"} href={"/"}>
              <Button variant="contained" className={styles.production__btn}>
                {t("pageManufacturers.site")}
              </Button>
            </a>
            <br />
            <Button variant="contained" className={styles.production__viewBtn}>
              <a rel="noreferrer"
                className={styles.production__link}
                target={"_blank"}
                href="/assets/documents/remax.pdf"
              >
                {" "}
                {t("pageManufacturers.certificate")}
              </a>
            </Button>
            <SocialNetworks
              instagram=""
              facebook=""
              telegram="/"
            />
          </div>
        </div>
        
      </div>
    </div>
  );
};
