import {combineReducers} from "redux";
import schedulerReducer from "./schedulerReducer";
import modalReducer from "./modalReducer";

export const rootReducer = combineReducers({
  scheduler: schedulerReducer,
  modal: modalReducer,
});
