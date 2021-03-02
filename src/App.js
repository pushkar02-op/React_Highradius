import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import DrawerSection from "./components/DrawerSection/DrawerSection";
import CallWorkboard from "./components/CallWorkboard/CallWorkboard";
import FreedaDrawer from "./components/DrawerSection/FreedaDrawer";

const useStyles = makeStyles(() => ({
  App: {
    display: "flex",
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <DrawerSection />
      <CallWorkboard />
      <FreedaDrawer />
    </div>
  );
}

export default App;
