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

type SocialNetworks = {
  instagram: string;
  facebook: string;
  telegram: string;
};

export const SocialNetworks: FC = () => {
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
      {/* <Link href={instagram}> */}
        <Image
          src={"/assets/img/instaRes.png"}
          alt="instagram"
          width={40}
          height={40}
        />
      {/* <Link href={facebook}> */}
        <Image
          src={"/assets/img/faceRes.png"}
          alt="faceebook"
          width={40}
          height={40}
        />
      {/* <Link href={telegram}> */}
        <Image
          src={"/assets/img/telegramRes.png"}
          alt="telragram"
          width={40}
          height={40}
        />
    </div>
  );
};
