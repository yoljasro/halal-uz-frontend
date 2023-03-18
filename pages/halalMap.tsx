// next components
import Link from "next/link";
import Image from "next/image";
// nuka carousel
// react
import React, {
  FC,
  ChangeEventHandler,
  useState,
  useEffect,
  useRef,
} from "react";
// next intl
import { useTranslations } from "next-intl";
// router
import { useRouter } from "next/router";
// styles
import { MainPageTitle } from "../components/MainPageTitle";
// hook
import { useSize } from "../hooks/index";
// next
import type { NextPage, GetStaticProps } from "next";

//react-yandex-map
import { FullscreenControl, Map, Placemark, YMaps } from "react-yandex-maps";
// styles
import styles from "../styles/git.index.module.sass";
import { Select } from "@mui/material";

enum Option {
  Restaurant = "rest",
  Manufacturer = "manuf",
}

type Location = [number, number];

interface Business {
  name: string;
  location: Location;
}

const RESTAURANTS: Business[] = [
  {
    name: "Sariq Bola",
    location: [41.344821, 69.204804],
  },
  {
    name: "Nihol",
    location: [39.904349, 66.257890],
  },
  {
    name: "Khan Ahmad",
    location: [32.719379, 70.757196],
  },
  {
    name: "Appex Pizza",
    location: [41.367812, 69.285348],
  },
  {
    name : "Sashlik uz" , 
    location : [39.674932, 66.971930]
  } , 
  {
    name : "jasur" , 
    location : [41.272833, 69.240262]
  }
];

const MANUFACTURERS: Business[] = [
  {
    name: "Siyob Ferma",
    location: [39.628172, 67.071268],
  },
  {
    name: "Shashlik UZ",
    location: [39.660551, 66.946468],
  },
  {
    name: "Agro Bravo",
    location: [39.648688, 66.923692],
  },
  
];


const HalalMap: FC<any> = ({ props }) => {
  const [selectedOption, setSelectedOption] = useState<Option>(
    Option.Restaurant
  );
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(
    null
  );

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value as Option);
  };

  const handleBusinessClick = (business: Business) => {
    setSelectedBusiness(business);
  };

  const businesses =
    selectedOption === Option.Restaurant ? RESTAURANTS : MANUFACTURERS;
  const t = useTranslations();
  const router = useRouter();
  const [address, setAddress] = useState("Tashkent");
  const [selectedLang, setSelectedLang] = useState(router.locale);
  const contactsBlockRef = useRef<HTMLDivElement>(null);
  const size = useSize(contactsBlockRef);
  const [height, setHeight] = useState("679px");

  useEffect(() => {
    if (size) {
      const { width } = size;
      if (width < 1399) {
        setHeight("100px");
      }
    }
  }, [size]);

  useEffect(() => {
    if (selectedLang) {
      router.push(router.asPath, undefined, {
        locale: selectedLang,
      });
    }
  }, [selectedLang]);

  return (
    <div className={styles.cont}>
      <h3 className={styles.cont__title}>ХАЛЯЛЬ ГИД</h3>
      <div className={styles.cont__eventText}>
        <p className={styles.cont__eventText__description}>
          В данном разделе карта мира, с локациями где есть туристические
          объекты, заведения общестенного питания, а также производители
          продуктов питания, которые удостоились сертификата Халяль.
        </p>
      </div>
      <div className={styles.cont__select}>
      <label>
        {/* Choose: */}
        <select className={styles.cont__select__category} value={selectedOption} onChange={handleOptionChange}>
          <option value={Option.Restaurant}>Restaurants</option>
          <option value={Option.Manufacturer}>Manufacturers</option>
        </select>
      </label>
      {/* <label>
        Select country
        <select className={styles.cont__select__region}>
          <option value="First">First</option>
          <option value="Second">Second</option>
        </select>
        </label> */}
      </div>
      <div className={styles.cont__map}>
      <YMaps>
        <Map
        className={styles.cont__map__loc}
          state={{ center: [41.344821, 69.204804], zoom: 10 }}
          width="100%"
          height="400px"
        >
          <FullscreenControl
            options={{
              float: "right",
            }}
          />

          {businesses.map((business) => (
            <Placemark
              key={business.name}
              geometry={business.location}
              options={{ iconColor: "#ff0000" }}
              onClick={() => handleBusinessClick(business)}
            />
          ))}

          {selectedBusiness && (
            <Placemark
              geometry={selectedBusiness.location}
              options={{ iconColor: "#0000ff" , zoom:15 }}
            />
          )}
        </Map>
      </YMaps>

      {selectedBusiness && <div>{selectedBusiness.name}</div>}
      </div>
    </div>
  );
};

export default HalalMap;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
      props: {
          messages: (await import(`../messages/${locale}.json`)).default
      }
  }
}