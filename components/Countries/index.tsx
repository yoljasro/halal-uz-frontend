import { FC } from "react";
import React from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// styles
import styles from "./index.module.sass";
import { MainPageTitle } from "../MainPageTitle";
// import Image
import Link from "next/link";
// constants
import { CountriesArray, CountriesType } from "../../constants";
import { useRouter } from "next/router";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
  country?: string;
}

type LinkType = {
  link: string;
  azerbajan: string;
  saudia: string;
  turkey: string;
};
function TabPanel(props: TabPanelProps) {
  const { children, country, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export const Countries: FC<LinkType> = ({
  link,
  azerbajan,
  saudia,
  turkey,
}) => {
  const router = useRouter();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <div className={styles.cont}>
      <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Asia" {...a11yProps(0)} />
            <Tab label="Europe" {...a11yProps(1)} />
            <Tab label="USA" {...a11yProps(2)} />
            {/* <Tab label="Australia" {...a11yProps(3)} /> */}
            <Tab label="Africian" {...a11yProps(4)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className={styles.cont__countries}>
              <a
                rel="noreferrer"
                target={"_blank"}
                className={styles.cont__link}
                href={link}
              >
                <div className={styles.cont__card}>Uzbekistan</div>
              </a>
              <a
                rel="noreferrer"
                href={saudia}
                target="_blank"
                className={styles.cont__link}
              >
                <div className={styles.cont__card}>Saudia Arabia</div>
              </a>
              <a
                rel="noreferrer"
                href={azerbajan}
                target="_blank"
                className={styles.cont__link}
              >
                <div className={styles.cont__card}>Azerbajan</div>
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href={turkey}
                className={styles.cont__link}
              >
                <div className={styles.cont__card}>Turkey</div>
              </a>
              <div className={styles.cont__card}>Kyrgyzstan</div>
              <div className={styles.cont__card}>Morocco</div>
              <div className={styles.cont__card}>Nigeria</div>
              <div className={styles.cont__card}>Malaysia</div>
              <div className={styles.cont__card}>Pakistan</div>
              <div className={styles.cont__card}>Livan</div>
              <div className={styles.cont__card}>Jordan</div>
              <div className={styles.cont__card}>Bangladesh</div>
              <div className={styles.cont__card}>Gambia</div>
              <div className={styles.cont__card}>Katar</div>
              <div className={styles.cont__card}>Egypt</div>
              <div className={styles.cont__card}>Kazakstan</div>
              <div className={styles.cont__card}>Gambia</div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className={styles.cont__countries}>
              <div className={styles.cont__card}>France</div>
              <div className={styles.cont__card}>Angly</div>
              <div className={styles.cont__card}>Spanish</div>
              <div className={styles.cont__card}>Portugal</div>
              <div className={styles.cont__card}>Latvia</div>
              <div className={styles.cont__card}>Litva</div>
              <div className={styles.cont__card}>Niderlandiya</div>
              <div className={styles.cont__card}>Vengry</div>
              <div className={styles.cont__card}>Croatia</div>
              <div className={styles.cont__card}>Germany</div>
              <div className={styles.cont__card}>Russia</div>
              <div className={styles.cont__card}>Italy</div>
              <div className={styles.cont__card}>Dania</div>
              <div className={styles.cont__card}>Finland</div>
              <div className={styles.cont__card}>Switzerland</div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className={styles.cont__countries}>
              <div className={styles.cont__card}>Alabama</div>
              <div className={styles.cont__card}>Alyaska</div>
              <div className={styles.cont__card}>Arizona</div>
              <div className={styles.cont__card}>Arkanzas</div>
              <div className={styles.cont__card}>Kaliforniya</div>
              <div className={styles.cont__card}>Kolorado</div>
              <div className={styles.cont__card}>Konnektikut</div>
              <div className={styles.cont__card}>Delaver 9</div>
              <div className={styles.cont__card}>Florida</div>
              <div className={styles.cont__card}>Gavayi</div>
              <div className={styles.cont__card}>Kanzas</div>
              <div className={styles.cont__card}>Merilend</div>
              <div className={styles.cont__card}>Massachusets</div>
              <div className={styles.cont__card}>Missisipi</div>
              <div className={styles.cont__card}>Minnesota</div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            <div className={styles.cont__countries}>
              <div className={styles.cont__card}>Algeria</div>
              <div className={styles.cont__card}>Angola</div>
              <div className={styles.cont__card}>Benin</div>
              <div className={styles.cont__card}>Botswana</div>
              <div className={styles.cont__card}>Burundi</div>
              <div className={styles.cont__card}>Cabo Verde</div>
              <div className={styles.cont__card}>Cameroon</div>
              <div className={styles.cont__card}>Central African Republic</div>
              <div className={styles.cont__card}>Chad</div>
              <div className={styles.cont__card}>Comoros</div>
              <div className={styles.cont__card}>
                Democratic Republic of the Congo
              </div>
              <div className={styles.cont__card}>Republic of the Congo</div>
              <div className={styles.cont__card}>Egypt</div>
              <div className={styles.cont__card}>Equatorial Guinea</div>
              <div className={styles.cont__card}>Eritrea</div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={4} dir={theme.direction}>
            <div className={styles.cont__countries}>
              <div className={styles.cont__card}>France</div>
              <div className={styles.cont__card}>Angly</div>
              <div className={styles.cont__card}>Spanish</div>
              <div className={styles.cont__card}>Portugal</div>
              <div className={styles.cont__card}>Latvia</div>
              <div className={styles.cont__card}>Litva</div>
              <div className={styles.cont__card}>Niderlandiya</div>
              <div className={styles.cont__card}>Vengry</div>
              <div className={styles.cont__card}>Croatia</div>
              <div className={styles.cont__card}>Germany</div>
              <div className={styles.cont__card}>Russia</div>
              <div className={styles.cont__card}>Italy</div>
              <div className={styles.cont__card}>Dania</div>
              <div className={styles.cont__card}>Finland</div>
              <div className={styles.cont__card}>Switzerland</div>
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
};
