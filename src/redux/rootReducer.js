import {combineReducers} from "redux";
import schedulerReducer from "./schedulerReducer";

export const rootReducer = combineReducers({
  scheduler: schedulerReducer
});
