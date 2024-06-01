import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import styles from "./index.module.sass";
import { MainPageTitle } from "../MainPageTitle";
import { SocialNetworks } from "../socialNetworks";
import { Button } from "@mui/material";
import { projectsLogoAPI } from "../API";
import { ProjectLogoResponse } from "../../types";

interface ProjectData {
  imageSrc: string;
  title: string;
  siteLink: string;
  certificateLink: string;
  socialNetworks: {
    instagram: string;
    facebook: string;
    telegram: string;
  };
}

export const ProductionsNew: FC = () => {
  const t = useTranslations();
  const router = useRouter();
  const [apiData, setApiData] = useState<any[]>([]);

  // Static data
  const staticData = [
    {
      imageSrc: "/assets/img/siyob.png",
      title: "SIYOB FERMA",
      siteLink: "https://siyobferma.uz",
      certificateLink: "/assets/documents/siyob.pdf",
      socialNetworks: {
        instagram: "https://instagram.com/siyobferma.uz?igshid=NDk5N2NlZjQ=",
        facebook: "https://www.facebook.com/siyob.ferma?mibextid=LQQJ4d",
        telegram: "https://t.me/siyobferma_uz",
      },
    },
    {
      imageSrc: "/assets/img/shashlikP.png",
      title: "SHASHLIKUZ",
      siteLink: "",
      certificateLink: "/assets/documents/shashlikuz.pdf",
      socialNetworks: {
        instagram: "https://instagram.com/shashlikuz?igshid=NDk5N2NlZjQ=",
        facebook: "https://www.facebook.com/shashlikuz1?mibextid=LQQJ4d",
        telegram: "https://t.me/shashlikuz_group",
      },
    },
    {
      imageSrc: "/assets/img/agroBravo.png",
      title: "AGRO-BRAVO",
      siteLink: "https://agrobravo.uz/ru/",
      certificateLink: "/assets/documents/agro.pdf",
      socialNetworks: {
        instagram: "https://instagram.com/agrobravo.uz?igshid=NDk5N2NlZjQ=",
        facebook: "https://www.facebook.com/agrobravo.uz?mibextid=LQQJ4d",
        telegram: "/",
      },
    },
    {
      imageSrc: "/assets/img/goldenCorn.png",
      title: "GOLDEN-CORN",
      siteLink: "https://golden-corn.uz/",
      certificateLink: "/assets/documents/goldencorn.pdf",
      socialNetworks: {
        instagram: "https://www.instagram.com/goldencorn_uz/",
        facebook: "https://www.facebook.com/goldencornuz/",
        telegram: "/",
      },
    },
    {
      imageSrc: "/assets/img/chaki_chak.png",
      title: "Chak-Chak",
      siteLink: "/",
      certificateLink: "/assets/documents/biriktiredi.pdf",
      socialNetworks: {
        instagram: "",
        facebook: "",
        telegram: "/",
      },
    },
    {
      imageSrc: "/assets/img/remax.svg",
      title: "Remax",
      siteLink: "/",
      certificateLink: "/assets/documents/remax.pdf",
      socialNetworks: {
        instagram: "",
        facebook: "",
        telegram: "/",
      },
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiResponse: ProjectLogoResponse[] = await projectsLogoAPI();
        const formattedData: ProjectData[] = apiResponse.map((item) => ({
          imageSrc: `http://localhost:5000${item.image}`,
          title: item.nameuz,
          siteLink: item.siteLink,
          certificateLink: `http://localhost:5000${item.certificate}`,
          socialNetworks: {
            instagram: item.instagram,
            facebook: item.facebook,
            telegram: item.telegram,
          },
        }));
        setApiData(formattedData);
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };
    fetchData();
  }, []);

  const mergedData = [...staticData, ...apiData];

  return (
    <div className={styles.cont} id="productions">
      <MainPageTitle
        subtitle={t("pageManufacturers.title")}
        description={t("pageManufacturers.information")}
      />
      <div className={styles.production}>
        {mergedData.map((item, index) => (
          <div className={styles.production__card} key={index}>
            <Image
              src={item.imageSrc}
              alt={item.title}
              width={180}
              height={180}
            />
            <h3 className={styles.production__title}>{item.title}</h3>
            <div className={styles.production__card__section}>
              {item.siteLink && (
                <a rel="noreferrer" target={"_blank"} href={item.siteLink}>
                  <Button variant="contained" className={styles.production__btn}>
                    {t("pageManufacturers.site")}
                  </Button>
                </a>
              )}
              <br />
              {item.certificateLink && (
                <Button variant="contained" className={styles.production__viewBtn}>
                  <a
                    rel="noreferrer"
                    className={styles.production__link}
                    target={"_blank"}
                    href={item.certificateLink}
                  >
                    {t("pageManufacturers.certificate")}
                  </a>
                </Button>
              )}
              <SocialNetworks
                instagram={item.socialNetworks?.instagram || ""}
                facebook={item.socialNetworks?.facebook || ""}
                telegram={item.socialNetworks?.telegram || ""}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};