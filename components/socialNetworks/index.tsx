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

export const SocialNetworks: FC<SocialNetworks> = ({
  instagram,
  facebook,
  telegram,
}) => {
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
      <Link href={instagram} target={"_blank"} >
        <Image
          src={"/assets/img/instagramm.svg"}
          alt="instagram"
          width={30}
          height={30}
          className={styles.cont__social}
        />
      </Link>
      <Link href={facebook} target={"_blank"}>
        <Image
          src={"/assets/img/facebookk.svg"}
          alt="faceebook"
          width={30}
          height={30}
        />
      </Link>
      <Link href={telegram} target={"_blank"}>
        <Image
          src={"/assets/img/telegramm.svg"}
          alt="telragram"
          width={30}
          height={30}
        />
      </Link>
    </div>
  );
};
