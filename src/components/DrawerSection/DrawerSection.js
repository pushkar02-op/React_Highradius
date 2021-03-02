import React, { useState } from "react";
import * as Icons from "@material-ui/icons/";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import MenuIcon from "../../images/baseline-menu-24px.svg";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Fab,
  Typography,
  ClickAwayListener,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    width: "4.166vw",
  },
  sidebar: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    backgroundColor: theme.palette.secondary.main,
    alignItems: "center",
    height: "100%",
    justifyContent: "space-between",
  },
  Avatar: {
    position: "fixed",
    bottom: "3vh",
    width: "2.5vw",
    height: "4.44vh",
  },
  Drawer: {
    width: "24.7916vw",
  },
  drawerButton: {
    width: "4.2vw",
    height: "7.5vh",
  },
  list: {
    width: "24.7916vw",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: theme.palette.secondary.main,
  },
  listBottom: {
    display: "flex",
    justifyContent: "space-around",
    padding: "0px",
    marginBottom: "3vh",
  },
  listItemText: {
    fontSize: "0.88rem",
    color: "#FFFFFF",
    cursor: "pointer",
    paddingLeft: "1vw",
  },
}));

export default function DrawerSection() {
  const classes = useStyles();
  const [sidebar, setSidebar] = useState(false);

  const toggleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setSidebar(!sidebar);
  };
  const list = () => (
    <div onClick={toggleDrawer} style={{ height: "100%" }}>
      <List className={clsx(classes.list)} style={{ padding: "0px" }}>
        <ListItem style={{ padding: "0px" }}>
          <div className={classes.drawerButton}>
            <IconButton color="secondary" onClick={toggleDrawer()}>
              <img
                style={{ width: "4vw", height: "5.5vh" }}
                src={MenuIcon}
                alt={"MenuIcon"}
              />
            </IconButton>
          </div>
        </ListItem>
        <Divider />
        <ListItem
          style={{
            flex: "1 0 18.51vh",
            alignItems: "flex-start",
            padding: "0px",
            marginTop: "3vh",
          }}
        >
          <ListItemIcon>
            <Icons.ArrowBack
              color={"error"}
              onClick={toggleDrawer()}
              style={{ cursor: "pointer", paddingLeft: "1vw" }}
            />
          </ListItemIcon>
          <ListItemText
            className={classes.listItemText}
            primary="Switch back to Enterprise UI "
            onClick={toggleDrawer()}
          />
        </ListItem>
        <ListItem className={classes.listBottom}>
          <ListItemIcon>
            <Avatar style={{ width: "2.5vw", height: "4.44vh" }}>J</Avatar>
          </ListItemIcon>
          <Typography
            variant="drawername"
            style={{
              alignItems: "flex-start",
            }}
          >
            John Smith
          </Typography>
          <Fab
            style={{
              width: "7.29vw",
              height: "4.44vh",
              borderRadius: "2.2vw",
              color: "white",
              backgroundColor: "#2D4250",
            }}
          >
            Logout
          </Fab>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <div className={classes.drawerButton}>
          <IconButton color="secondary" onClick={toggleDrawer()}>
            <img
              style={{ width: "4vw", height: "5.5vh" }}
              src={MenuIcon}
              alt={"MenuIcon"}
            />
          </IconButton>
        </div>
        <div className={classes.Avatar}>
          <Avatar style={{ width: "2.5vw", height: "4.44vh" }}>J</Avatar>
        </div>
      </div>
      <div className={classes.Drawer}>
        <Drawer open={sidebar}>
          <ClickAwayListener onClickAway={toggleDrawer()}>
            {list()}
          </ClickAwayListener>
        </Drawer>
      </div>
    </div>
  );
}
