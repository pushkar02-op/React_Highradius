import React from "react";
import { MY_RENDER_APP } from "../Constants";
import FirstCard from "../../components/homePage/FirstCard";
import SixthCard from "../../components/homePage/SixthCard";

function componentGetter(props) {
  const { componentId, data, index } = props;
  if (componentId === MY_RENDER_APP.FIRST_CARD) {
    return <FirstCard data={data[index]} />;
  } else if (componentId === MY_RENDER_APP.SIXTH_CARD) {
    return <SixthCard data={data && data} />;
  } else return null;
}

export default componentGetter;
