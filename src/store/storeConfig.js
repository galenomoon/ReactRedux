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
      default:
        return {
          min: 7,
          max: 31,
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
