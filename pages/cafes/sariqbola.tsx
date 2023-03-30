import React from "react";
import { RestoranTitle } from "../../components/restoranTitle";
// next components
import Image from "next/image";
import Link from "next/link";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";

const Sariqbola = () => {
  const t = useTranslations()

  return (
    <div>
      <RestoranTitle 
        subtitle="SARIQ BOLA"
        description={t("pageRestaurants.sariq")}
        img="/assets/img/sariq1.jpeg"
        img2="/assets/img/sariq2.jpeg"
        img3="/assets/img/sariq3.jpeg"
        img4="/assets/img/sariq4.jpeg"
        img5="/assets/img/sariq5.jpeg"
        img6="/assets/img/sariq6.jpeg"
        instagram="https://www.instagram.com/sariqbola_pizza/"
        facebook="https://www.facebook.com/sariqbolapizza/"
        pdf="/assets/documents/sariq.pdf"
      />
    </div>
  );
};

export default Sariqbola;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
      props: {
          messages: (await import(`../../messages/${locale}.json`)).default
      }
  }
}
