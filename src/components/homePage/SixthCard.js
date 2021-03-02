import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Highchart from "./Highchart";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  CardHeader: {
    justifyContent: "space-between",
    alignItems: "center",
    height: "7.87vh",
  },
}));

export default function SixthCard(props) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  // console.log(windowWidth);

  const { data } = props;
  // console.log(data);

  var totalSum = [0, 0, 0, 0, 0, 0];
  for (let index = 5; index < data.length; index++) {
    // console.log(data[index].pastDueBucketDocumentAmount[0]);
    for (let i = 0; i < data[index].pastDueBucketDocumentAmount.length; i++) {
      totalSum.map(
        () => (totalSum[i] += data[index].pastDueBucketDocumentAmount[i])
      );
    }
  }
  // console.log(totalSum);

  let currentDueSum = 0;
  for (let index = 5; index < data.length; index++) {
    // console.log(data[index].totalCurrentOpenAmount);

    currentDueSum += data[index].totalCurrentOpenAmount;
  }
  // console.log(currentDueSum);
  let totalData = currentDueSum;
  for (let i = 0; i < totalSum.length; i++) {
    totalData += totalSum[i];
  }
  // console.log(totalData);

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
                Remaining Balance Summary
              </Typography>
            }
          />
        </div>
        <div className={classes.CardContent}>
          <CardContent>
            <div style={{ height: "30.5vh", width: "100%" }}>
              <Highchart
                id={Math.random().toString()}
                data={data && data[5]}
                chartData={totalSum}
                currentDueData={currentDueSum}
                totalData={totalData}
                windowWidth={windowWidth && windowWidth}
                windowHeight={windowHeight && windowHeight}
              />
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
