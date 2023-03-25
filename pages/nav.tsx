import Image from "next/image";
import  Carousel  from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MembersArray , MembersType } from "../constants";
import styles from '../styles/nav.module.sass'
import { useTranslations } from "next-intl";

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

 

const MyCarousel = () => {
  const t = useTranslations()
  return (
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
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={700}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {MembersArray.map((image:MembersType) => (
        <div className={styles.members} key={image.alt}>
          <img src={image.src} alt={image.alt} />
          <p className={styles.members__text}>{image.text}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default MyCarousel;
