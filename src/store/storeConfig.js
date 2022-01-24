import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
  //Setting States
  numbers: function (state, action) {
    switch (action.type) {
      case "VALUE_MIN_CHANGED":
        return {
          ...state,
          min: action.payload,
        };
      case "VALUE_MAX_CHANGED":
        return {
          ...state,
          max: action.payload,
        };
      default:
        return {
          min: 0,
          max: 10,
        };
    }
  },
  name: function (state, action) {
    console.log("Reducer Names...");
    console.log(state, " ", action);
    return ["Lua", "Isa"];
  },
});

function storeConfig() {
  return createStore(reducers); //Creating State
}

export default storeConfig;
