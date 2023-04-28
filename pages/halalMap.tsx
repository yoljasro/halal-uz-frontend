// // next components
// import Link from "next/link";
// import Image from "next/image";
// // nuka carousel
// // react
// import React, {
//   FC,
//   ChangeEventHandler,
//   useState,
//   useEffect,
//   useRef,
// } from "react";
// // next intl
// import { useTranslations } from "next-intl";
// // router
// import { useRouter } from "next/router";
// // styles
// import { MainPageTitle } from "../components/MainPageTitle";
// // hook
// import { useSize } from "../hooks/index";
// // next
// import type { NextPage, GetStaticProps } from "next";

// //react-yandex-map
// import { FullscreenControl, Map, Placemark, YMaps } from "react-yandex-maps";
// // styles
// import styles from "../styles/git.index.module.sass";
// import { Select } from "@mui/material";

// enum Option {
//   Restaurant = "rest",
//   Manufacturer = "manuf",
//   Hotel = "hotels",
// }

// type Location = [number, number];

// interface Business {
//   name: string;
//   location: Location;
// }

// const RESTAURANTS: Business[] = [
//   {
//     name: "Sariq Bola",
//     location: {lat:41.344821, lng:69.204804},
//   },
//   {
//     name: "Nihol",
//     location: {lat:39.904349, lng:66.25789},
//   },
//   {
//     name: "Khan Ahmad",
//     location: {lat:32.719379, lng:70.757196},
//   },
//   {
//     name: "Appex Pizza",
//     location: {lat:41.367812, lng:69.285348},
//   },
//   {
//     name: "Sashlik uz",
//     location: {lat:39.674932, lng:66.97193},
//   },
//   {
//     name: "jasur",
//     location: {lat:41.272833, lng:69.240262},
//   },
// ];

// const MANUFACTURERS: Business[] = [
//   {
//     name: "Siyob Ferma",
//     location: {lat:39.628172, lng:67.071268},
//   },
//   {
//     name: "Shashlik UZ",
//     location: {lat:39.660551, lng:66.946468}, 
//   },
//   {
//     name: "Agro Bravo",
//     location: {lat:39.648688, lng:66.923692},
//   },
// ];

// const HalalMap: FC<any> = ({ props }) => {
//   const [selectedOption, setSelectedOption] = useState<Option>(
//     Option.Restaurant
//   );
//   const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(
//     null
//   );

//   const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedOption(event.target.value as Option);
//   };

//   const handleBusinessClick = (business: Business) => {
//     setSelectedBusiness(business);
//   };

//   const businesses =
//     selectedOption === Option.Restaurant ? RESTAURANTS : MANUFACTURERS;
//   const t = useTranslations();
//   const router = useRouter();
//   const [address, setAddress] = useState("Tashkent");
//   const [selectedLang, setSelectedLang] = useState(router.locale);
//   const contactsBlockRef = useRef<HTMLDivElement>(null);
//   const size = useSize(contactsBlockRef);
//   const [height, setHeight] = useState("679px");

//   useEffect(() => {
//     if (size) {
//       const { width } = size;
//       if (width < 1399) {
//         setHeight("100px");
//       }
//     }
//   }, [size]);

//   useEffect(() => {
//     if (selectedLang) {
//       router.push(router.asPath, undefined, {
//         locale: selectedLang,
//       });
//     }
//   }, [selectedLang]);

//   return (
//     <div className={styles.cont}>
//       <h3 className={styles.cont__title}>ХАЛЯЛЬ ГИД</h3>
//       <div className={styles.cont__eventText}>
//         <p className={styles.cont__eventText__description}>
//           В данном разделе карта мира, с локациями где есть туристические
//           объекты, заведения общестенного питания, а также производители
//           продуктов питания, которые удостоились сертификата Халяль.
//         </p>
//       </div>
//       <div className={styles.cont__select}>
//         <label>
//           {/* Choose: */}
//           <select
//             className={styles.cont__select__category}
//             value={selectedOption}
//             onChange={handleOptionChange}
//           >
//             <option value={Option.Restaurant}>Restaurants</option>
//             <option value={Option.Manufacturer}>Manufacturers</option>
//             <option value={Option.Hotel}>Hotels</option>
//           </select>
//         </label>
//         {/* <label>
//         Select country */}
//         <select className={styles.cont__select__region}>
//           <option value="0">Uzbekistan</option>
//           <option value="1">Afghanistan</option>
//           <option value="2">Germany</option>
//           <option value="3">United States</option>
//           <option value="4">Andorra</option>
//           <option value="5">Angola</option>
//           <option value="6">Antigua and Barbuda</option>
//           <option value="7">Albania</option>
//           <option value="8">Argentina</option>
//           <option value="9">Australia</option>
//           <option value="10">Austria</option>
//           <option value="11">Azerbaijan</option>
//           <option value="12">Bahamas</option>
//           <option value="13">Bahrain</option>
//           <option value="14">Bangladesh</option>
//           <option value="15">Barbados</option>
//           <option value="16">Belarus</option>
//           <option value="17">Belgium</option>
//           <option value="18">Belize</option>
//           <option value="19">Benin</option>
//           <option value="20">Bhutan</option>
//           <option value="21">United Arab Emirates</option>
//           <option value="22">Bolivia</option>
//           <option value="23">Bosnia and Herzegovina</option>
//           <option value="24">Botswana</option>
//           <option value="25">Brazil</option>
//           <option value="26">Brunei</option>
//           <option value="27">Bulgaria</option>
//           <option value="28">Burkina Faso</option>
//           <option value="29">Burundi</option>
//           <option value="30">Algeria</option>
//           <option value="31">Djibouti</option>
//           <option value="32">Czech Republic</option>
//           <option value="33">China</option>
//           <option value="34">Denmark</option>
//           <option value="35">East Timor</option>
//           <option value="36">Dominican Republic</option>
//           <option value="37">Dominica</option>
//           <option value="38">Ecuador</option>
//           <option value="39">Corn</option>
//           <option value="40">Ecuador</option>
//           <option value="41">Equatorial Guinea</option>
//           <option value="42">El Salvador</option>
//           <option value="43">Indonesia</option>
//           <option value="44">Eritrea</option>
//           <option value="45">Armenia</option>
//           <option value="46">Estonia</option>
//           <option value="47">Ethiopia</option>
//           <option value="48">Fiji</option>
//           <option value="49">Philippines</option>
//           <option value="50">Finland</option>
//           <option value="51">France</option>
//           <option value="52">Gabon</option>
//           <option value="53">Gambia</option>
//           <option value="54">Ghana</option>
//           <option value="55">Guinea</option>
//           <option value="56">Guinea-Bissau</option>
//           <option value="57">Grenada</option>
//           <option value="58">Guatemala</option>
//           <option value="59">Guyana</option>
//           <option value="60">South Africa</option>
//           <option value="61">South Korea</option>
//           <option value="62">Georgia</option>
//           <option value="63">Haiti</option>
//           <option value="64">Croatia</option>
//           <option value="65">India</option>
//           <option value="66">Netherlands</option>
//           <option value="67">Honduras</option>
//           <option value="68">Iraq</option>
//           <option value="69">Iran</option>
//           <option value="70">Ireland</option>
//           <option value="71">Spain</option>
//           <option value="72">Israel</option>
//           <option value="73">Sweden</option>
//           <option value="74">Switzerland</option>
//           <option value="75">Italy</option>
//           <option value="76">Iceland</option>
//           <option value="77">Jamaica</option>
//           <option value="78">Japan</option>
//           <option value="79">Cambodia</option>
//           <option value="80">Cameroon</option>
//           <option value="81">Canada</option>
//           <option value="82">Montenegro</option>
//           <option value="83">Qatar</option>
//           <option value="84">Kazakhstan</option>
//           <option value="85">Kenya</option>
//           <option value="86">Kyrgyzstan</option>
//           <option value="87">Kiribati</option>
//           <option value="88">Colombia</option>
//           <option value="89">Comoros</option>
//           <option value="90">Republic of the Congo</option>
//           <option value="91">North Korea</option>
//           <option value="92">Cuba</option>
//           <option value="93">Cyprus</option>
//           <option value="94">Laos</option>
//           <option value="95">Lesotho</option>
//           <option value="96">Latvia</option>
//           <option value="97">Liberia</option>
//           <option value="98">Libya</option>
//           <option value="99">Liechtenstein</option>
//           <option value="100">Lithuania</option>
//           <option value="101">Lebanon</option>
//         </select>
//       </div>
//       <div className={styles.cont__map}>
//         <YMaps>
//           <Map
//             className={styles.cont__map__loc}
//             state={{ center: [41.344821, 69.204804], zoom: 10 }}
//             width="100%"
//             height="400px"
//           >
//             <FullscreenControl
//               options={{
//                 float: "right",
//               }}
//             />

//             {businesses.map((business) => (
//               <Placemark
//                 key={business.name}
//                 geometry={business.location}
//                 options={{ iconColor: "#ff0000" }}
//                 onClick={() => handleBusinessClick(business)}
//               />
//             ))}

//             {selectedBusiness && (
//               <Placemark
//                 geometry={selectedBusiness.location}
//                 options={{ iconColor: "#0000ff", zoom: 15 }}
//               />
//             )}
//           </Map>
//         </YMaps>

//         {selectedBusiness && <div>{selectedBusiness.name}</div>}
//       </div>
//     </div>
//   );
// };

// export default HalalMap;

// export const getStaticProps: GetStaticProps = async ({ locale }) => {
//   return {
//     props: {
//       messages: (await import(`../messages/${locale}.json`)).default,
//     },
//   };
// };
