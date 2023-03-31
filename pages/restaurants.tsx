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
import type { NextPage, GetStaticProps } from "next";
// styles
import styles from "../styles/restaurants.module.sass";
import { MainPageTitle } from "../components/MainPageTitle";
import { SocialNetworks } from "../components/socialNetworks";

 const Restaurants: FC<any> = () => {
  const t = useTranslations();

  return (
    <div className={styles.cont}>
      <MainPageTitle
        subtitle={t("pageRestaurants.title")}
        description={t("pageRestaurants.information")}
      />
      <div className={styles.restaurants}>
        <div className={styles.restaurants__card}>
          <div className={styles.restaurants__img}>
            <Image
              src={"/assets/img/xanAhmad2.png"}
              alt="sarik bola"
              width={100}
              height={100}
            />
            <div className={styles.restaurants__card__section}>
              <h1 className={styles.restaurants__title}>KHAN AHMAD</h1>
              <div className={styles.restaurants__text}>
                <p>{t("pageRestaurants.ahmad")}</p>
              </div>
              <SocialNetworks
                instagram="https://www.instagram.com/khanahmad_restaurant/?igshid=NDk5N2NlZjQ%3D"
                facebook="https://www.facebook.com/profile.php?id=100054751930596&mibextid=LQQJ4d"
                telegram="https://t.me/KhanAhmad_restaurant"
              />
              <br />
              <div className={styles.restaurants__btn}>
                <button className={styles.restaurants__visit}>
                 {t("pageManufacturers.site")}
                </button>
                <Link href={"/cafes/khanahmad"}>
                  <button className={styles.restaurants__more}>
                    {t("btnMore")}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.restaurants__card}>
          <div className={styles.restaurants__img}>
            <Image
              src={"/assets/img/apexpizza2.png"}
              alt="appex2"
              width={100}
              height={100}
            />
            <div className={styles.restaurants__card__section}>
              <h1 className={styles.restaurants__title}>appexpizza</h1>
              <div className={styles.restaurants__text}>
                <p>{t("pageRestaurants.appex")}</p>
              </div>
              <SocialNetworks
                instagram="https://www.instagram.com/apexpizza.uz/?igshid=NDk5N2NlZjQ%3D"
                facebook=" https://www.facebook.com/apexpizza.uz?mibextid=LQQJ4d"
                telegram="/"
              />
              <br />
              <div className={styles.restaurants__btn}>
                <button className={styles.restaurants__visit}>
                 {t("pageManufacturers.site")}
                </button>
                <Link href={"/cafes/apexpizza"}>
                  <button className={styles.restaurants__more}>
                    {t("btnMore")}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.restaurants__card}>
          <div className={styles.restaurants__img}>
            <Image
              src={"/assets/img/sarikbola2.png"}
              alt="appex2"
              width={100}
              height={100}
            />
            <div className={styles.restaurants__card__section}>
              <h1 className={styles.restaurants__title}>Sariq Bola</h1>
              <div className={styles.restaurants__text}>
                <p>{t("pageRestaurants.sariq")}</p>
              </div>
              <SocialNetworks
                instagram="https://www.instagram.com/sariqbola_pizza/?igshid=NDk5N2NlZjQ%3D"
                facebook="https://www.facebook.com/sariqbolapizza/?mibextid=LQQJ4d"
                telegram="/"
              />
              <br />
              <div className={styles.restaurants__btn}>
                <button className={styles.restaurants__visit}>
                 {t("pageManufacturers.site")}
                </button>
                <Link href={"/cafes/sariqbola"}>
                  <button className={styles.restaurants__more}>
                    {t("btnMore")}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.restaurants__card}>
          <div className={styles.restaurants__img}>
            <Image
              src={"/assets/img/shashlikk.png"}
              alt="appex2"
              width={100}
              height={100}
            />
            <div className={styles.restaurants__card__section}>
              <h1 className={styles.restaurants__title}>Shashlik Uz</h1>
              <div className={styles.restaurants__text}>
                <p>{t("pageRestaurants.shashlik")}</p>
              </div>
              <SocialNetworks
                instagram="https://www.instagram.com/shashlikuz/?igshid=NDk5N2NlZjQ%3D"
                facebook="https://www.facebook.com/shashlikuz1?mibextid=LQQJ4d"
                telegram="https://t.me/shashlikuz_group"
              />
              <br />
              <div className={styles.restaurants__btn}>
                <button className={styles.restaurants__visit}>
                 {t("pageManufacturers.site")}
                </button>
                <Link href={"/cafes/shashlik"}>
                  <button className={styles.restaurants__more}>
                    {t("btnMore")}
                  </button>
                </Link>
              </div>
            </div> 
          </div>
        </div>
        
        <div className={styles.restaurants__card}>
          <div className={styles.restaurants__img}>
            <Image
              src={"/assets/img/nihal.png"}
              alt="appex2"
              width={100}
              height={100}
            />
            <div className={styles.restaurants__card__section}>
              <h1 className={styles.restaurants__title}>Shashlik Uz</h1>
              <div className={styles.restaurants__text}>
                <p>{t("pageRestaurants.nihol")}</p>
              </div>
              <SocialNetworks
                instagram="https://www.instagram.com/shashlikuz/?igshid=NDk5N2NlZjQ%3D"
                facebook="https://www.facebook.com/shashlikuz1?mibextid=LQQJ4d"
                telegram="https://t.me/shashlikuz_group"
              />
              <br />
              <div className={styles.restaurants__btn}>
                <button className={styles.restaurants__visit}>
                 {t("pageManufacturers.site")}
                </button>
                <Link href={"/cafes/nihol"}>
                  <button className={styles.restaurants__more}>
                    {t("btnMore")}
                  </button>
                </Link>
              </div>
            </div> 
          </div>

          
        </div>

        <div className={styles.restaurants__card}>
          <div className={styles.restaurants__img}>
            <Image
              src={"/assets/img/karadenizlogo.jpg"}
              alt="appex2"
              width={100}
              height={100}
              className={styles.restaurants__logo}
            />
            <div className={styles.restaurants__card__section}>
              <h1 className={styles.restaurants__title}>Karadeniz</h1>
              <div className={styles.restaurants__text}>
                <p>{t("pageRestaurants.karadeniz")}</p>
              </div>
              <SocialNetworks
                instagram="https://instagram.com/karadeniz.uz?igshid=YmMyMTA2M2Y"
                facebook="/"
                telegram="/"
              />
              <br />
              <div className={styles.restaurants__btn}>
                <button className={styles.restaurants__visit}>
                 {t("pageManufacturers.site")}
                </button>
                <Link href={"/cafes/karadeniz"}>
                  <button className={styles.restaurants__more}>
                    {t("btnMore")}
                  </button>
                </Link>
              </div>
            </div> 
          </div>

          
        </div>
      </div>
    </div>
     
  );
};

export default Restaurants;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
      props: {
          messages: (await import(`../messages/${locale}.json`)).default
      }
  }
}