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
import styles from "../styles/uzbChefs.module.sass";
import { MainPageTitle } from "../components/MainPageTitle";
import { SocialNetworks } from "../components/socialNetworks";
import { Button } from "@mui/material";
import Head from "next/head";
import { GetStaticProps } from "next";

const UzbChefs: FC<any> = ({ props }) => {
  const t = useTranslations();

  return (
    <div className={styles.cont}>
      <Head>
        <title>UZB Halal Chefs </title>
        <meta
          name="description"
          content="worldhalal.uz Halol sertifikatini beruvchi kompaniya rasmiy web sayti"
        />
        <meta
          name="google-site-verification"
          content="Pi7kisuljjOmFbBlvmk-S8DASJP-WbIGUQ1ERs9XwS4"
        />
        <link rel="icon" href="/assets/img/logo.svg" />
      </Head>
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

        <div className={styles.cont__chefs__card}>
          <Image
            src="/assets/img/command2.png"
            width={280}
            height={390}
            alt="chef1"
          />
          <div className={styles.cont__chefs__card__hoverContent}>
            <h3>Akhmad Khamdamov</h3>
            <SocialNetworks
              instagram=" https://instagram.com/fathullakhan_?igshid=NDk5N2NlZjQ="
              facebook="https://www.facebook.com/fathulla.khan.796?mibextid=LQQJ4d"
              telegram="@Fathullakhan_001"
            />
             <a target={'_blank'} rel="noreferrer" href="assets/documents/ahmad.pdf">
              <Button className={styles.cont__certificateBtn} variant="contained">
                {t("pageManufacturers.certificate")}
              </Button>
            </a>
          </div>
        </div>

        <div className={styles.cont__chefs__card}>
          <Image
            src="/assets/img/command4.png"
            width={280}
            height={390}
            alt="chef2"
          />

          <div className={styles.cont__chefs__card__hoverContent2}>
            <h3>Mirbabaev Elyorbek</h3>
            <SocialNetworks
              instagram=""
              facebook="/"
              telegram="/"
            />
             <a target={'_blank'} rel="noreferrer" href="assets/documents/elyor.pdf">
              <Button className={styles.cont__certificateBtn} variant="contained">
                {t("pageManufacturers.certificate")}
              </Button>
            </a>
          </div>
        </div>

        <div className={styles.cont__chefs__card}>
          <Image
            src="/assets/img/command5.png"
            width={280}
            height={390}
            alt="chef2"
          />

          <div className={styles.cont__chefs__card__hoverContent2}>
            <h3>Ruziboyev Azamat</h3>
            <SocialNetworks
              instagram=""
              facebook="/"
              telegram="/"
            />
             <a target={'_blank'} rel="noreferrer" href="assets/documents/azamat.pdf">
              <Button className={styles.cont__certificateBtn} variant="contained">
                {t("pageManufacturers.certificate")}
              </Button>
            </a>
          </div>

          
        </div>

        <div className={styles.cont__chefs__card}>
          <Image
            src="/assets/img/razikov.png"
            width={280}
            height={390}
            alt="chef2"
          />

          <div className={styles.cont__chefs__card__hoverContent2}>
            <h3>Davron Razikov</h3>
            <SocialNetworks
              instagram=""
              facebook="/"
              telegram="/"
            />
             <a target={'_blank'} rel="noreferrer" href="assets/documents/razikov.pdf">
              <Button className={styles.cont__certificateBtn} variant="contained">
                {t("pageManufacturers.certificate")}
              </Button>
            </a>
          </div>

          
        </div>

      </div>

    </div>
  );
};

export default UzbChefs;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
};

