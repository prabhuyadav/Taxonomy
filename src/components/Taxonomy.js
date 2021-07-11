import "./Taxonomy.css";
import React from "react";
import Taxonomies from "./Taxonomies";
import { stringToColor } from "../utils/ColorGenerator";

class Taxonomy extends React.Component {
  render() {
    const taxonomy = this.props.taxonomy;
    let color = "white";
    if (this.props.selected === taxonomy.name) {
      color = "aliceblue";
    }
    const nestingLevel = this.props.nestingLevel;
    let positionIndent = "";
    if (nestingLevel > 2) {
      positionIndent = `${(nestingLevel - 1) * 15}px`;
    }

    const hexCode = stringToColor(taxonomy.name);
    return (
      <div>
        <div style={{ backgroundColor: color }} className="taxonomy">
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
          selected={this.props.selected}
        />
      </div>
    );
  }
}

export default Taxonomy;
