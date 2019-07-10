import React from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';
import './_appointmentScheduler.scss'
import Modal from "../modal/modalContainer";


const AppointmentScheduler = ({setButtonClicked, buttonClicked, timeSlot, submittedTime, id,appointment}) => {
  const classes = classNames({
    'red-button': submittedTime === true,
    'regular-button': submittedTime === false
  });

  // let clazz = submittedTime ? `red-button-${id}` : `regular-button-${id}`

  return (
      <div className="appointment-scheduler">
        <button className={classes} onClick={() => setButtonClicked(buttonClicked, id)}>
          {timeSlot}
        </button>
        {appointment.buttonClicked && <Modal id={id} buttonClicked={appointment.buttonClicked} appointment={appointment}/>}

      </div>);
  };

AppointmentScheduler.propTypes = {
  setButtonClicked: PropTypes.func,
  buttonClicked: PropTypes.bool,
  timeSlot: PropTypes.string
};

export default AppointmentScheduler;
