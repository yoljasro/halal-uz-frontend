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

  return (
    <div className={styles.footer}>
      <div className={styles.footer__section}>
        <p className={styles.footer__title}>{t("pageFooter.title")}</p>
        <div className={styles.footer__address}>
          <p>{t("pageFooter.address")}</p>
        </div>
        <div className={styles.footer__social}>
          <Link
            href={"https://instagram.com/world.halal?igshid=YmMyMTA2M2Y"}
            target="_blank"
          >
            <Image
              src={"/assets/img/instagram.png"}
              alt="instagram"
              width={45}
              height={45}
            />
          </Link>
          <Link
            href={
              "https://www.facebook.com/WorldHalalCommittee?mibextid=LQQJ4d"
            }
            target="_blank"
          >
            <Image
              src={"/assets/img/facebook.png"}
              alt="facebook"
              width={45}
              height={45}
            />
          </Link>
          <Link href={"/"} target="_blank">
            <Image
              src={"/assets/img/telegram.png"}
              alt="telegram"
              width={45}
              height={45}
            />
          </Link>
          <Link href={"/"} target="_blank">
            <Image
              src={"/assets/img/whatsapp.png"}
              alt="facebook"
              width={45}
              height={45}
            />
          </Link>
        </div>
        <p className={styles.footer__work}>{t("pageFooter.workingMode")}</p>
        <p className={styles.footer__plan}>
          {t("pageFooter.workingModeInformation")}
        </p>
      </div>
      <div className={styles.footer__section}>
        <ul>
          <Link href="/">
            <li>{t("main")}</li>
          </Link>
          <Link href={"/aboutUs"}>
            <li>{t("our")}</li>
          </Link>

          <Link href="#productions">
            <li>{t("productive")}</li>
          </Link>
          <Link href="#chefs">
            <li>{t("chef")}</li>
          </Link>
          <Link href="/restaurants">
            <li>{t("restaurants")}</li>
          </Link>

          <Link href="#members">
            <li>{t("partners")}</li>
          </Link>
          <Link href="/halalMap">
            <li>{t("map")}</li>
          </Link>
        </ul>
      </div>
      <div className={styles.footer__section}>
        <Link href={"/faq"}>
          <p className={styles.footer__faq}>{t("pageFooter.faq")}</p>
        </Link>
      </div>
    </div>
  );
};
