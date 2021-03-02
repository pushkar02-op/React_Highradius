import React from "react";
// import clsx from "clsx";
import FreedaCloseIcon from "../../images/Group 1222.svg";
import FreedaIcon from "../../images/Group1206.svg";
import "../css/FreedaDrawer.css";
import Divider from "@material-ui/core/Divider";
import { useSelector, useDispatch } from "react-redux";
import { Drawer, List, ListItem, Typography } from "@material-ui/core";

export default function FreedaDrawer() {
  const value = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const list = () => (
    <div style={{ height: "100%", width: "20vw" }}>
      <List
        style={{ padding: "0px", backgroundColor: "#2D4250", height: "100%" }}
      >
        <ListItem
          style={{
            padding: "0px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography style={{ padding: "1vw" }} variant="freedaDrawerTitle">
            FREEDA
          </Typography>
          <img
            onClick={() => dispatch({ type: "open" })}
            src={FreedaCloseIcon}
            alt="FreedaCloseIcon"
            style={{
              width: "1.4vw",
              height: "2.5vh",
              padding: "0.75vw",
              cursor: "pointer",
            }}
          ></img>
        </ListItem>
        <Divider />
        <ListItem style={{ padding: "0px" }}>
          <div
            style={{
              transform: "scaleX(-1)",
            }}
          >
            <img
              src={FreedaIcon}
              alt="FreedaIcon"
              style={{ width: "1.89vw", height: "3.37vh" }}
            ></img>
          </div>
          <Typography
            variant="freedaDrawerText"
            style={{ paddingLeft: ".5rem" }}
          >
            Hi John,
            <br /> how can I help you?
          </Typography>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className="FreedaDrawer">
      <Drawer anchor="right" variant="persistent" open={value}>
        {list()}
      </Drawer>
    </div>
  );
}
