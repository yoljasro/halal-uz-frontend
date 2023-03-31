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
import { MainPageTitle } from "../components/MainPageTitle";

const FAQ = () => {
  return (
    <div className={styles.cont}>
      <MainPageTitle subtitle="Часто задаваемые вопросы" />
      <Accordion
        sx={{
          width: "100%",
          maxWidth: "700px",
        }}
      >
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography className={styles.cont__title}>
            Что такое Халяль Сертификат
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Сертификат подтверждающие о том, что тот или иной продукт разрешен к
            употреблению.
          </Typography>
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
            Как можно получить Сертификат Халяль -
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Нужно соответствовать всем нормам и требованиям священного <br />{" "}
            корана а также соответствовать международным стандартам
          </Typography>
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
            Кому выдается Сертификат Халяль
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Туристическим объектам, Заведениям общественного питания а также
            производителям продуктов питания.
          </Typography>
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
