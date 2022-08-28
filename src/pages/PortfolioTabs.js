import React, { useState } from "react";

import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PortfolioGrid from "../components/PorfolioComponents/PortfolioGrid";
import { Heading } from "../components/Heroes/HeroStyles/TextHeroElements";
import CppGrid from "../components/PorfolioComponents/CppGrid";
import CsharpGrid from "../components/PorfolioComponents/CsharpGrid";
import Games from "../components/PorfolioComponents/Games";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

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
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

//STYLED

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#00ccff",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: "#fff",
    "&.Mui-selected": {
      color: "#00ccff",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#00ccff",
    },
  })
);

const PortfolioTabs = ({ id }) => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div id={id}>
      <Heading style={{ color: "#fff", textAlign: "center" }}>
        Portfolio
      </Heading>
      <Box
        style={{
          marginRight: "auto",
          marginLeft: "auto",
          padding: "0 50px",
          background: "rgb(17,24,28)",
          color: "#fff",
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="styled tabs example"
          >
            <StyledTab label="WebApps" />
            <StyledTab label="C++" />
            <StyledTab label="C#" />
            <StyledTab label="Games" />
          </StyledTabs>
          <Box sx={{ p: 3 }} />
        </Box>
        <TabPanel value={value} index={0}>
          <PortfolioGrid />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <CppGrid />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <CsharpGrid />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Games />
        </TabPanel>
      </Box>
    </div>
  );
};

export default PortfolioTabs;
