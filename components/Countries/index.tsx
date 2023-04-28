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
import Document from "next/document";

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
  saudia : string;
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

export const Countries: FC<LinkType> = ({ link, azerbajan , saudia }) => {
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
            <Tab label="African" {...a11yProps(2)} />
            <Tab label="Australia" {...a11yProps(3)} />
            <Tab label="Africian" {...a11yProps(4)} />
            <Tab label="Europe" {...a11yProps(5)} />
            <Tab label="Asia" {...a11yProps(6)} />
            <Tab label="Africian" {...a11yProps(7)} />
            <Tab label="Asia" {...a11yProps(8)} />
            <Tab label="Europe" {...a11yProps(9)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className={styles.cont__countries}>
              <a target={"_blank"} className={styles.cont__link} href={link}>
                <div className={styles.cont__card}>Uzbekistan</div>
              </a>
              <a href={saudia} target="_blank" className={styles.cont__link}>
                <div className={styles.cont__card}>Saudia Arabia</div>
              </a>
              <a href={azerbajan} target="_blank" className={styles.cont__link}>
                <div className={styles.cont__card}>Azerbajan</div>
              </a>
              <div className={styles.cont__card}>India</div>
              <div className={styles.cont__card}>China</div>
              <div className={styles.cont__card}>BAA</div>
              <div className={styles.cont__card}>Krgzstan</div>
              <div className={styles.cont__card}>Kazakstan</div>
              <div className={styles.cont__card}>Qatar</div>
              <div className={styles.cont__card}>Singapore</div>
              <div className={styles.cont__card}>Turkey</div>
              <div className={styles.cont__card}>Filippin</div>
              <div className={styles.cont__card}>Ukraine</div>
              <div className={styles.cont__card}>Bahrayn</div>
              <div className={styles.cont__card}>Korea</div>
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
          <TabPanel value={value} index={3} dir={theme.direction}>
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
          <TabPanel value={value} index={5} dir={theme.direction}>
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
          <TabPanel value={value} index={6} dir={theme.direction}>
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
          <TabPanel value={value} index={7} dir={theme.direction}>
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
          <TabPanel value={value} index={8} dir={theme.direction}>
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
          <TabPanel value={value} index={9} dir={theme.direction}>
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
