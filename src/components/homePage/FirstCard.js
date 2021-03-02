import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Highchart from "./Highchart";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NotBrokenIcon from "../../images/Symbol 33 – 1.svg";
import BrokenIcon from "../../images/Symbol 34 – 1.svg";

const useStyles = makeStyles(() => ({
  CardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "7.5vh",
  },
  CardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  CardIcon: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "0.5vw",
  },
}));

export default function FirstCard(props) {
  const { data } = props;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  // console.log(data);
  let totalData = 0;
  totalData = data.totalCurrentOpenAmount;
  for (let i = 0; i < data.pastDueBucketDocumentAmount.length; i++) {
    totalData += data.pastDueBucketDocumentAmount[i];
  }
  // console.log(totalData);

  let cardIcon = null;
  let promicesText = null;

  if (data.totalBrokenPromises && data.totalBrokenPromises > 0) {
    cardIcon = BrokenIcon;
    promicesText = "Broken Promises";
  } else {
    cardIcon = NotBrokenIcon;
    promicesText = "No Broken Promises";
  }
  function reportWindowSize() {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  }
  window.addEventListener("resize", reportWindowSize);

  const classes = useStyles();
  return (
    <div>
      <Card style={{ height: "inherit", background: "#273D49BF" }}>
        <div className={classes.CardHeader}>
          <CardHeader
            title={
              <Typography variant="cardTitle">
                {data && data.customerName}
              </Typography>
            }
          />
          <Typography variant="cardCustId" style={{ marginRight: "1vw" }}>
            {data && data.customerNumber}
          </Typography>
        </div>
        <div className={classes.CardContent}>
          <CardContent>
            <div style={{ height: "31vh", width: "23.658vw" }}>
              <Highchart
                id={Math.random().toString()}
                data={data && data}
                chartData={data.pastDueBucketDocumentAmount}
                currentDueData={data.totalCurrentOpenAmount}
                totalData={totalData}
                windowWidth={windowWidth && windowWidth}
                windowHeight={windowHeight && windowHeight}
              />
            </div>
          </CardContent>
          <div className={classes.CardIcon}>
            <Typography variant="brokenPromices">
              {data.totalBrokenPromises && data.totalBrokenPromises > 0
                ? data.totalBrokenPromises
                : null}
            </Typography>
            <img
              src={cardIcon}
              alt="CardIcon"
              style={{ width: "4.63vw", height: "5.23vh" }}
            />
            <Typography
              variant="promicesText"
              style={{ width: "4.37vw", height: "6.66vh", marginTop: "2.5vh" }}
            >
              {promicesText && promicesText}
            </Typography>
          </div>
        </div>
      </Card>
    </div>
  );
}
