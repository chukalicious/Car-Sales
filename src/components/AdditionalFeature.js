import React, { useState } from "react";
// import { connect } from "react-redux";

const AdditionalFeature = (props) => {
  const [feature, setFeature] = useState({
    name: props.feature.name,
    price: props.feature.price,
    id: props.feature.id,
  });

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={() => {
          props.addFeature(feature);
        }}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

/* const mapStateToProps = (state) => {
  return {
    feature: state.feature,
  };
};
export default connect(mapStateToProps, {})(AdditionalFeature); */

export default AdditionalFeature;
