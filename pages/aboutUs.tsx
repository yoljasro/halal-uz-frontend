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
import { MainPageTitle } from "../components/MainPageTitle";
// axios
// next
import type { NextPage, GetStaticProps } from "next";

import axios from "axios";
// styles
import styles from "../styles/aboutUs.module.sass";
import { SocialNetworks } from "../components/socialNetworks";
import { Button } from "@mui/material";
import Head from "next/head";

interface About {
  id: string;
  description: string;
}

const AboutUs: FC<any> = () => {
  const t = useTranslations();
  const router = useRouter();
  const [about, setAbout] = useState<About[]>([]);
  const url = "http://smartshopcenter.org:5000/about";
  useEffect(() => {
    axios
      .get<{ about: About[] }>(url)
      .then(function (response) {
        setAbout(response.data.about);
        console.log(response);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.cont}>
      <Head>
        <title>About Halal </title>
        <meta
          name="description"
          content="Halal.uz Halol sertifikatini beruvchi kom  paniya rasmiy web sayti"
        />
        <meta
          name="google-site-verification"
          content="Pi7kisuljjOmFbBlvmk-S8DASJP-WbIGUQ1ERs9XwS4"
        />
        {/* <link rel="noreferrer"f="/assets/img/logo.svg" /> */}
      </Head>
      <h1 className={styles.cont__title}>{t("pageAboutUs.title")}</h1>
      <div className={styles.cont__element}>
        <div className={styles.cont__content}>
          {/* {about &&
            about.length > 0 &&
            about.map((item) => {
              return (
                <p className={styles.cont__content__description} key={item.id}>
                  {item.description}
                </p>
              );
            })} */}
          <p className={styles.cont__content__description}>
            {t("pageAboutUs.information")}
          </p>
          <p className={styles.cont__content__tourist}>
            {t("pageAboutUs.tourist")}
          </p>
        </div>

        <Image alt='image'
          className={styles.cont__image}
          src={"/assets/img/aboutImg.png"}
          width={359}
          height={297}
        />

        <div className={styles.cont__content__location}>
          <p>{t("pageAboutUs.location")} :</p>
          <Button
            onClick={() =>
              router.push(
                "https://maps.windows.com/?form=WNAMSH&collection=point.41.322191_69.345869_Point"
              )
            }
            variant="contained"
          >
            {t("pageAboutUs.map")}
          </Button>
        </div>

        <div className={styles.cont__chefsUz}>
          <MainPageTitle
            subtitle="Our Partner web site"
            description="The official website of the Association of Cooks of Uzbekistan"
          />
          <a rel="noreferrer" target="_blank" href="http://chefs.uz/">
          <Image alt='image' src={'/assets/img/cookersLogo.png'} width={150} height={150} />
          </a>
          <Button variant="contained">
            {" "}
            <a rel="noreferrer" target="_blank" href="http://chefs.uz/">
              {t("pageManufacturers.site")}
            </a>
          </Button>
        </div>
        <div className={styles.cont__contact}>
          <h3>{t("pageFooter.title")}</h3>
        </div>
      </div>
      <div className={styles.cont__certificate}>
        <p>{t("pageAboutUs.process")}</p>
        <a rel="noreferrer" href="/assets/img/cer_uzb.jpg" target={"_blank"}>
          <Button variant="contained">{t("pageAboutUs.uzbekCharter")}</Button>
        </a>
        <a rel="noreferrer" href="/assets/img/cer_ru.jpg" target={"_blank"}>
          <Button variant="contained">{t("pageAboutUs.russianCharter")}</Button>
        </a>
        <a rel="noreferrer" href="/assets/img/cer_eng.jpg" target={"_blank"}>
          <Button variant="contained">{t("pageAboutUs.englishCharter")}</Button>
        </a>
      </div>
      <div className={styles.cont__documents}>
        <p className={styles.cont__documents__title}>
          {t("pageAboutUs.document")}
        </p>
        <div className={styles.cont__documents__content}>
          <div className={styles.cont__documents__content__document}>
            <p>
              №1
              <a rel="noreferrer" href="/assets/documents/halal1.pdf" target={"_blank"}>
                <Button variant="contained">
                  {t("pageAboutUs.russianCharter")}
                </Button>
              </a>
            </p>
            <p>
              №2
              <a rel="noreferrer" href="/assets/documents/halal2.pdf" target={"_blank"}>
                <Button variant="contained">
                  {t("pageAboutUs.englishCharter")}
                </Button>
              </a>
            </p>
            <p>
              №3
              <a rel="noreferrer" href="/assets/documents/halal3.pdf" target={"_blank"}>
                <Button variant='contained'>
                {t("pageAboutUs.vertification")}
                </Button>
              </a>
            </p>
          </div>
          <div className={styles.cont__documents__content__document}>
            <p>
              №4
              <a rel="noreferrer" href="/assets/documents/halal4.pdf" target={"_blank"}>
              <Button variant='contained'>
                OIC SMIIC 1 2019
                </Button>
              </a>
            </p>
            <p>
              №5
              <a rel="noreferrer" href="/assets/documents/halal5.pdf" target={"_blank"}>
              <Button variant='contained'>
                OIC SMIIC 6 2019
                </Button>
              </a>
            </p>
            <p>
              №6
              <a rel="noreferrer" href="/assets/documents/halal6.pdf" target={"_blank"}>
              <Button variant='contained'>
                OIC SMIIC 9 2019
                </Button>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.cont__contact}>
        <h3>{t("pageAboutUs.command")}</h3>
        <div className={styles.cont__commands}>
          <div className={styles.cont__card}>
            <Image alt='image'
              src={"/assets/img/commandone.png"}
              width={200}
              height={300}
            />
            <h3 className={styles.cont__card__name}>Акбар Умаров</h3>
            <p className={styles.cont__card__description}> Qomita raisi</p>
          </div>
          <div className={styles.cont__card}>
            <Image alt='image'
              src={"/assets/img/commandtwo.png"}
              width={200}
              height={300}
            />
            <h3 className={styles.cont__card__name}>Akbar Umarov</h3>
            <p className={styles.cont__card__description}>Rais Orinbosari</p>
          </div>
          <div className={styles.cont__card}>
            <Image alt='image' src={"/assets/img/command1.png"} width={200} height={400} />
            <h3 className={styles.cont__card__name}>Акбар Умаров</h3>
            <p className={styles.cont__card__description}>Lavozim</p>
          </div>
          <div className={styles.cont__card}>
            <Image alt='image' src={"/assets/img/command2.png"} width={200} height={300} />
            <h3 className={styles.cont__card__name}>Акбар Умаров</h3>
            <p className={styles.cont__card__description}>Lavozim</p>
          </div>
          <div className={styles.cont__card}>
            <Image alt='image' src={"/assets/img/command01.png"} width={200} height={300} />
            <h3 className={styles.cont__card__name}>Full-name</h3>
            <p className={styles.cont__card__description}>Lavozim</p>
          </div>
          <div className={styles.cont__card}>
            <Image alt='image' src={"/assets/img/command5.png"} width={200} height={300} />
            <h3 className={styles.cont__card__name}>Full-name</h3>
            <p className={styles.cont__card__description}>Lavozim</p>
          </div>
          <div className={styles.cont__card}>
            <Image alt='image' src={"/assets/img/command6.png"} width={200} height={300} />
            <h3 className={styles.cont__card__name}>Full-name</h3>
            <p className={styles.cont__card__description}>Lavozim</p>
          </div>
          <div className={styles.cont__card}>
            <Image alt='image' src={"/assets/img/command04.png"} width={200} height={300} />
            <h3 className={styles.cont__card__name}>Full-name</h3>
            <p className={styles.cont__card__description}>Lavozim</p>
          </div>

          <div className={styles.cont__card}>
            <Image alt='image' src={"/assets/img/command01.png"} width={200} height={300} />
            <h3 className={styles.cont__card__name}>Full-name</h3>
            <p className={styles.cont__card__description}>Lavozim</p>
          </div>

          <div className={styles.cont__card}>
            <Image alt='image' src={"/assets/img/command02.png"} width={200} height={300} />
            <h3 className={styles.cont__card__name}>Full-name</h3>
            <p className={styles.cont__card__description}>Lavozim</p>
          </div>

          <div className={styles.cont__card}>
            <Image alt='image' src={"/assets/img/command03.png"} width={200} height={300} />
            <h3 className={styles.cont__card__name}>Full-name</h3>
            <p className={styles.cont__card__description}>Lavozim</p>
          </div>

          <div className={styles.cont__card}>
            <Image alt='image' src={"/assets/img/command04.png"} width={200} height={300} />
            <h3 className={styles.cont__card__name}>Full-name</h3>
            <p className={styles.cont__card__description}>Lavozim</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
};
