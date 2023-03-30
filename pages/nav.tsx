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
      <h3>New Clothing Collection</h3>
      <div className={styles.header__subTitle}>
        <p>
          Lorem ipsum dolor sit ametcaecati odit quaerat nostrum beatae deleniti
          quos, ipsa consequuntur magni Lorem ipsum dolor sit ametcaecati odit
          quaerat nostrum beatae deleniti quos, ipsa consequuntur magni Lorem
          ipsum dolor sit ametcaecati odit quaerat nostrum beatae deleniti quos,
          ipsa consequuntur magni
        </p>
      </div>
      <button>See More</button>
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
