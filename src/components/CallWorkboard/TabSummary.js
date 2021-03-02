import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
// import theme from "../../theme";
const useStyles = makeStyles(() => ({
  Tab: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "8.2vh",
    justifyContent: "space-between",
  },
  TabSummary: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "7.407vh",
    width: "39.0625vw",
    marginRight: "2.08vw",
  },
}));
function test(labelValue) {
  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e9
    ? Math.abs(Number(labelValue)) / (1.0e9).toFixed(2) + "B"
    : // Six Zeroes for Millions
    Math.abs(Number(labelValue)) >= 1.0e6
    ? Math.abs(Number(labelValue)) / (1.0e6).toFixed(2) + "M"
    : // Three Zeroes for Thousands
    Math.abs(Number(labelValue)) >= 1.0e3
    ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + "K"
    : Math.abs(Number(labelValue));
}
export default function TabSummary(props) {
  const data = props.data;
  const classes = useStyles();
  const [selectedTab, setselectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setselectedTab(newValue);
  };
  return (
    <div className={classes.Tab}>
      <div>
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          indicatorColor={"secondary"}
        >
          <Tab
            label={`TO CALL LIST(${
              data.totalCustomerCount - data.processedCustomerCount
            })`}
            style={{
              color: "#FFFFFFA6",
              fontSize: "0.88rem",
              lineHeight: "1.06rem",
            }}
          />
          <Tab
            label={`FINISHED CALL LIST(${data.processedCustomerCount})`}
            style={{
              color: "#5DAAE0BF",
              fontSize: "0.88rem",
              lineHeight: "1.06rem",
            }}
            disabled
          />
        </Tabs>
        {/* <TabPanel value={selectedTab}>Item One</TabPanel> */}
      </div>
      <div className={classes.TabSummary}>
        <div>
          {data && (
            <Typography variant="tabtextbig">
              {data.processedCustomerCount}
            </Typography>
          )}
          <span>
            <Typography variant="tabtext">/</Typography>
          </span>
          <span>
            {data && (
              <Typography variant="tabtextsmall">
                {data.totalCustomerCount}
              </Typography>
            )}
          </span>

          <div>
            <Typography variant="subtitle1">Total Customers Called</Typography>
          </div>
        </div>
        <Divider flexItem={true} style={{ borderWidth: ".5px" }} />
        <div>
          {data && (
            <Typography variant="tabtextbig">
              {Math.floor(data.completedCallingMinutes / 60)}
            </Typography>
          )}
          <span>
            <Typography variant="tabtextsmall">hr</Typography>
          </span>
          <span>
            {data && (
              <Typography variant="tabtextbig">
                {data.completedCallingMinutes % 60}
              </Typography>
            )}
          </span>
          <span>
            <Typography variant="tabtextsmall">min</Typography>
          </span>
          <span>
            <Typography variant="tabtext">/</Typography>
          </span>
          {data && (
            <Typography variant="tabtextsmall">
              {Math.floor(data.completedCallingMinutes / 60)}
            </Typography>
          )}
          <span>
            <Typography variant="tabtextsmall">hr</Typography>{" "}
          </span>
          <span>
            {data && (
              <Typography variant="tabtextsmall">
                {data.completedCallingMinutes % 60}
              </Typography>
            )}
          </span>

          <span>
            <Typography variant="tabtextsmall">min</Typography>
          </span>

          <div>
            <Typography variant="subtitle1">
              Total Time Spent On Call
            </Typography>
          </div>
        </div>
        <Divider flexItem={true} style={{ borderWidth: ".5px" }} />
        <div>
          {data && (
            <Typography variant="tabtextbig">
              ${data.totalPastDueProcessed}
            </Typography>
          )}
          <span>
            <Typography variant="tabtext">/</Typography>
          </span>
          <span>
            {data && (
              <Typography variant="tabtextsmall">
                ${test(data.totalPastDueAmount)}
              </Typography>
            )}
          </span>

          <div>
            <Typography variant="subtitle1">Total Past Due Touched</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
