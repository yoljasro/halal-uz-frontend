import React from "react";
import { RestoranTitle } from "../../components/restoranTitle";
// next components
import Image from "next/image";
import Link from "next/link";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";


const Apexpizza = () => {
  const t = useTranslations()

  return (
    <div>
      <RestoranTitle
        subtitle="apexpizza"
        description={t("pageRestaurants.appex")}
        img="/assets/img/ap1.jpeg"
        img2="/assets/img/ap2.jpeg"
        img3="/assets/img/ap3.jpeg"
        img4="/assets/img/ap4.jpeg"
        img5="/assets/img/ap5.jpeg"
        img6="/assets/img/ap6.jpeg"
        instagram="https://www.instagram.com/apexpizza.uz"
        facebook="https://www.facebook.com/apexpizza.uz"
        pdf="/assets/documents/appex.pdf"
      />
    </div>
  );
};

export default Apexpizza;


export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
      props: {
          messages: (await import(`../../messages/${locale}.json`)).default
      }
  }
}
