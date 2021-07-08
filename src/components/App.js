import "./App.css";
import React from "react";
import { nestedTaxonomy } from "../utils/TaxonomyData";
import Taxonomies from "./Taxonomies";

class App extends React.Component {
  render() {
    return (
      <div className="body">
        <h3 className="taxonomyTitle">Full Taxonomy List Component</h3>
        <Taxonomies taxonomyList={nestedTaxonomy} nestingLevel={0} />
      </div>
    );
  }
}

export default App;
