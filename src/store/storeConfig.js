import { createStore, combineReducers } from "redux";

const reducers = combineReducers({//Setting States
  numbers: function (state, action) {
    console.log(state, " ", action);
    return {
      min: 7,
      max: 31,
    };
  },
  name: function (state, action) {
    console.log(state, " ", action);
    return ["Lua", "Isa"];
  },
});

function storeConfig() {
  return createStore(reducers); //Creating State
}

export default storeConfig;
