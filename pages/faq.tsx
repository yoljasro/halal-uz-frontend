import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { ExpandMore } from '@material-ui/icons';
// styles
import styles from "../styles/faq.module.sass";
// next
import type { NextPage, GetStaticProps } from "next";
// router intl
import { useTranslations } from "next-intl";
import { MainPageTitle } from "../components/MainPageTitle";
import Head from "next/head";

const FAQ = () => {
  const t = useTranslations();

  return (
    <div className={styles.cont}>
      <Head>
        <title>About Halal </title>
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
      <MainPageTitle subtitle="Часто задаваемые вопросы" />
      <Accordion
        sx={{
          width: "100%",
          maxWidth: "700px",
        }}
      >
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography className={styles.cont__title}>
            {t("faq.certificate")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{t("faq.certificateText")}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          width: "100%",
          maxWidth: "700px",
        }}
      >
        <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
          <Typography className={styles.cont__title}>{t("faq.get")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{t("faq.getText")}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          width: "100%",
          maxWidth: "700px",
        }}
      >
        <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
          <Typography className={styles.cont__title}>
            {t("faq.take")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{t("faq.takeText")}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default FAQ;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
};
