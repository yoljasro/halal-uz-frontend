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
      <div className={styles.cont__info}>
        <h1 className={styles.cont__info__title}>
          Всемирный Халяльный Комитет <span>(WICS)</span>
        </h1>
        <p className={styles.cont__info__description}>
          Сертифицируем туристические объекты, заведения общественного питания,
          а также производителей продуктов питания, основываясь на священном
          Коране и международных стандартах.
        </p>
        <button className={styles.cont__info__btn}>
          <Link href={'/aboutUs'}>Подробно </Link>
        </button>
      </div>
    </div>
  );
};
