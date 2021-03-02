import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "../../images/Symbol 129 – 1.svg";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Button from "@material-ui/core/Button";
import FreedaIcon from "../../images/Group1206.svg";
import TopHeaderButtonLeft from "../../images/Symbol 531 – 3.svg";
import TopHeaderButtonRight from "../../images/Symbol 534 – 1.svg";
import { useDispatch } from "react-redux";
import "../../App.css";

const useStyles = makeStyles(() => ({
  Header: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "7.4vh",
    justifyContent: "space-between",
  },
  HeaderItems: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "15.625vw",
    height: "4.444vh",
    border: "0.092vh solid #5DAAE0",
    borderRadius: "2.2vh",
  },
  headerTopButton: {
    height: "2.314vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "flex-start",
    background: "#FC7500 0% 0% no-repeat padding-box",
    boxShadow: "0px 3px 6px #00000029",
    borderRadius: "0px 0px 0.577rem 0.577rem",
    opacity: "1",
  },
}));

export default function HeaderSection() {
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <div className={classes.Header}>
      <div style={{ flex: "0 0 21vw" }}>
        <Button style={{ padding: "0px" }}>
          <ArrowBackIcon color={"error"} style={{ margin: "0 1vw" }} />
          <Typography variant="call" className={classes.headerCallworkboard}>
            Call Workboard
          </Typography>
        </Button>
      </div>
      <div className={classes.headerTopButton}>
        <img
          src={TopHeaderButtonLeft}
          alt="topbutton"
          style={{ height: "2.22vh", width: "0.54vw" }}
        />
        <Typography variant="h5">AUTONOMOUS RECEIVABLES</Typography>
        <img
          src={TopHeaderButtonRight}
          alt="topbutton"
          style={{ height: "2.22vh", width: "0.54vw" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "25vw",
          alignItems: "center",
        }}
      >
        <div className={classes.HeaderItems}>
          <img
            style={{ minWidth: "2.5vw", height: "4.44vh", alignSelf: "center" }}
            src={SearchIcon}
            alt={SearchIcon}
          />

          <InputBase
            placeholder="Search Name"
            style={{
              color: "#FFFFFF80",
              opacity: "100%",
            }}
          />
          <ArrowDropDownIcon color={"secondary"} />
        </div>
        <div style={{ marginRight: "1.04vw" }}>
          <Button
            onClick={() => dispatch({ type: "open" })}
            style={{
              backgroundColor: "#FC7500",
              width: "7.29vw",
              height: "4.44vh",
              borderRadius: "2vw",
              minWidth: "0px",
              padding: "1.2vh",
            }}
          >
            <Typography variant={"button"}>FREEDA</Typography>
            <img
              src={FreedaIcon}
              alt={FreedaIcon}
              style={{ width: "2.5vw", height: "4.44vh" }}
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
