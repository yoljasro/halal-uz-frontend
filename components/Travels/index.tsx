// next components
import Link from "next/link";
import Image from "next/image";
// nuka carousel
// react
//img gallery
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
import React, { FC, ChangeEventHandler, useState, useEffect } from "react";
// nuka carousel
import Carousel from "nuka-carousel/lib/carousel";
// next intl
import { useTranslations } from "next-intl";
// router
import { useRouter } from "next/router";
// styles
import styles from "./index.module.sass";
// Component title
import { MainPageTitle } from "../MainPageTitle";

const images = [
  {
    original: "/assets/img/Samarkand.png",
    thumbnail: "/assets/img/Samarkand.png",
  },
  {
    original: "/assets/img/Samarkand.png",
    thumbnail: "/assets/img/Samarkand.png",
  },
  {
    original: "/assets/img/Samarkand.png",
    thumbnail: "/assets/img/Samarkand.png",
  },
  {
    original: "/assets/img/Samarkand.png",
    thumbnail: "/assets/img/Samarkand.png",
  },
  {
    original: "/assets/img/Samarkand.png",
    thumbnail: "/assets/img/Samarkand.png",
  },
];

export const Travels: FC<any> = () => {
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
      <MainPageTitle
        subtitle="ПУТЕШЕСТВИЕ"
        description="Lorem ipsum dolor sit amet consectetur. Ornare nec leo molestie bibendum ut. Elit urna nisl eros volutpat tellus aliquam. Consequat faucibus aliquet."
      />
      <div className={styles.carousel}>
        <ImageGallery
          showPlayButton={false}
          showFullscreenButton={false}
          disableKeyDown={true}
          lazyLoad={false}
          autoPlay={false}
          items={images}
          showNav={false}
        />   
      </div>
    </div>
  );
};
