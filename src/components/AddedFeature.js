import React, { useState } from "react";

const AddedFeature = (props) => {
  console.log("props in the AddedFeature component: ", props);
  const [id, setId] = useState(props.feature.id);
  console.log("props.feature.id: ", id);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className="button"
        onClick={() => {
          props.removeFeature(id);
        }}
      >
        X
      </button>
      {`${props.feature.name} $${props.feature.price}`}
    </li>
  );
};

export default AddedFeature;
