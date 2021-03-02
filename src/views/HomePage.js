import React from "react";
import Render from "../components/utilityComponents/Render";

export default function FirstCard(props) {
  return (
    <div
      style={{
        height: "100%",
        padding: "1vw",
        paddingBottom: "0px",
        boxSizing: "border-box",
      }}
    >
      <Render data={props.data && props.data} />
    </div>
  );
}
