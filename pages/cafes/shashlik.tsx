import React from "react";
import { RestoranTitle } from "../../components/restoranTitle";
// next components
import Image from "next/image";
import Link from "next/link";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";

const Shashlik = () => {
  const t =  useTranslations()

  return (
    <div>
      <RestoranTitle
        subtitle="SHASHLIK UZ"
        description={t("pageRestaurants.shashlik")}
        img="/assets/img/shashlik1.jpg"
        img2="/assets/img/shashlik2.jpg"
        img3="/assets/img/shashlik3.jpg"
        img4="/assets/img/shashlik4.jpg"
        img5="/assets/img/shashlik5.jpg"
        img6="/assets/img/shashlik6.jpg"
        instagram="https://www.instagram.com/shashlikuz"
        facebook="https://www.facebook.com/shashlikuz1"
        pdf="/assets/documents/shashlik.pdf"
      />
    </div>
  );
};

export default Shashlik;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
      props: {
          messages: (await import(`../../messages/${locale}.json`)).default
      }
  }
}
