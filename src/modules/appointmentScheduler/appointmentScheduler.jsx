import React from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';
import './_appointmentScheduler.scss';
import Modal from "../modal/modal";


const AppointmentScheduler = ({setButtonClicked, id, appointment, submitTime, cancelSelection, setName, setTime}) => {
  const classes = classNames({
    'red-button': appointment.submittedTime === true,
    'regular-button': appointment.submittedTime === false
  });

  return (
      <div className="appointment-scheduler">
        <button className={classes} onClick={() => setButtonClicked(appointment.buttonClicked, id)}>
          {appointment.timeSlot}
        </button>
        {appointment.buttonClicked && <Modal id={id} buttonClicked={appointment.buttonClicked} appointment={appointment}
                                             submitTime={submitTime} cancelSelection={cancelSelection} setButtonClicked={setButtonClicked}
                                             setName={setName} setTime={setTime}/>}

      </div>);
  };

AppointmentScheduler.propTypes = {
  setButtonClicked: PropTypes.func,
  id: PropTypes.number,
  appointment: PropTypes.object,
  submitTime: PropTypes.func,
  cancelSelection: PropTypes.func,
  setName: PropTypes.func,
  setTime: PropTypes.func
};

export default AppointmentScheduler;
