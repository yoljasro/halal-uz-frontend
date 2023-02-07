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

export const Footer: FC<any> = () => {
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
      <div className={styles.cont__contacts}>
        <h1 className={styles.cont__title}>КОНТАКТЫ</h1>
        <p className={styles.cont__address}>
          СП «WORLD HALAL COMMITTEE», <br /> Адрес: Узбекистан, г.Ташкент,
          Мирзо-Улугбекский район, <br /> ул. Алтынтепа <br /> 354 Тел: +998 71
          266-77-78, +998 71 266-78-00 <br /> Эл. Почта:
          committeehalal@gmail.com
        </p>
        <Link href={"https://instagram.com/world.halal"} target={"_blank"}>
          <Image
            className={styles.cont__social}
            src={"/assets/img/instagram.png"}
            alt="instagram"
            width={45}
            height={45}
          />
        </Link>
        <Link href={"https://www.facebook.com/WorldHalalCommittee?mibextid=LQQJ4d"} target={"_blank"}>
          <Image
            className={styles.cont__social}
            src={"/assets/img/face/book.png"}
            alt="facebook"
            width={45}
            height={45}
          />
        </Link>
        <Link href={"/"} target={"_blank"}>
          <Image
            className={styles.cont__social}
            src={"/assets/img/telegram.png"}
            alt="telegram"
            width={45}
            height={45}
          />
        </Link>
        <Link href={"/"} target={"_blank"}>
          <Image
            className={styles.cont__social}
            src={"/assets/img/whatsapp.png"}
            alt="instagram"
            width={45}
            height={45}
          />
        </Link>
        <p className={styles.cont__plan}>Режим работы:</p>
        <p className={styles.cont__workPlan}>Пн - Пт, 09:00 - 18:00</p>
      </div>

      <div className={styles.cont__menus}>
        <ul className={styles.cont__menus__menu}>
          <li>О нас</li>
          <li>Рестораны</li>
          <li>Производители</li>
          <li>Халяль Шеф</li>
          <li>Халяль Гид</li>
        </ul>

        <ul className={styles.cont__menus__menu}>
          {/* <li>Условия использования</li> */}
          {/* <li>Политика конфиденциальности</li> */}
          <li>Часто задаваемые вопросы</li>
          <li>
            <Link className={styles.cont__menus__menu__link} href={"/"}>
              Подать заявку
            </Link>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};
