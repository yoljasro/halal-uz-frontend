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

export const Productions = () => {
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
    <div className={styles.cont} id="productions">
      <MainPageTitle
        subtitle="ПРОИЗВОДИТЕЛИ"
        description="Здесь указаны производители продуктов питания, которые получили сертификат Халяль"
      />
      <div className={styles.cont__productions}>
        <div className={styles.cont__productions__card}>
          <Image
            src={"/assets/img/siyob.png"}
            alt="siyob"
            width={180}
            height={180}
            className={styles.cont__productions__card__img}
          />
          <p className={styles.cont__productions__card__title}>SIYOB FERMA</p>
          <div className={styles.cont__productions__card__hoverContent}>
            <Link
              href={
                "https://www.siyobferma.uz/?fbclid=PAAaZoczZM9mEBs79QfIJBKDMS3mnhcLHQRFfy7blglqEId8HySgl3bk5h-LY"
              }
            >
              <button>Перейти на сайт</button> <br />
              <a target={"_blank"} href="/assets/documents/siyob.pdf">
                {" "}
                Посмотреть сертификат
              </a>
            </Link>
            <SocialNetworks
              instagram=" https://instagram.com/siyobferma.uz?igshid=NDk5N2NlZjQ="
              facebook="https://www.facebook.com/siyob.ferma?mibextid=LQQJ4d"
              telegram="https://www.facebook.com/siyob.ferma?mibextid=LQQJ4d"
            />
          </div>
        </div>

        <div className={styles.cont__productions__card}>
          <Image
            src={"/assets/img/shashlik.png"}
            alt="sashlik"
            width={180}
            height={180}
            className={styles.cont__productions__card__img}
          />
          <p className={styles.cont__productions__card__title}> SHASHLIKUZ</p>
          <div className={styles.cont__productions__card__hoverContent}>
              <button>Перейти на сайт</button> <br />
              <a target={"_blank"} href="/assets/documents/shashlikuz.pdf">
                {" "}
                Посмотреть сертификат
              </a>
            <SocialNetworks
              instagram="https://instagram.com/shashlikuz?igshid=NDk5N2NlZjQ="
              facebook="https://www.facebook.com/shashlikuz1?mibextid=LQQJ4d"
              telegram="https://t.me/shashlikuz_group"
            />
          </div>
        </div>
        <div className={styles.cont__productions__card}>
          <Image
            src={"/assets/img/agroBravo.png"}
            alt="agroBravo"
            width={180}
            height={180}
            className={styles.cont__productions__card__img}
          />
          <p className={styles.cont__productions__card__title}>
            SIYOB AGROBRAVO
          </p>
          <div className={styles.cont__productions__card__hoverContent}>
            <Link href={"http://www.agrobravo.uz/ru/"}>
              <button>Перейти на сайт</button> <br />
              <a target={"_blank"} href="/assets/documents/agro.pdf">
                {" "}
                Посмотреть сертификат
              </a>
            </Link>
            <SocialNetworks
              instagram=" https://instagram.com/agrobravo.uz?igshid=NDk5N2NlZjQ="
              facebook="https://www.facebook.com/agrobravo.uz?mibextid=LQQJ4d"
              telegram="/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
