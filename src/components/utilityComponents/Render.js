import React, { Component } from "react";
import "../../App.css";
import withWidth from "@material-ui/core/withWidth";
import layoutConfig from "../../layout-config/layoutConfig.json";
import ComponentGetter from "../../utils/component-getters/ComponentGetter";
import FlexGrid from "./FlexGrid";

class Render extends Component {
  constructor(props) {
    super(props);
    this.customerIndex = -1;
  }

  getComponent = (componentID) => {
    if (this.props.data) {
      this.customerIndex += 1;
      if (this.customerIndex > 5) {
        this.customerIndex = 0;
      }
      // console.log("Render Index...", this.customerIndex);
      return (
        <ComponentGetter
          componentId={componentID}
          data={this.props.data && this.props.data}
          index={this.customerIndex}
        />
      );
    }
  };

  render() {
    const { width } = this.props;
    // console.log(width);

    const layoutConfigView = layoutConfig["0"][width];

    return (
      <FlexGrid
        layoutConfiguration={layoutConfigView}
        getComponent={this.getComponent}
      />
    );
  }
}

export default withWidth()(Render);
