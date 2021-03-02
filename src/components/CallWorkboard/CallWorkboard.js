import React, { useEffect, useState } from "react";
import HeaderSection from "./HeaderSection";
import TabSummary from "./TabSummary";
import HomePage from "../../views/HomePage";
import FooterSection from "./FooterSection";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

import ApiCall from "../ApiCall";

const useStyles = makeStyles((theme) => ({
  CallWorkboard: {
    width: "100%",
    height: "100vh",
    background:
      "transparent radial-gradient(closest-side at 50% 50%, #58687E 0%, #39495E 100%) 0% 0% no-repeat padding-box",
  },
  HomePage: {
    height: "81vh",
    width: "100%",
  },
}));
export default function CallWorkboard() {
  const classes = useStyles();
  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const fetcheddata = await ApiCall();
      setData(fetcheddata);
      setLoaded(true);
    }
    fetchData();
  }, []);
  if (loaded === false) {
    return (
      <div className={classes.CallWorkboard}>
        <HeaderSection />
        <div style={{ position: "relative", left: "43%", top: "32%" }}>
          <CircularProgress color="secondary" size="10rem" />
        </div>
      </div>
    );
  } else {
    return (
      <div className={classes.CallWorkboard}>
        <HeaderSection />
        <TabSummary data={data && data.overview} />
        <div className={classes.HomePage}>
          <HomePage data={data && data.workbookItems} />
        </div>
        <FooterSection />
      </div>
    );
  }
}
