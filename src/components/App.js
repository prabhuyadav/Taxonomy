import "./App.css";
import React from "react";
import { taxonomyData } from "../utils/TaxonomyData";
import Taxonomies from "./Taxonomies";

class App extends React.Component {
  render() {
    return (
      <div className="body">
        <h3 className="taxonomyTitle">Full Taxonomy List Component</h3>
        <Taxonomies taxonomyList={taxonomyData} nestingLevel={0} />
      </div>
    );
  }
}

export default App;

// Import the data you wanna display against taxonomyData variable in TaxonomyData.js whether it be flatTaxonomy or a nestedTaxonomy

// by default i put the nestedTaxonomy object in the git red brick assignment repo as the taxonomyData
