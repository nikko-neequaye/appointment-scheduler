import {
  SET_APPOINTMENT,
  BUTTON_CLICKED, SET_TIME, SET_NAME
} from "./actionTypes";


export const setAppointment = (timeSlot) => {
  let appointment = {
    timeSlot: timeSlot,
    submittedTime: false,
    buttonClicked: false
  };
  return {type: SET_APPOINTMENT, payload: appointment};
};

export const setButtonClicked = (buttonClicked, id) => {
  return {type: BUTTON_CLICKED, payload: !buttonClicked, id: id};
};

export const setTime = (time, id) => {
  return {type: SET_TIME, payload: time, id: id};
};

export const setName = (name, id) => {
  return {type: SET_NAME, payload: name, id: id};
};


