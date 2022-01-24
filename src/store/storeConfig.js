import { createStore, combineReducers } from "redux";

import numbersReducer from "./reducers/numbersReducer";

const reducers = combineReducers({
  //Setting States
  numbers: numbersReducer,
});

function storeConfig() {
  return createStore(reducers); //Creating State
}

export default storeConfig;
