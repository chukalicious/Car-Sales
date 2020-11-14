export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const addFeature = (feature) => {
  return {
    type: ADD_FEATURE,
    payload: feature,
  };
};

export const removeFeature = (itemId) => {
  console.log("itemId is the action.payload: ", itemId);
  return {
    type: REMOVE_FEATURE,
    payload: itemId,
  };
};
