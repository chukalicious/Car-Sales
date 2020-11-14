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
    //este action payload tal vex debiera ser un objeto completo, no solo una id
    //pero no se como va a functionar eso con un .filter()
    payload: itemId,
  };
};
