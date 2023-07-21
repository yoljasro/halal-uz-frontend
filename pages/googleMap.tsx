import React, { FC, useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
// styles
import styles from "../styles/git.index.module.sass";
//component
import { MainPageTitle } from "../components/MainPageTitle";
// next intl
import type { NextPage, GetStaticProps } from "next";
// router
import { useRouter } from "next/router";
// next intl
import { useTranslations } from "next-intl";
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
};

type MapProps = {};

const Map: FC<MapProps> = () => {
  const router = useRouter();
  const t = useTranslations();
  const [places, setPlaces] = useState<Place[]>([]);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCDwGCZMzBTOv6Oe4LwQYJ76bDCc6ZYP_A",
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps</div>;

  const onRestaurantsSelected = () => {
    setPlaces([
      {
        name: "Sariq Bola",
        location: { lat: 41.344821, lng: 69.204804 },
      },
      {
        name: "Nihol",
        location: { lat: 39.904349, lng: 66.25789 },
      },
      {
        name: "Khan Ahmad",
        location: { lat: 32.719379, lng: 70.757196 },
      },
      {
        name: "Appex Pizza",
        location: { lat: 41.367812, lng: 69.285348 },
      },
      {
        name: "Sashlik uz",
        location: { lat: 39.674932, lng: 66.97193 },
      },
      {
        name: "Karadeniz",
        location: { lat: 41.272833, lng: 69.240262 },
      },
      {
        name: "Mahmud Kebab",
        location: { lat: 41.322699, lng: 69.245742  },
      }
    ]);
  };

  const onCafesSelected = () => {
    setPlaces([
      {
        name: "Siyob Ferma",
        location: { lat: 39.628172, lng: 67.071268 },
      },
      {
        name: "Shashlik UZ",
        location: { lat: 39.660551, lng: 66.946468 },
      },
      {
        name: "Agro Bravo",
        location: { lat: 39.648688, lng: 66.923692 },
      },
    ]);
  };

  const onPartnersSelected = () => {
    setPlaces([
      {
        name: "Siyob Ferma",
        location: { lat: 39.628172, lng: 67.071268 },
      },
      {
        name: "Shashlik UZ",
        location: { lat: 39.660551, lng: 66.946468 },
      },
      {
        name: "Agro Bravo",
        location: { lat: 39.648688, lng: 66.923692 },
      },
    ]);
  };

  return (
    <div className={styles.cont}>
      <Head>
        <title>Halal Map </title>
        <meta
          name="description"
          content="Halal.uz Halol sertifikatini beruvchi kom  paniya rasmiy web sayti"
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
              // case "Select" :
              //   return "Loading Map";
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
          <option disabled value="1">
            Afghanistan
          </option>
          <option disabled value="2">
            Germany
          </option>
          <option disabled value="3">
            United States
          </option>
          <option disabled value="4">
            Andorra
          </option>
          <option disabled value="5">
            Angola
          </option>
          <option disabled value="6">
            Antigua and Barbuda
          </option>
          <option disabled value="7">
            Albania
          </option>
          <option disabled value="8">
            Argentina
          </option>
          <option disabled value="9">
            Australia
          </option>
          <option disabled value="10">
            Austria
          </option>
          <option disabled value="11">
            Azerbaijan
          </option>
          <option disabled value="12">
            Bahamas
          </option>
          <option disabled value="13">
            Bahrain
          </option>
          <option disabled value="14">
            Bangladesh
          </option>
          <option disabled value="15">
            Barbados
          </option>
          <option disabled value="16">
            Belarus
          </option>
          <option disabled value="17">
            Belgium
          </option>
          <option disabled value="18">
            Belize
          </option>
          <option disabled value="19">
            Benin
          </option>
          <option disabled value="20">
            Bhutan
          </option>
          <option disabled value="21">
            United Arab Emirates
          </option>
          <option disabled value="22">
            Bolivia
          </option>
          <option disabled value="23">
            Bosnia and Herzegovina
          </option>
          <option disabled value="24">
            Botswana
          </option>
          <option disabled value="25">
            Brazil
          </option>
          <option disabled value="26">
            Brunei
          </option>
          <option disabled value="27">
            Bulgaria
          </option>
          <option disabled value="28">
            Burkina Faso
          </option>
          <option disabled value="29">
            Burundi
          </option>
          <option disabled value="30">
            Algeria
          </option>
          <option disabled value="31">
            Djibouti
          </option>
          <option disabled value="32">
            Czech Republic
          </option>
          <option disabled value="33">
            China
          </option>
          <option disabled value="34">
            Denmark
          </option>
          <option disabled value="35">
            East Timor
          </option>
          <option disabled value="36">
            Dominican Republic
          </option>
          <option disabled value="37">
            Dominica
          </option>
          <option disabled value="38">
            Ecuador
          </option>
          <option disabled value="39">
            Corn
          </option>
          <option disabled value="40">
            Ecuador
          </option>
          <option disabled value="41">
            Equatorial Guinea
          </option>
          <option disabled value="42">
            El Salvador
          </option>
          <option disabled value="43">
            Indonesia
          </option>
          <option disabled value="44">
            Eritrea
          </option>
          <option disabled value="45">
            Armenia
          </option>
          <option disabled value="46">
            Estonia
          </option>
          <option disabled value="47">
            Ethiopia
          </option>
          <option disabled value="48">
            Fiji
          </option>
          <option disabled value="49">
            Philippines
          </option>
          <option disabled value="50">
            Finland
          </option>
          <option disabled value="51">
            France
          </option>
          <option disabled value="52">
            Gabon
          </option>
          <option disabled value="53">
            Gambia
          </option>
          <option disabled value="54">
            Ghana
          </option>
          <option disabled value="55">
            Guinea
          </option>
          <option disabled value="56">
            Guinea-Bissau
          </option>
          <option disabled value="57">
            Grenada
          </option>
          <option disabled value="58">
            Guatemala
          </option>
          <option disabled value="59">
            Guyana
          </option>
          <option disabled value="60">
            South Africa
          </option>
          <option disabled value="61">
            South Korea
          </option>
          <option disabled value="62">
            Georgia
          </option>
          <option disabled value="63">
            Haiti
          </option>
          <option disabled value="64">
            Croatia
          </option>
          <option disabled value="65">
            India
          </option>
          <option disabled value="66">
            Netherlands
          </option>
          <option disabled value="67">
            Honduras
          </option>
          <option disabled value="68">
            Iraq
          </option>
          <option disabled value="69">
            Iran
          </option>
          <option disabled value="70">
            Ireland
          </option>
          <option disabled value="71">
            Spain
          </option>
          <option disabled value="72">
            Israel
          </option>
          <option disabled value="73">
            Sweden
          </option>
          <option disabled value="74">
            Switzerland
          </option>
          <option disabled value="75">
            Italy
          </option>
          <option disabled value="76">
            Iceland
          </option>
          <option disabled value="77">
            Jamaica
          </option>
          <option disabled value="78">
            Japan
          </option>
          <option disabled value="79">
            Cambodia
          </option>
          <option disabled value="80">
            Cameroon
          </option>
          <option disabled value="81">
            Canada
          </option>
          <option disabled value="82">
            Montenegro
          </option>
          <option disabled value="83">
            Qatar
          </option>
          <option disabled value="84">
            Kazakhstan
          </option>
          <option disabled value="85">
            Kenya
          </option>
          <option disabled value="86">
            Kyrgyzstan
          </option>
          <option disabled value="87">
            Kiribati
          </option>
          <option disabled value="88">
            Colombia
          </option>
          <option disabled value="89">
            Comoros
          </option>
          <option disabled value="90">
            Republic of the Congo
          </option>
          <option disabled value="91">
            North Korea
          </option>
          <option disabled value="92">
            Cuba
          </option>
          <option disabled value="93">
            Cyprus
          </option>
          <option disabled value="94">
            Laos
          </option>
          <option disabled value="95">
            Lesotho
          </option>
          <option disabled value="96">
            Latvia
          </option>
          <option disabled value="97">
            Liberia
          </option>
          <option disabled value="98">
            Libya
          </option>
          <option disabled value="99">
            Liechtenstein
          </option>
          <option disabled value="100">
            Lithuania
          </option>
          <option disabled value="101">
            Lebanon
          </option>
        </select>
      </div>
      <div className={styles.cont__map}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={12}
        >
          {places.map((place, index) => (
            <Marker
              key={index}
              position={place.location}
              label={place.name}
              icon={{
                url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
              }}
            />
          ))}
        </GoogleMap>
      </div>
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
