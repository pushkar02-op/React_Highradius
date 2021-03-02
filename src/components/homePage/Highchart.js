import React, { useEffect } from "react";
import Highcharts from "highcharts";

export default function Highchart(props) {
  const {
    data,
    chartData,
    currentDueData,
    totalData,
    windowWidth,
    windowHeight,
  } = props;
  // console.log(windowHeight);

  const renderChart = () => {
    const chart = Highcharts.chart(`container${props.id}`, {
      chart: {
        type: "column",
        backgroundColor: "transparent",
        // marginBottom: windowHeight / 36,
        // spacingBottom: windowHeight / 108,
      },
      title: "",
      yAxis: {
        visible: false,
        title: {
          text: "",
        },
        labels: "",
      },
      credits: { enabled: false },
      legend: {
        enabled: false,
      },

      xAxis: {
        lineColor: "#FFFFFFA6",
        lineWidth: 0.5,
        labels: {
          enabled: true,
          rotation: 0,
          overflow: "allow",

          style: {
            textAlign: "center",
            fontSize: "0.71rem",
            lineHeight: "0.8rem",
            letterSpacing: "0px",
            color: "#FFFFFFA6",
            opacity: "0.6",
            fontFamily: "Roboto",
          },
        },

        categories: [
          "Current Due",
          `${data && data.bucketNames[0]}`,
          `${data && data.bucketNames[1]}`,
          `${data && data.bucketNames[2]}`,
          `${data && data.bucketNames[3]}`,
          `${data && data.bucketNames[4]}`,
        ],
      },
      plotOptions: {
        series: {
          color: "#5DAAE0",
          borderWidth: 0,
          pointWidth: windowWidth / 64,
        },
        column: {
          dataLabels: {
            enabled: true,
            allowOverlap: true,
            overflow: "allow",
            crop: false,
            formatter: function () {
              return ` ${((Math.ceil(this.y) / totalData) * 100).toFixed(1)}%
                       <br>
                       $ ${(this.y / 1000).toFixed(1)}K `;
            },
            style: {
              color: "#FFFFFF80",
              margin: 1,
              border: "none",
              fontSize: "0.71rem",
              fontWeight: "lighter",
              fontFamily: "Roboto",
              textOutline: "0",
            },
          },
        },
      },
      series: [
        {
          data: [
            currentDueData,
            chartData[0],
            chartData[1],
            chartData[2],
            chartData[3],
            chartData[4],
          ],
        },
      ],
      tooltip: {
        enabled: false,
      },
    });
    return chart;
  };

  useEffect(() => {
    renderChart();
  });
  return (
    <div
      style={{ height: "100%", width: "100%" }}
      id={`container${props.id}`}
    ></div>
  );
}
