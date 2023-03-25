// next intl
import { useTranslations } from "next-intl";

export interface RestaurantsType {
  img: string;
}

export const RestaurantsModel: RestaurantsType[] = [
  {
    img: "/assets/img/xanAhmad2.png",
  },
  {
    img: "/assets/img/appex2.png",
  },
];

export interface MembersType {
  src: string;
  text: any;
  alt: string;
}

export const MembersArray: MembersType[] = [
  {
    src: "/assets/img/azerbayjan.png",
    alt: "Image 1",
    text: "Azerbaijan",
  },
  {
    src: "/assets/img/kaz.png",
    alt: "Image 2",
    text: "Kazakhstan",
  },
  {
    src: "/assets/img/kgz.png",
    alt: "Image 3",
    text: "Kyrgyzstan",
  },
  {
    src: "/assets/img/morocco.png",
    alt: "Image 4",
    text: "Morocco",
  },
  {
    src: "/assets/img/niger.png",
    alt: "Image 5",
    text: "Nigeria",
  },
  {
    src: "/assets/img/malayziya.png",
    alt: "Image 6",
    text: "Malaysia",
  },
  {
    src: "/assets/img/pakistan.png",
    alt: "Image 7",
    text: "Pakistan",
  },
  {
    src: "/assets/img/livan.png",
    alt: "Image 8",
    text: "Livan",
  },
  {
    src: "/assets/img/jordan.png",
    alt: "Image 9",
    text: "Jordan",
  },
  {
    src: "/assets/img/bangladesh.png",
    alt: "Image 10",
    text: "Bangladesh",
  },
  {
    src: "/assets/img/gambiya.png",
    alt: "Image 11",
    text: "Gambia",
  },
  {
    src: "/assets/img/aljir.png",
    alt: "Image 12",
    text: "Aljir",
  },
  {
    src: "/assets/img/uzbekistan.png",
    alt: "Image 13",
    text: "Uzbekistan",
  },
  {
    src: "/assets/img/katar.png",
    alt: "Image 14",
    text: "Katar",
  },
  {
    src: "/assets/img/egytpt.png",
    alt: "Image 15",
    text: "Egypt",
  },
  {
    src: "/assets/img/saudia.png",
    alt: "Image 16",
    text: "Saudia Arabia",
  },
  {
    src: "/assets/img/turkish.png",
    alt: "Image 17",
    text: "Turkey",
  },
];

export interface PartnersType {
  img: string;
  alt: string;
}

export const PartnersArray: PartnersType[] = [
  {
    img: "/assets/img/partner1.png",
    alt: "img",
  },
  {
    img: "/assets/img/partner2.png",
    alt: "img",
  },
  {
    img: "/assets/img/partner3.png",
    alt: "img",
  },
  {
    img: "/assets/img/partner4.png",
    alt: "img",
  },
  {
    img: "/assets/img/partner5.png",
    alt: "img",
  },
  {
    img: "/assets/img/partner6.png",
    alt: "img",
  },
];
