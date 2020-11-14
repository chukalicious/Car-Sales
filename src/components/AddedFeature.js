import React, { useState } from "react";

const AddedFeature = (props) => {
  const [toDelete, setToDelete] = useState({
    id: props.feature.id,
    name: props.feature.name,
    price: props.feature.price,
  });

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className="button"
        onClick={() => {
          props.removeFeature(toDelete);
        }}
      >
        X
      </button>
      {`${props.feature.name} $${props.feature.price}`}
    </li>
  );
};

export default AddedFeature;
