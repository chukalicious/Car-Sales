import React from "react";

const AddedFeature = (props) => {
  console.log("props in the AddedFeature component: ", props);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {`${props.feature.name} $${props.feature.price}`}
    </li>
  );
};

export default AddedFeature;
