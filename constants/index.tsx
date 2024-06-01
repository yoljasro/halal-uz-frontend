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
  image: string;
  title: any;
  alt: string;
  href?: string;
}

export const MembersArray: MembersType[] = [
  {
    image: "/assets/img/azerbayjan.png",
    alt: "Image 1",
    title: "Azerbaijan",
    href: "/assets/documents/azerbayjanCookers.pdf"
  },
  {
    image: "/assets/img/kaz.png",
    alt: "Image 2",
    title: "Kazakhstan",
  },
  {
    image: "/assets/img/kgz.png",
    alt: "Image 3",
    title: "Kyrgyzstan",
  },
  {
    image: "/assets/img/morocco.png",
    alt: "Image 4",
    title: "Morocco",
  },
  {
    image: "/assets/img/niger.png",
    alt: "Image 5",
    title: "Nigeria",
  },
  {
    image: "/assets/img/malayziya.png",
    alt: "Image 6",
    title: "Malaysia",
  },
  {
    image: "/assets/img/pakistan.png",
    alt: "Image 7",
    title: "Pakistan",
  },
  {
    image: "/assets/img/livan.png",
    alt: "Image 8",
    title: "Livan",
    href: "/assets/documents/livan.pdf"
  },
  {
    image: "/assets/img/jordan.png",
    alt: "Image 9",
    title: "Jordan",
  },
  {
    image: "/assets/img/bangladesh.png",
    alt: "Image 10",
    title: "Bangladesh",
  },
  { 
    image: "/assets/img/gambiya.png",
    alt: "Image 11",
    title: "Gambia",
  },
  {
    image: "/assets/img/aljir.png",
    alt: "Image 12",
    title: "Aljir",
  },
  {
    image: "/assets/img/uzbekistan.png",
    alt: "Image 13",
    title: "Uzbekistan",
  },
  {
    image: "/assets/img/katar.png", 
    alt: "Image 14",
    title: "Katar",
  },
  {
    image: "/assets/img/egytpt.png",
    alt: "Image 15",
    title: "Egypt",
  },
  {
    image: "/assets/img/saudia.png",
    alt: "Image 16",
    title: "Saudia Arabia",
    href: "/assets/documents/hani.pdf"
  },
  {
    image: "/assets/img/turkish.png",
    alt: "Image 17",
    title: "Turkey",
    href: "/assets/documents/akgun.pdf"
  },
  {
    image: "/assets/img/bosniaa.png" , 
    alt: "Image 18" , 
    title: "Bosnia-Herzegovina"
  } ,
  {
    image: "/assets/img/maldives.png" , 
    alt: "Image 18" , 
    title: "Maldives"
  },
  {
    image: "/assets/img/tunisa.jpg" , 
    alt: "Image 18" , 
    title: "Tunisia",
    href: "/assets/documents/tunis.pdf"
  } ,
  {
    image: "/assets/img/palastine.png" , 
    alt: "Image 18" , 
    title: "Palastine"
  } ,
  {
    image: "/assets/img/singapore.png" , 
    alt: "Image 18" , 
    title: "Singapore" ,
    href : "/assets/documents/kamal.pdf"
  } ,
];  

export interface PartnersType {
  img: string;
  alt: string;
  text?: string;
  href?: string;
}

export const PartnersArray: PartnersType[] = [
  {
    img: "/assets/img/partner1.png",
    alt: "img",
    href: "http://www.wicsglobal.org"
  },
  {
    img: "/assets/img/partner2.png",
    alt: "img",
    text: "Ministry of Culture and Tourism of the Republic of Uzbekistan",
    href: "https://uzbektourism.uz"
  },
  {
    img: "/assets/img/partner3.png",
    alt: "img",
    href: 'http://chefs.uz'
  },
  {
    img: "/assets/img/partner4.png",
    alt: "img",
    href: "https://worldchefs.org"
  },
  {
    img: "/assets/img/partner5.png",
    alt: "img",
  },
  {
    img: "/assets/img/partner6.png",
    alt: "img",
    href: "https://wfrs.rest/"
  },
  {
    img: "/assets/img/tourism.png",
    alt: "img",
  },
  {
    img: "/assets/img/islam.png",
    alt: "img",
    href: "https://www.cisc.uz" 
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
