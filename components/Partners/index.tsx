// next components
import Link from "next/link";
import Image from "next/image";
// nuka carousel
// react
import React, { FC, ChangeEventHandler, useState, useEffect } from "react";
// next intl
import { useTranslations } from "next-intl";
// carousel 
import Carousel from "react-multi-carousel";
// router
import { useRouter } from "next/router";
// styles
import styles from "./index.module.sass";
import { MainPageTitle } from "../MainPageTitle";
// Partners Array
import { PartnersArray, PartnersType } from "../../constants";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1,
  },
};

export const Partners: FC<any> = () => {
  const t = useTranslations();

  return (
    <div className={styles.cont} id="partners">
      <MainPageTitle subtitle="ПАРТНЁРЫ" />
      <Carousel
        className={styles.carousel}
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        rewindWithAnimation={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={300}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
      {PartnersArray.map((partner: PartnersType) => {
        return (
          <div className={styles.partner} key={partner.alt}>
            <Image
            className={styles.partner__img}
              src={partner.img}
              width={140}
              height={120}
              alt={partner.alt}
            />
          </div>
        );
      })}
      </Carousel>
    </div>
  );
};
