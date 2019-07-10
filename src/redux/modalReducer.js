import {
  SET_NAME,
  SET_TIME,
  SUBMIT_TIME,
  CANCEL_SELECTION
} from "./actionTypes";
import _ from "lodash";

const initialState = {
  modalData: {displayModalNumber: 0, data: {}},
  submittedTime: false
};

export default function modalReducer(state = initialState, action) {
  let newState = {};
  switch (action.type) {
    case SUBMIT_TIME:
      newState = _.cloneDeep(state);
      newState.submittedTime = action.payload;
      return newState;
    case CANCEL_SELECTION:
      return initialState;
    default:
      return state;
  }
}

