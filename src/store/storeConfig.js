import { createStore, combineReducers } from "redux";

const reducers = combineReducers({//Setting States
  numbers: function (state, action) {
    console.log(state, " ", action);
    return {
      min: 1,
      max: 10,
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
