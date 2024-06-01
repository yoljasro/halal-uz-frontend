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
// carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MembersArray, MembersType } from "../../constants";
import { membersApi } from "../API"; // assuming this is the API function to fetch members data

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1,
  },
};

export const Members: FC<any> = () => {
  const t = useTranslations();
  const router = useRouter();
  const [apiData, setApiData] = useState<any[]>([]);
  const [localData, setLocalData] = useState<MembersType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiResponse = await membersApi(); // Backenddan ma'lumotlarni olish
        setApiData(apiResponse);
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Lokal ma'lumotlarni o'rnating
    setLocalData(MembersArray);
  }, []);

  return (
    <div className={styles.cont} id="members">
      <MainPageTitle
        subtitle={t("pageOurMembers.title")}
        description={t("pageOurMembers.information")}
      />
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
        customTransition="all .6"
        transitionDuration={300}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {[...localData, ...apiData].map((item: MembersType) => (
          <div className={styles.cont} key={item.alt}>
            <a rel="noreferrer" target={"_blank"} href={item.href}>
              <div className={styles.members} key={item.alt}>
              <img
                  src={item.image.startsWith("/assets") ? item.image : `http://localhost:5000${item.image}`}
                  alt={item.alt}
                />
                <p className={styles.members__text}>{item.title}</p>
              </div>
            </a>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
