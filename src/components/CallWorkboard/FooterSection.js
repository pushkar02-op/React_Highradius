import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import FooterIcon1 from "../../images/Symbol 255 – 1.svg";
import FooterIcon2 from "../../images/Symbol 254 – 1.svg";
import FooterIcon3 from "../../images/Symbol 254 – 2.svg";
import FooterIcon4 from "../../images/Symbol 254 – 3.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    height: "2.5vh",
    paddingBottom: "0.1vh",
  },
}));

export default function FooterSection() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <div style={{ marginLeft: "1.19vw" }}>
        <Typography variant="footerText">Viewing 1 - 5 of 12</Typography>
      </div>
      <div>
        <img
          style={{ padding: ".1vw", width: "0.57rem" }}
          src={FooterIcon1}
          alt="Icon"
        />
        <img
          style={{ padding: ".1vw", width: "0.57rem" }}
          src={FooterIcon2}
          alt="Icon"
        />
        <img
          style={{ padding: ".1vw", width: "0.57rem" }}
          src={FooterIcon3}
          alt="Icon"
        />
        <img
          style={{ padding: ".1vw", width: "0.57rem" }}
          src={FooterIcon4}
          alt="Icon"
        />
      </div>
      <div style={{ marginRight: "1.19vw" }}>
        <Typography variant="footerText">
          © Copyright 2018 HighRadius. All Rights Reserved.
        </Typography>
      </div>
    </div>
  );
}
