import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#58687E",
      light: "#FFFFFFA6",
      dark: "#273D49BF",
    },
    secondary: {
      main: "#5DAAE0",
    },
    error: {
      main: "#FFFFFF",
    },
    icon: {
      main: "#FC7500",
    },
  },
  typography: {
    // fontFamily: "Roboto",
    call: {
      textTransform: "none",
      textAlign: "left",
      letterSpacing: "0px",
      color: "#5DAAE0",
      fontSize: "1.77rem",
      lineHeight: "2.13rem",
      opacity: "1",
    },
    tabtextbig: {
      textAlign: "left",
      opacity: "1",
      fontSize: "1.33rem",
      lineHeight: "1.066rem",
      color: "#FFFFFF",
      letterSpacing: "0.0475rem",
    },
    tabtext: {
      color: "#FFFFFFA6",
      textAlign: "center",
      fontSize: "1.33rem",
      lineHeight: "1.066rem",
      letterSpacing: "0.0475rem",
    },
    tabtextsmall: {
      textAlign: "center",
      letterSpacing: "0.0315rem",
      lineHeight: "1.066rem",
      fontSize: "0.88rem",
      color: "#FFFFFFA6",
    },
    subtitle1: {
      textAlign: "center",
      letterSpacing: "0.02844rem",
      color: "#5DAAE0",
      fontSize: "0.8rem",
      lineHeight: "0.97rem",
      opacity: "1",
    },
    h5: {
      fontSize: "0.622rem",
      lineHeight: "0.755rem",
      color: "white",
      marginBlockStart: "0px",
      marginBlockEnd: "0px",
    },
    button: {
      textAlign: "left",
      letterSpacing: "0px",
      color: "#FFFFFF",
      fontSize: "0.88rem",
      lineHeight: "1.06rem",
      opacity: "1",
    },
    drawername: {
      fontSize: "1.15rem",
      lineHeight: "1.42rem",
      color: "#FFFFFF",
    },
    footerText: {
      fontSize: "0.88rem",
      lineHeight: "1.06rem",
      textAlign: "right",
      color: "#FFFFFFA6",
    },
    cardTitle: {
      // fontFamily: "Roboto Regular",
      fontSize: "1.33rem",
      lineHeight: "1.64rem",
      textAlign: "left",
      letterSpacing: "0px",
      color: "#FFFFFF80",
      opacity: 1,
    },
    cardCustId: {
      fontSize: "0.8rem",
      lineHeight: "0.97rem",
      textAlign: "right",
      color: "#FFFFFF80",
      opacity: 1,
    },
    brokenPromices: {
      textAlign: "center",
      fontSize: "1.77rem",
      lineHeight: "2.13rem",
      letterSpacing: "0px",
      color: "#FFFFFF",
      opacity: 1,
    },
    promicesText: {
      textAlign: "center",
      fontSize: "0.88rem",
      lineHeight: "1.06rem",
      letterSpacing: "0px",
      color: "#FFFFFF80",
      opacity: 1,
    },
    freedaDrawerTitle: {
      textAlign: "left",
      font: "normal normal normal 1.06rem/1.28rem ",
      color: "#FFFFFF",
      opacity: 0.65,
    },
    freedaDrawerText: {
      textAlign: "left",
      font: "normal normal normal 0.88rem/1.06rem ",
      color: "#FFFFFF",
      opacity: 1,
    },
  },
});

export default theme;
