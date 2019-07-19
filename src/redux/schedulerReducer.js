import {
  BUTTON_CLICKED, CANCEL_SELECTION,
  SET_APPOINTMENT, SET_NAME, SET_TIME, SUBMIT_TIME
} from "./actionTypes";
import _ from "lodash";

const initialState = {
  appointments: []
};

export default function schedulerReducer(state = initialState, action) {
  let newState = {};
  switch (action.type) {
    case BUTTON_CLICKED:
      newState = _.cloneDeep(state);
      newState.appointments[action.id].buttonClicked = action.payload;
      return newState;
    case SET_APPOINTMENT:
      newState = _.cloneDeep(state);
      newState.appointments.push(action.payload);
      return newState;
    case SET_NAME:
      newState = _.cloneDeep(state);
      newState.appointments[action.id].name = action.payload;
      return newState;
    case SET_TIME:
      newState = _.cloneDeep(state);
      newState.appointments[action.id].time = action.payload;
      return newState;
    case SUBMIT_TIME:
      newState = _.cloneDeep(state);
      newState.appointments[action.id].submittedTime = action.payload;
      return newState;
    case CANCEL_SELECTION:
      newState = _.cloneDeep(state);
      newState.appointments[action.id].submittedTime = false;
      newState.appointments[action.id].buttonClicked = false;
      newState.appointments[action.id].name = "";
      newState.appointments[action.id].time = "";
      return newState;
    default:
      return state;
  }
}

