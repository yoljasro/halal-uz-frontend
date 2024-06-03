import React, { FC, useState, useEffect } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
// styles
import styles from "../styles/git.index.module.sass";
// component
import { MainPageTitle } from "../components/MainPageTitle";
// next intl
import type { NextPage, GetStaticProps } from "next";
// router
import { useRouter } from "next/router";
// next intl
import { useTranslations } from "next-intl";
import axios from "axios";
import Head from "next/head";

const libraries = ["places"];

const mapContainerStyle = {
  width: "95%",
  height: "500px",
  marginBottom: "100px",
};

const center = {
  lat: 41.344821,
  lng: 69.204804,
};

type Location = {
  lat: number;
  lng: number;
};

type Place = {
  location: Location;
  name: string;
  category: string;
};

type MapProps = {};

const Map: FC<MapProps> = () => {
  const router = useRouter();
  const t = useTranslations();
  const [places, setPlaces] = useState<Place[]>([]);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCDwGCZMzBTOv6Oe4LwQYJ76bDCc6ZYP_A",
  });

  useEffect(() => {
    // Backend API'dan ma'lumotlarni olish
    const fetchPlaces = async () => {
      try {
        const response = await axios.get("http://localhost:5000/gid");
        setPlaces(prevPlaces => [...prevPlaces, ...response.data]);
      } catch (error) {
        console.error("Failed to fetch places:", error);
      }
    };

    fetchPlaces();
  }, []);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps</div>;

  const onRestaurantsSelected = () => {
    setPlaces(prevPlaces => [
      ...prevPlaces,
      {
        name: "Sariq Bola",
        location: { lat: 41.344821, lng: 69.204804 },
        category: "Restaurant",
      },
      {
        name: "Nihol",
        location: { lat: 39.904349, lng: 66.25789 },
        category: "Restaurant",
      },
      {
        name: "Khan Ahmad",
        location: { lat: 32.719379, lng: 70.757196 },
        category: "Restaurant",
      },
      {
        name: "Appex Pizza",
        location: { lat: 41.367812, lng: 69.285348 },
        category: "Restaurant",
      },
      {
        name: "Sashlik uz",
        location: { lat: 39.674932, lng: 66.97193 },
        category: "Restaurant",
      },
      {
        name: "Karadeniz",
        location: { lat: 41.272833, lng: 69.240262 },
        category: "Restaurant",
      },
      {
        name: "Mahmud Kebab",
        location: { lat: 41.322699, lng: 69.245742 },
        category: "Restaurant",
      }
    ]);
  };

  const onCafesSelected = () => {
    setPlaces(prevPlaces => [
      ...prevPlaces,
      {
        name: "Siyob Ferma",
        location: { lat: 39.628172, lng: 67.071268 },
        category: "Cafe",
      },
      {
        name: "Shashlik UZ",
        location: { lat: 39.660551, lng: 66.946468 },
        category: "Cafe",
      },
      {
        name: "Agro Bravo",
        location: { lat: 39.648688, lng: 66.923692 },
        category: "Cafe",
      },
    ]);
  };

  const onPartnersSelected = () => {
    setPlaces(prevPlaces => [
      ...prevPlaces,
      {
        name: "Siyob Ferma",
        location: { lat: 39.628172, lng: 67.071268 },
        category: "Partner",
      },
      {
        name: "Shashlik UZ",
        location: { lat: 39.660551, lng: 66.946468 },
        category: "Partner",
      },
      {
        name: "Agro Bravo",
        location: { lat: 39.648688, lng: 66.923692 },
        category: "Partner",
      },
    ]);
  };

  return (
    <div className={styles.cont}>
      <Head>
        <title>Halal Map</title>
        <meta
          name="description"
          content="Halal.uz Halol sertifikatini beruvchi kompaniya rasmiy web sayti"
        />
        <meta
          name="google-site-verification"
          content="Pi7kisuljjOmFbBlvmk-S8DASJP-WbIGUQ1ERs9XwS4"
        />
        <link rel="icon" href="/assets/img/logo.svg" />
      </Head>
      <MainPageTitle
        subtitle={t("pageHalalGuide.title")}
        description={t("pageHalalGuide.information")}
      />
      <div className={styles.cont__select}>
        <select
          className={styles.cont__select__region}
          onChange={(e) => {
            switch (e.target.value) {
              case "Restaurants":
                onRestaurantsSelected();
                break;
              case "ManuFacturers":
                onCafesSelected();
                break;
              case "Hotels":
                onPartnersSelected();
                break;
            }
          }}
        >
          <option value="select">{t("pageHalalGuide.select")}</option>
          <option value="Restaurants">Restaurants</option>
          <option value="ManuFacturers">ManuFacturers</option>
          <option value="Hotels">Hotels</option>
        </select>
        <select className={styles.cont__select__region}>
          <option value="none">{t("pageHalalGuide.country")}</option>
          <option value="0">Uzbekistan</option>
        </select>
      </div>
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
      >
        {places.map((place, index) => (
          place.location && (
            <Marker
              key={index}
              position={{ lat: place.location.lat, lng: place.location.lng }}
              title={place.name}
            />
          )
        ))}
      </GoogleMap>
    </div>
  );
};

export default Map;


export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
};