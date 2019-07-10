import {
  BUTTON_CLICKED,
  SET_APPOINTMENT, SET_NAME, SET_TIME,
} from "./actionTypes";
import _ from "lodash";

const initialState = {
  appointments:[]
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
    default:
      return state;
  }
}

