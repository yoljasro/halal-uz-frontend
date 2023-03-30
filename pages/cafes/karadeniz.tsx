import React from "react";
import { RestoranTitle } from "../../components/restoranTitle";
// next components
import Image from "next/image";
import Link from "next/link";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";


const Karadeniz = () => {
  const t = useTranslations()

  return (
    <div>
      <RestoranTitle
        subtitle="Karadeniz"
        description={t("pageRestaurants.karadeniz")}
        img="/assets/img/karadeniz.jpg"
        img2="/assets/img/karadeniz3.jpg"
        img3="/assets/img/karadeniz4.jpg"
        img4="/assets/img/karadeniz5.jpg"
        img5="/assets/img/karadeniz6.jpg"
        img6="/assets/img/karadeniz7.jpg"
        instagram="/"
        facebook="/"
        pdf="/assets/documents/karadeniz.pdf"
      />
    </div>
  );
};

export default Karadeniz;


export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
      props: {
          messages: (await import(`../../messages/${locale}.json`)).default
      }
  }
}
