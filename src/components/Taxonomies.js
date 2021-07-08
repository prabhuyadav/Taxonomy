import React from "react";
import Taxonomy from "./Taxonomy";

const Taxonomies = ({ taxonomyList, nestingLevel }) => {
  if (taxonomyList.length === 0) {
    return <div></div>;
  }
  nestingLevel++;
  const renderedTaxonomies = taxonomyList.map((taxonomy) => {
    return (
      <Taxonomy
        key={taxonomy.classId}
        taxonomy={taxonomy}
        nestingLevel={nestingLevel}
      />
    );
  });

  return <div className="taxonomyList">{renderedTaxonomies}</div>;
};

export default Taxonomies;
