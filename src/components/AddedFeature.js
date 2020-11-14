import React, { useState } from "react";

const AddedFeature = (props) => {
  console.log("Props in the AddedFeature component: ", props);
  const [toDelete, setToDelete] = useState({
    id: props.feature.id,
    name: props.feature.name,
    price: props.feature.price,
  });
  console.log("props.feature is the object to delete: ", toDelete);

  /* const handleRemove = (e) => {
    const newList = toDelete.filter((li) => li.id !== id);
    setToDelete(newList);
    props.removeFeature(toDelete);
  }; */

  const array = [1, 2, 3, 4, 5, 6, 7];
  const removeNumber = () => {
    const newArray = array.filter((num) => num < 3);
    console.log("newArray: ", newArray);
  };
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
