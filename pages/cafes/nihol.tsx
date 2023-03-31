import React from "react";
import { RestoranTitle } from "../../components/restoranTitle";
// next components
import Image from "next/image";
import Link from "next/link";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";


const Nihol = () => {
  const t = useTranslations()

  return (
    <div>
      <RestoranTitle
        subtitle="NIHOL"
        description={t("pageRestaurants.nihol")}
        img="/assets/img/nihal0.png"
        img2="/assets/img/niholtwo.jpeg"
        img3="/assets/img/niholthree.jpeg"
        img4="/assets/img/niholthree.jpeg"
        img5="/assets/img/niholone.jpeg"
        img6="/assets/img/niholtwo.jpeg"
        instagram="https://www.instagram.com/nihol_cafe/"
        facebook="https://m.facebook.com/niholjoja.uz"
        pdf="/assets/documents/nihol.pdf"
      />
    </div>
  );
};

export default Nihol;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
      props: {
          messages: (await import(`../../messages/${locale}.json`)).default
      }
  }
}
