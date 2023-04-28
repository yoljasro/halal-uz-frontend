// next image a components
import Image from "next/image";
// import a from "next/a";
// react
import React, { FC, ChangeEventHandler, useState, useEffect } from "react";
// next intl
import { useTranslations } from "next-intl";
// router
import { useRouter } from "next/router";
//styles
import styles from "./index.module.sass";
// intl


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

  return (
    <div className={styles.cont}>
      <a rel="noreferrer"  href={instagram} target={"_blank"}>
        <Image
          src={"/assets/img/instagramm.svg"}
          alt="instagram"
          width={30}
          height={30}
          className={styles.cont__social}
        />
      </a>
      <a rel="noreferrer"  href={facebook} target={"_blank"}>
        <Image
          src={"/assets/img/facebookk.svg"}
          alt="faceebook"
          width={30}
          height={30}
        />
      </a>
      <a rel="noreferrer"  href={telegram} target={"_blank"}>
        <Image
          src={"/assets/img/telegramm.svg"}
          alt="telragram"
          width={30}
          height={30}
        />
      </a>
    </div>
  );
};
