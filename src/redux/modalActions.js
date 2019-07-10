import {
  SET_NAME,
  SET_TIME,
  SUBMIT_TIME,
  CANCEL_SELECTION
} from "./actionTypes";

export const submitTime = (time) => {
  return {type: SUBMIT_TIME, payload: !time};
};
export const cancelSelection = () => {
  return {type: CANCEL_SELECTION};
};




