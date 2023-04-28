import { FC } from "react";
//sass
import styles from "./index.module.sass";
// carousel nuka
import Carousel from "nuka-carousel/lib/carousel";
// next components
import Image from "next/image";
import Link from "next/link";
import { Button } from "@mui/material";
import { useTranslations } from "next-intl";
// mui components

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
  const t = useTranslations();
  return (
    <div className={styles.title}>
      <h3 className={styles.title__subtitle}>{subtitle}</h3>
      <div className={styles.title__eventText}>
        <h1 className={styles.title__eventText__description}>{description}</h1>
      </div>
      <Button className={styles.title__certificateBtn} variant="outlined" >
        <a href={pdf}></a>
        {t("pageManufacturers.certificate")}
      </Button>
      <h3 className={styles.title__gallery}>Галерея</h3>

      {/* <Carousel
        autoplay={false}
        autoplayInterval={7000}
        animation={"fade"}
        wrapAround={true}
        pauseOnHover={true}
        renderCenterRightControls={null}
        renderCenterLeftControls={null}
        renderBottomCenterControls={null}
        swiping={false}
      > */}
      <div className={styles.title__gallery}>
        <Image
          className={styles.title__img}
          src={img}
          alt="restoranImages"
          width={350}
          height={350}
        />
        <Image
          className={styles.title__img}
          src={img2}
          alt="restoranImages"
          width={350}
          height={350}
        />
        <Image
          className={styles.title__img}
          src={img3}
          alt="restoranImages"
          width={350}
          height={350}
        />
        <Image
          className={styles.title__img}
          src={img4}
          alt="restoranImages"
          width={350}
          height={350}
        />
        <Image
          className={styles.title__img}
          src={img5}
          alt="restoranImages"
          width={350}
          height={350}
        />
        <Image
          className={styles.title__img}
          src={img6}
          alt="restoranImages"
          width={350}
          height={350}
        />
      </div>
      {/* </Carousel> */}
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
      <Button className={styles.title__btn}>
        {t("pageManufacturers.site")}
      </Button>
    </div>
  );
};
