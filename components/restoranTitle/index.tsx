import { FC } from "react";
//sass
import styles from "./index.module.sass";
// carousel nuka
// import Carousel from "nuka-carousel/lib/carousel";
// next components
import Image from "next/image";
import Link from "next/link";
import { Button } from "@mui/material";
// mui components
// intl
import { useTranslations } from "next-intl";
// carousel 
import Carousel from "react-multi-carousel";


const responsive = {
  desktop: {
    breakpoint: { max: 5000, min: 1024 },
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

type RestoranTitle = {
  subtitle: string;
  description: string;
  img: string;
  img2: string;
  img3: string;
  img4: string;
  img5: string;
  img6: string;
  instagram: string;
  facebook: string;
  pdf: string;
};

export const RestoranTitle: FC<RestoranTitle> = ({
  subtitle,
  description,
  img,
  img2,
  img3,
  img4,
  img5,
  img6,
  instagram,
  facebook,
  pdf,
}) => {
  const t = useTranslations()

  return (
    <div className={styles.title}>
      <h3 className={styles.title__subtitle}>{subtitle}</h3>
      <div className={styles.title__eventText}>
        <h1 className={styles.title__eventText__description}>{description}</h1>
      </div>
      <a className={styles.title__link} href={pdf} rel={"noreferrer"} target={"_blank"}>
        {t("pageManufacturers.certificate")}
      </a>
      <h3 className={styles.title__gallery}>Галерея</h3>

      {/* <Carousel
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
      transitionDuration={500}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      > */}
      <div className={styles.title__images}>
        <Image
          className={styles.title__img}
          src={img}
          alt="restoranImages"
          width={400}
          height={300}
        />
        <Image
          className={styles.title__img}
          src={img2}
          alt="restoranImages"
          width={400}
          height={300}
        />
        <Image
          className={styles.title__img}
          src={img3}
          alt="restoranImages"
          width={400}
          height={300}
        />
        <Image
          className={styles.title__img}
          src={img4}
          alt="restoranImages"
          width={400}
          height={300}
        />
        <Image
          className={styles.title__img}
          src={img5}
          alt="restoranImages"
          width={400}
          height={300}
        />
        <Image
          className={styles.title__img}
          src={img6}
          alt="restoranImages"
          width={400}
          height={300}
        />
      </div>
      <p className={styles.title__social}>Ресторан в соц сетях:</p>
      <div className={styles.title__socialIcons}>
        <a href={instagram} target={"_blank"}>
          <Image
            src={"/assets/img/cafeInsta.png"}
            alt="image"
            width={45}
            height={45}
          />
        </a>

        <a href={facebook} target={"_blank"}>
          <Image
            src={"/assets/img/cafeFacebook.png"}
            alt="image"
            width={45}
            height={45}
          />
        </a>
      </div>
      <button className={styles.title__btn}>{t("pageManufacturers.site")}</button>
    </div>
  );
};
