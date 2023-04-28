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
import styles from "../styles/restaurants.module.sass";
import { MainPageTitle } from "../components/MainPageTitle";
import { SocialNetworks } from "../components/socialNetworks";
import { RestaurantsModel, RestaurantsType } from "../constants";
import { Button } from "@mui/material";
import { GetStaticProps } from "next";

const Restaurants: FC<any> = () => {
  const t = useTranslations();

  return (
    <div className={styles.restaurants}>
      <MainPageTitle
        subtitle={t("pageRestaurants.title")}
        description={t("pageRestaurants.information")}
      />
      <div className={styles.restaurants__cont}>
        <div className={styles.restaurants__card}>
          <Image
            className={styles.restaurants__img}
            src={"/assets/img/xanAhmad.png"}
            width={600}
            height={330}
          />
          <div className={styles.restaurants__logo}>
            <Image
              src={"/assets/img/xanAhmad2.png"}
              alt="sarik bola"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.restaurants__content}>
            <h1 className={styles.restaurants__title}>KHAN AHMAD</h1>
            <p className={styles.restaurants__description}>
              {t("pageRestaurants.ahmad")}
            </p>
            <Button
              variant="contained"
              className={styles.restaurants__certificateBtn}
            >
              <a target={"_blank"} href="/assets/documents/ahmad.pdf">
                {t("pageManufacturers.certificate")}
              </a>
            </Button>
            <div className={styles.restaurants__socialNetworks}>
              <a
                target={"_blank"}
                href={
                  "https://www.instagram.com/khanahmad_restaurant/?igshid=NDk5N2NlZjQ%3D"
                }
              >
                <Image
                  src={"/assets/img/instagram.png"}
                  alt="instagram"
                  width={45}
                  height={45}
                />
              </a>
              <a
                target={"_blank"}
                href="https://www.facebook.com/profile.php?id=100054751930596&mibextid=LQQJ4d"
              >
                <Image
                  src={"/assets/img/facebook.png"}
                  alt="instagram"
                  width={45}
                  height={45}
                />
              </a>

              <a target={"_blank"} href="https://t.me/KhanAhmad_restaurant">
                <Image
                  src={"/assets/img/telegram.png"}
                  alt="instagram"
                  width={45}
                  height={45}
                />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.restaurants__card}>
          <Image src={"/assets/img/appex.png"} width={600} height={330} />
          <div className={styles.restaurants__logo}>
            <Image
              src={"/assets/img/apexpizza2.png"}
              alt="appex2"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.restaurants__content}>
            <h1 className={styles.restaurants__title}>appexpizza</h1>
            <p className={styles.restaurants__description}>
              {t("pageRestaurants.appex")}
            </p>
            <Button
              variant="contained"
              className={styles.restaurants__certificateBtn}
            >
              <a target={"_blank"} href="/assets/documents/appex.pdf">
                {t("pageManufacturers.certificate")}
              </a>
            </Button>
            <div className={styles.restaurants__socialNetworks}>
              <a
                target={"_blank"}
                href={
                  "https://www.instagram.com/apexpizza.uz/?igshid=NDk5N2NlZjQ%3D"
                }
              >
                <Image
                  src={"/assets/img/instagram.png"}
                  alt="instagram"
                  width={45}
                  height={45}
                />
              </a>
              <a
                target={"_blank"}
                href="https://www.facebook.com/apexpizza.uz?mibextid=LQQJ4d"
              >
                <Image
                  src={"/assets/img/facebook.png"}
                  alt="instagram"
                  width={45}
                  height={45}
                />
              </a>

              <a target={"_blank"} href="/">
                <Image
                  src={"/assets/img/telegram.png"}
                  alt="instagram"
                  width={45}
                  height={45}
                />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.restaurants__card}>
          <Image
            className={styles.restaurants__img}
            src={"/assets/img/sarikbola.png"}
            width={600}
            height={330}
          />
          <div className={styles.restaurants__logo}>
            <Image
              src={"/assets/img/sarikbola2.png"}
              alt="sarik bola"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.restaurants__content}>
            <h1 className={styles.restaurants__title}>Sariq Bola</h1>
            <p className={styles.restaurants__description}>
              {t("pageRestaurants.sariq")}
            </p>
            <Button
              variant="contained"
              className={styles.restaurants__certificateBtn}
            >
              <a target={"_blank"} href="/assets/documents/sariq.pdf">
                {t("pageManufacturers.certificate")}
              </a>
            </Button>
            <div className={styles.restaurants__socialNetworks}>
              <a
                target={"_blank"}
                href={
                  "https://www.instagram.com/sariqbola_pizza/?igshid=NDk5N2NlZjQ%3D"
                }
              >
                <Image
                  src={"/assets/img/instagram.png"}
                  alt="instagram"
                  width={45}
                  height={45}
                />
              </a>
              <a
                target={"_blank"}
                href="https://www.facebook.com/sariqbolapizza/?mibextid=LQQJ4d"
              >
                <Image
                  src={"/assets/img/facebook.png"}
                  alt="instagram"
                  width={45}
                  height={45}
                />
              </a>

              <a target={"_blank"} href="/">
                <Image
                  src={"/assets/img/telegram.png"}
                  alt="instagram"
                  width={45}
                  height={45}
                />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.restaurants__card}>
          <Image src={"/assets/img/shashlik.png"} width={600} height={330} />
          <div className={styles.restaurants__logo}>
            <Image
              src={"/assets/img/shashlikk.png"}
              alt="appex2"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.restaurants__content}>
            <h1 className={styles.restaurants__title}>Shashlik Uz</h1>
            <p className={styles.restaurants__description}>
              {t("pageRestaurants.shashlik")}
            </p>
            <Button
              variant="contained"
              className={styles.restaurants__certificateBtn}
            >
              <a target={"_blank"} href="/assets/documents/shashlik.pdf">
                {t("pageManufacturers.certificate")}
              </a>
            </Button>
            <div className={styles.restaurants__socialNetworks}>
              <a
                target={"_blank"}
                href={
                  "https://www.instagram.com/shashlikuz/?igshid=NDk5N2NlZjQ%3D"
                }
              >
                <Image
                  src={"/assets/img/instagram.png"}
                  alt="instagram"
                  width={45}
                  height={45}
                />
              </a>
              <a
                target={"_blank"}
                href="https://www.facebook.com/shashlikuz1?mibextid=LQQJ4d"
              >
                <Image
                  src={"/assets/img/facebook.png"}
                  alt="instagram"
                  width={45}
                  height={45}
                />
              </a>

              <a target={"_blank"} href="https://t.me/shashlikuz_group">
                <Image
                  src={"/assets/img/telegram.png"}
                  alt="instagram"
                  width={45}
                  height={45}
                />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.restaurants__card}>
          <Image src={"/assets/img/nihal0.png"} width={600} height={330} />
          <div className={styles.restaurants__logo}>
            <Image
              src={"/assets/img/nihal.png"}
              alt="appex2"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.restaurants__content}>
            <h1 className={styles.restaurants__title}>Nihol</h1>
            <p className={styles.restaurants__description}>
              {t("pageRestaurants.nihol")}
            </p>
            <Button
              variant="contained"
              className={styles.restaurants__certificateBtn}
            >
              <a target={"_blank"} href="/assets/documents/nihol.pdf">
                {t("pageManufacturers.certificate")}
              </a>
            </Button>
            <div className={styles.restaurants__socialNetworks}>
              <a
                target={"_blank"}
                href={"https://www.instagram.com/nihol_cafe"}
              >
                <Image
                  src={"/assets/img/instagram.png"}
                  alt="instagram"
                  width={45}
                  height={45}
                />
              </a>
              <a target={"_blank"} href="https://www.facebook.com/Nihol.cafe/">
                <Image
                  src={"/assets/img/facebook.png"}
                  alt="instagram"
                  width={45}
                  height={45}
                />
              </a>

              <a target={"_blank"} href="https://t.me/niholcafee">
                <Image
                  src={"/assets/img/telegram.png"}
                  alt="instagram"
                  width={45}
                  height={45}
                />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.restaurants__card}>
          <Image src={"/assets/img/karadeniz2.jpg"} width={600} height={330} />
          <div className={styles.restaurants__logo}>
            <Image
              src={"/assets/img/karadenizlogo.jpg"}
              alt="appex2"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.restaurants__content}>
            <h1 className={styles.restaurants__title}>Karadeniz</h1>
            <p className={styles.restaurants__description}>
              {t("pageRestaurants.karadeniz")}
            </p>
            <Button
              variant="contained"
              className={styles.restaurants__certificateBtn}
            >
              <a target={"_blank"} href="/assets/documents/karadeniz.pdf">
                {t("pageManufacturers.certificate")}
              </a>
            </Button>
            <div className={styles.restaurants__socialNetworks}>
              <a
                target={"_blank"}
                href={"https://www.instagram.com/nihol_cafe"}
              >
                <Image
                  src={"/assets/img/instagram.png"}
                  alt="instagram"
                  width={45}
                  height={45}
                />
              </a>
              <a target={"_blank"} href="https://www.facebook.com/Nihol.cafe/">
                <Image
                  src={"/assets/img/facebook.png"}
                  alt="instagram"
                  width={45}
                  height={45}
                />
              </a>

              <a target={"_blank"} href="https://t.me/niholcafee">
                <Image
                  src={"/assets/img/telegram.png"}
                  alt="instagram"
                  width={45}
                  height={45}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.restaurants__moreBtn}>
        <Link href="/nav">
          <Button variant="contained">{t("btnMore")}</Button>
        </Link>
      </div>
    </div>
  );
};

export default Restaurants;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
};
