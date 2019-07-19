import React, {Component} from "react";

import AppointmentScheduler from "../modules/appointmentScheduler/appointmentScheduler";
import PropTypes from "prop-types";
import './_scheduler.scss';

export default class Scheduler extends Component {

  componentDidMount() {
    let slots = ["9am-10am", '10am-11am', "11am-12pm", '12pm-1pm', "1pm-2pm", '2pm-3pm', '3pm-4pm', '4pm-5pm'];
    slots.forEach((slot) => {
      this.props.setAppointment(slot);
    });
  }

    render() {
    const {setButtonClicked, appointments, submitTime, cancelSelection, setName, setTime} = this.props;
    let timeSlots = appointments.map((appointment, index) => {
      return(
      <AppointmentScheduler setButtonClicked={setButtonClicked}
                            timeSlot={appointment.timeSlot} submittedTime={appointment.submittedTime} key={index} id={index} appointment={appointment}
                            submitTime={submitTime} cancelSelection={cancelSelection} setName={setName} setTime={setTime}
                            />
      );
    });
    return (
      <div className="scheduler">
        <h1 className="header">Appointment Scheduler</h1>
        <div className="timeslots">{timeSlots}</div>
      </div>
    );

  }
}

Scheduler.propTypes = {
  setButtonClicked: PropTypes.func,
  submitTime: PropTypes.func,
  cancelSelection: PropTypes.func,
  setName: PropTypes.func,
  setTime: PropTypes.func,
  setAppointment: PropTypes.func,
  appointments: PropTypes.array
};

