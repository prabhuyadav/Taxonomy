import "./Taxonomy.css";
import React from "react";
import Taxonomies from "./Taxonomies";
import { stringToColor } from "../utils/ColorGenerator";

class Taxonomy extends React.Component {
  state = { backgroundColor: "white" };

  onSelection = () => {
    if (this.state.backgroundColor !== "white") {
      this.setState({ backgroundColor: "white" });
    } else {
      const backgroundColor = "aliceblue";
      this.setState({ backgroundColor });
    }
  };

  render() {
    const taxonomy = this.props.taxonomy;
    const nestingLevel = this.props.nestingLevel;
    let positionIndent = "";
    if (nestingLevel > 2) {
      positionIndent = `${(nestingLevel - 1) * 15}px`;
    }

    const hexCode = stringToColor(taxonomy.name);
    return (
      <div>
        <div
          onClick={this.onSelection}
          className="taxonomy"
          style={{ backgroundColor: this.state.backgroundColor }}
        >
          <div className="taxonomyContent" style={{ left: positionIndent }}>
            <div
              className="colorBox"
              style={{ backgroundColor: `${hexCode}` }}
            ></div>
            <div className="name">{taxonomy.name.replaceAll(" ", "")}</div>
          </div>
        </div>
        <Taxonomies
          taxonomyList={taxonomy.children}
          nestingLevel={nestingLevel}
        />
      </div>
    );
  }
}

export default Taxonomy;
