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
import { SocialNetworks } from "../socialNetworks";
import { Button } from "@mui/material";

export const Chefs: FC<any> = ({ props }) => {
  const t = useTranslations();

  return (
    <div className={styles.cont} id="chefs">
      <MainPageTitle
        subtitle={t("pageHalalChef.title")}
        description={t("pageHalalChef.information")}
      />
      <div className={styles.cont__chefs}>
        <div className={styles.cont__chefs__card}>
          <Image
            src="/assets/img/chef1.png"
            width={280}
            height={390}
            alt="chef1"
          />
          <div className={styles.cont__chefs__card__hoverContent}>
            <h3>Фатхуллахон ТУРАХАНОВ</h3>
            <SocialNetworks
              instagram=" https://instagram.com/fathullakhan_?igshid=NDk5N2NlZjQ="
              facebook="https://www.facebook.com/fathulla.khan.796?mibextid=LQQJ4d"
              telegram="@Fathullakhan_001"
            />
            <a target={'_blank'} rel="noreferrer" href="assets/documents/fatxulla.pdf">
              <Button className={styles.cont__certificateBtn} variant="contained">
                {t("pageManufacturers.certificate")}
              </Button>
            </a>
          </div>
        </div>

        <div className={styles.cont__chefs__card}>
          <Image
            src="/assets/img/chef2.png"
            width={280}
            height={390}
            alt="chef2"
          />

          <div className={styles.cont__chefs__card__hoverContent2}>
            <h3>Музаффар МИРЗАКАРИМОВ</h3>
            <SocialNetworks
              instagram="https://instagram.com/mirzakarimov.muzaffar?"
              facebook="/"
              telegram="/"
            />
             <a target={'_blank'} rel="noreferrer" href="assets/documents/muzaffar.pdf">
              <Button className={styles.cont__certificateBtn} variant="contained">
                {t("pageManufacturers.certificate")}
              </Button>
            </a>
          </div>
        </div>

        <div className={styles.cont__chefs__card}>
          <Image
            src="/assets/img/chef3.png"
            width={280}
            height={390}
            alt="chef3"
          />
          <div className={styles.cont__chefs__card__hoverContent}>
            <h3>Дониёр МАЛИКОВ</h3>
            <SocialNetworks
              instagram="https://instagram.com/doniyor_malikovv"
              facebook="/"
              telegram="/"
            />
            <a target={'_blank'} rel="noreferrer" href="assets/documents/doniyor.pdf">
              <Button className={styles.cont__certificateBtn} variant="contained">
                {t("pageManufacturers.certificate")}
              </Button>
            </a>
          </div>
        </div>

        <div className={styles.cont__chefs__card}>
          <Image
            src="/assets/img/chef4.png"
            width={280}
            height={390}
            alt="chef4"
          />

          <div className={styles.cont__chefs__card__hoverContent2}>
            <h3>Акмаль МАХМУДОВ</h3>
            <SocialNetworks
              instagram="https://instagram.com/chef_akmall?igshid=NDk5N2NlZjQ="
              facebook="/"
              telegram="/"
            />
            <a target={'_blank'} rel="noreferrer" href="assets/documents/akmal.pdf">
              <Button className={styles.cont__certificateBtn} variant="contained">
                {t("pageManufacturers.certificate")}
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.cont__btnMore}>
        <Link href="/chefs">
          <Button variant="contained">{t("btnMore")}</Button>
        </Link>
      </div>
    </div>
  );
};
