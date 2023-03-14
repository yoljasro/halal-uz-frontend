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
import Carousel from "nuka-carousel/lib/carousel";
import { nextButtonDisabled } from "nuka-carousel/lib/default-controls";

export const Members: FC<any> = () => {
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
    <div className={styles.cont} id='members'>
      <MainPageTitle
        subtitle={t("pageOurMembers.title")}
        description={t("pageOurMembers.information")}
      />
      <Carousel
        className={styles.cont__carousel}
        autoplay={true}  
        swiping={true}
        // animation={'zoom'}
        adaptiveHeight={false}
        autoplayInterval={5000}
        speed={5000}
        wrapAround={true}
        renderCenterRightControls={null}
        renderCenterLeftControls={null}
        renderBottomCenterControls={null}

      >
        <div className={styles.cont__carousel__flag}>
          <Image
            src={"/assets/img/azerbayjan.png"}
            alt={"azerbayjan"}
            width={120}
            height={120}
          />
          <p className={styles.cont__carousel__flag__region}>{t("pageOurMembers.azerbaijan")}</p>
        </div>

        <div className={styles.cont__carousel__flag}>
          <Image
            src={"/assets/img/bos.png"}
            alt={"bosniya"}
            width={120}
            height={120}
          />
          <p className={styles.cont__carousel__flag__region}>
            БОСНИЯ И ГЕРЦЕГОВИНА
          </p>
        </div>

        <div className={styles.cont__carousel__flag}>
          <Image
            src={"/assets/img/kaz.png"}
            alt={"kaz"}
            width={120}
            height={120}
          />
          <p className={styles.cont__carousel__flag__region}>{t("pageOurMembers.kazakhstan")}</p>
        </div>

        <div className={styles.cont__carousel__flag}>
          <Image
            src={"/assets/img/maldivi.png"}
            alt={"maldivi"}
            width={120}
            height={120}
          />
          <p className={styles.cont__carousel__flag__region}>{t("pageOurMembers.bosniaAndHerzegovina")}</p>
        </div>

        <div className={styles.cont__carousel__flag}>
          <Image
            src={"/assets/img/kgz.png"}
            alt={"kgz"}
            width={120}
            height={120}
          />
          <p className={styles.cont__carousel__flag__region}>{t("pageOurMembers.kyrgyzstan")}</p>
        </div>

        <div className={styles.cont__carousel__flag}>
          <Image
            src={"/assets/img/morocco.png"}
            alt={"morocco"}
            width={120}
            height={120}
          />
          <p className={styles.cont__carousel__flag__region}>{t("pageOurMembers.morocco")}</p>
        </div>

        <div className={styles.cont__carousel__flag}>
          <Image
            src={"/assets/img/niger.png"}
            alt={"niger"}
            width={120}
            height={120}
          />
          <p className={styles.cont__carousel__flag__region}>{t("pageOurMembers.nigeria")}</p>
        </div>

        <div className={styles.cont__carousel__flag}>
          <Image
            src={"/assets/img/malayziya.png"}
            alt={"mala"}
            width={120}
            height={120}
          />
          <p className={styles.cont__carousel__flag__region}>{t("pageOurMembers.malaysia")}</p>
        </div>

        <div className={styles.cont__carousel__flag}>
          <Image
            src={"/assets/img/pakistan.png"}
            alt={"mala"}
            width={120}
            height={120}
          />
          <p className={styles.cont__carousel__flag__region}>{t("pageOurMembers.pakistan")}</p>
        </div>

        <div className={styles.cont__carousel__flag}>
          <Image
            src={"/assets/img/livan.png"}
            alt={"livan"}
            width={120}
            height={120}
          />
          <p className={styles.cont__carousel__flag__region}>{t("pageOurMembers.azerbaijan")}</p>
        </div>

        <div className={styles.cont__carousel__flag}>
          <Image
            src={"/assets/img/jordan.png"}
            alt={"jordan"}
            width={120}
            height={120}
          />
          <p className={styles.cont__carousel__flag__region}>{t("pageOurMembers.azerbaijan")}</p>
        </div>

        <div className={styles.cont__carousel__flag}>
          <Image
            src={"/assets/img/bangladesh.png"}
            alt={"bangladesh"}
            width={120}
            height={120}
          />
          <p className={styles.cont__carousel__flag__region}>{t("pageOurMembers.azerbaijan")}</p>
        </div>

        <div className={styles.cont__carousel__flag}>
          <Image
            src={"/assets/img/gambiya.png"}
            alt={"gambiya"}
            width={120}
            height={120}
          />
          <p className={styles.cont__carousel__flag__region}>{t("pageOurMembers.azerbaijan")}</p>
        </div>

        <div className={styles.cont__carousel__flag}>
          <Image
            src={"/assets/img/aljir.png"}
            alt={"aljir"}
            width={120}
            height={120}
          />
          <p className={styles.cont__carousel__flag__region}>{t("pageOurMembers.azerbaijan")}</p>
        </div>

        <div className={styles.cont__carousel__flag}>
          <Image
            src={"/assets/img/uzbekistan.png"}
            alt={"uzbekistanFlag"}
            width={120}
            height={120}
          />
          <p className={styles.cont__carousel__flag__region}>{t("pageOurMembers.uzbekistan")}</p>
        </div>

        <div className={styles.cont__carousel__flag}>
          <Image
            src={"/assets/img/katar.png"}
            alt={"katar"}
            width={120}
            height={120}
          />
          <p className={styles.cont__carousel__flag__region}>{t("pageOurMembers.azerbaijan")}</p>
        </div>

        

      <div className={styles.cont__carousel__flag}>
        <Image
          src={"/assets/img/egytpt.png"}
          alt={"egypt"}
          width={120}
          height={120}
        />
        <p className={styles.cont__carousel__flag__region}>{t("pageOurMembers.azerbaijan")}</p>
      </div>

      <div className={styles.cont__carousel__flag}>
        <Image
          src={"/assets/img/saudia.png"}
          alt={"Saudia"}
          width={120}
          height={120}
        />
        <p className={styles.cont__carousel__flag__region}>{t("pageOurMembers.azerbaijan")}</p>
      </div>

      <div className={styles.cont__carousel__flag}>
        <Image
          src={"/assets/img/turkish.png"}
          alt={"turkish"}
          width={120}
          height={120}
        />
        <p className={styles.cont__carousel__flag__region}> {t("pageOurMembers.azerbaijan")}</p>
      </div>
      </Carousel>
    </div>
  );
};
