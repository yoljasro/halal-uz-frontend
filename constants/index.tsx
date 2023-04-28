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
  text?: string;
}

export const PartnersArray: PartnersType[] = [
  {
    img: "/assets/img/partner1.png",
    alt: "img",
  },
  {
    img: "/assets/img/partner2.png",
    alt: "img",
    text: "Ministry of Culture and Tourism of the Republic of Uzbekistan",
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
  {
    img: "/assets/img/tourism.png",
    alt: "img",
  },
  {
    img: "/assets/img/islam.png",
    alt: "img",
  },
];

export interface CountriesType {
  country: string;
  link: string;
}

export const CountriesArray: CountriesType[] = [
  {
    country: "Afghanistan",
    link: "string",
  },
  {
    country: "Armenia",
    link: "string",
  },
  {
    country: "Azerbaijan",

    link: "string",
  },
  {
    country: "Bahrain",

    link: "string",
  },
  {
    country: "Bangladesh",

    link: "string",
  },
  {
    country: "Bhutan",

    link: "string",
  },
  {
    country: "Brunei",

    link: "string",
  },
  {
    country: "Cambodia",

    link: "string",
  },
  {
    country: "China",

    link: "string",
  },
  {
    country: "Cyprus",

    link: "string",
  },
  {
    country: "Georgia",

    link: "string",
  },
  {
    country: "India",

    link: "string",
  },
  {
    country: "Indonesia",

    link: "string",
  },
  {
    country: "Iran",

    link: "string",
  },
  {
    country: "Iraq",

    link: "string",
  },
  {
    country: "Israel",

    link: "string",
  },
  {
    country: "Japan",

    link: "string",
  },
  {
    country: "Jordan",

    link: "string",
  },
  {
    country: "Kazakhstan",

    link: "string",
  },
  {
    country: "Kuwait",

    link: "string",
  },
];

export interface NewsType {
  image: string;
  href: string;
  title: string;
  description: string;
}

export const News: NewsType[] = [
  {
    image: "/assets/image/news.png",
    href: "/" , 
    title : "News Title" , 
    description : "Charge Two Devices at the Same Time With This Magnetic Wireless Charging Dock"
  },
];
