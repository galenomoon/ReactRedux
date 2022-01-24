import { VALUE_MAX_CHANGED, VALUE_MIN_CHANGED } from "../actions/actionTypes";
const initialState = {
  min: 1,
  max: 10,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case VALUE_MIN_CHANGED:
      return {
        ...state,
        min: action.payload,
      };
    case VALUE_MAX_CHANGED:
      return {
        ...state,
        max: action.payload,
      };
    default:
      return state;
  }
}
