// react
import React, { FC } from "react";
// styles
import styles from "../styles/nav.module.sass";
// next
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";

const Header: FC<any> = () => {
  const t = useTranslations();
  return (
    <div className={styles.header}>
      <div className={styles.header__card}>
        <div className={styles.header__card__img}>
               <img src={"/assets/img/xanAhmad.png"} alt="img" /> 
        </div>
        <div className={styles.header__section}>
          <h1>Title</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing s alias fuga!</p>
          <button>See More</button>
        </div>
      </div>
    </div>
  );
};

export default Header;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
};
