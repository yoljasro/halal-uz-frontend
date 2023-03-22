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
// import { restaurants } from "../../constants";
import { SocialNetworks } from "../socialNetworks";

export const Restaurants: FC<any> = () => {
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
      <MainPageTitle
        subtitle={t("pageRestaurants.title")}
        description={t("pageRestaurants.information")}
      />
      <div className={styles.cont__restaurants}>
        <div className={styles.cont__restaurants__restaurant}>
          <Image
            src="/assets/img/xanAhmad.png"
            alt="ergash meat"
            width={620}
            height={320}
            className={styles.cont__restaurants__restaurant__bg}
          />
          <Image
            src={"/assets/img/xanAhmad2.png"}
            alt="ergash meat house"
            width={100}
            height={100}
            className={styles.cont__restaurants__restaurant__img}
          />
          <div className={styles.cont__restaurants__restaurant__hoverContent}>
            <h1
              className={
                styles.cont__restaurants__restaurant__hoverContent__title
              }
            >
              KHAN AHMAD
            </h1>
            <p
              className={
                styles.cont__restaurants__restaurant__hoverContent__description
              }
            >
              Lorem ipsum dolor sit amet consectetur.
            </p>  
            <SocialNetworks
              instagram="https://www.instagram.com/khanahmad_restaurant/?igshid=NDk5N2NlZjQ%3D"
              facebook="https://www.facebook.com/profile.php?id=100054751930596&mibextid=LQQJ4d"
              telegram="https://t.me/KhanAhmad_restaurant"
            />
            <br />
            
            <button
              className={
                styles.cont__restaurants__restaurant__hoverContent__visitBtn
              }
            >
              Перейти на сайт
            </button>
            <Link href={"/cafes/khanahmad"}>
              <button
                className={
                  styles.cont__restaurants__restaurant__hoverContent__moreBtn
                }
              >
                Подробнее
              </button>
            </Link>
          </div>
        </div>

        <div className={styles.cont__restaurants__restaurant}>
          <Image
            src="/assets/img/appexPizza.png"
            alt="appex pizza"
            width={620}
            height={320}
            className={styles.cont__restaurants__restaurant__bg}
          />
          <Image
            src={"/assets/img/apexpizza2.png"}
            alt="appex"
            width={100}
            height={100}
            className={styles.cont__restaurants__restaurant__img}
          />
          <div className={styles.cont__restaurants__restaurant__hoverContent}>
            <h1
              className={
                styles.cont__restaurants__restaurant__hoverContent__title
              }
            >
              appexpizza
            </h1>
            <p
              className={
                styles.cont__restaurants__restaurant__hoverContent__description
              }
            >
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <SocialNetworks
              instagram="https://www.instagram.com/apexpizza.uz/?igshid=NDk5N2NlZjQ%3D"
              facebook=" https://www.facebook.com/apexpizza.uz?mibextid=LQQJ4d"
              telegram="/"
            />
            <br />
            <button
              className={
                styles.cont__restaurants__restaurant__hoverContent__visitBtn
              }
            >
              Перейти на сайт
            </button>
            <Link href={"/cafes/apexpizza"}>
              <button
                className={
                  styles.cont__restaurants__restaurant__hoverContent__moreBtn
                }
              >
                Подробнее{" "}
              </button>
            </Link>
          </div>
        </div>

        <div className={styles.cont__restaurants__restaurant}>
          <Image
            src="/assets/img/sarikbola.png"
            alt="sarik bola"
            width={620}
            height={320}
            className={styles.cont__restaurants__restaurant__bg}
          />
          <Image
            src={"/assets/img/sarikbola2.png"}
            alt="sarik bola"
            width={100}
            height={100}
            className={styles.cont__restaurants__restaurant__img}
          />
          <div className={styles.cont__restaurants__restaurant__hoverContent}>
            <h1
              className={
                styles.cont__restaurants__restaurant__hoverContent__title
              }
            >
              SARIQ BOLA
            </h1>
            <p
              className={
                styles.cont__restaurants__restaurant__hoverContent__description
              }
            >
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <SocialNetworks
              instagram="https://www.instagram.com/sariqbola_pizza/?igshid=NDk5N2NlZjQ%3D"
              facebook="https://www.facebook.com/sariqbolapizza/?mibextid=LQQJ4d"
              telegram="/"
            />
            <br />
            <button
              className={
                styles.cont__restaurants__restaurant__hoverContent__visitBtn
              }
            >
              Перейти на сайт
            </button>
            <Link href={"/cafes/sariqbola"}>
              <button
                className={
                  styles.cont__restaurants__restaurant__hoverContent__moreBtn
                }
              >
                Подробнее{" "}
              </button>
            </Link>
          </div>
        </div>

        <div className={styles.cont__restaurants__restaurant}>
          <Image
            src="/assets/img/shashlikuz.png"
            alt="shashlik uz"
            width={620}
            height={320}
            className={styles.cont__restaurants__restaurant__bg}
          />
          <Image
            src={"/assets/img/shashlik.png"}
            alt="shashlik uz"
            width={100}
            height={100}
            className={styles.cont__restaurants__restaurant__img}
          />
          <div className={styles.cont__restaurants__restaurant__hoverContent}>
            <h1
              className={
                styles.cont__restaurants__restaurant__hoverContent__title
              }
            >
              SHASHLIK UZ
            </h1>
            <p
              className={
                styles.cont__restaurants__restaurant__hoverContent__description
              }
            >
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <SocialNetworks
              instagram="https://www.instagram.com/shashlikuz/?igshid=NDk5N2NlZjQ%3D"
              facebook="https://www.facebook.com/shashlikuz1?mibextid=LQQJ4d"
              telegram="https://t.me/shashlikuz_group"
            />
            <br />
            <button
              className={
                styles.cont__restaurants__restaurant__hoverContent__visitBtn
              }
            >
              Перейти на сайт
            </button>
            <Link href={"/cafes/shashlik"}>
              <button
                className={
                  styles.cont__restaurants__restaurant__hoverContent__moreBtn
                }
              >
                Подробнее{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Link href="/restaurants">
        <button className={styles.cont__btn}>Смотреть больше</button>
      </Link>
    </div>
  );
};
