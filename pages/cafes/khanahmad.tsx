import React from "react";
import { RestoranTitle } from "../../components/restoranTitle";
// next components
import Image from "next/image";
import Link from "next/link";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";

const Khanahmad = () => {
  const t = useTranslations()

  return (
    <div>
      <RestoranTitle 
        subtitle="KHAN AHMAD"
        description={t("pageRestaurants.ahmad")}
        img="/assets/img/ahmad3.png"
        img2="/assets/img/ahmad2.jpg"
        img3="/assets/img/ahmad3.jpg"
        img4="/assets/img/ahmad4.jpg"
        img5="/assets/img/ahmad5.jpg"   
        img6="/assets/img/ahmad6.jpg"
        instagram="https://www.instagram.com/khanahmad_restaurant/"
        facebook="https://www.facebook.com/profile.php?id=100054751930596&mibextid=LQQJ4d"
        pdf="/assets/documents/ahmad.pdf"
      />
    </div>
  );
};

export default Khanahmad;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
      props: {
          messages: (await import(`../../messages/${locale}.json`)).default
      }
  }
}
