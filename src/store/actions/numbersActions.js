import { VALUE_MAX_CHANGED, VALUE_MIN_CHANGED } from "./actionTypes";
//Action Creator
export function changeMinValue(newValue) {
  //Returning an Action
  return {
    //Mandatory to use type
    type: VALUE_MIN_CHANGED,
    payload: newValue,
  };
}
export function changeMaxValue(newValue) {
  //Returning an Action
  return {
    //Mandatory to use type
    type: VALUE_MAX_CHANGED,
    payload: newValue,
  };
}
