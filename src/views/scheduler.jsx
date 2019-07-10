import React, {Component} from "react";

import AppointmentScheduler from "../modules/appointmentScheduler/appointmentScheduler";
import PropTypes from "prop-types";
import './_scheduler.scss'

export default class Scheduler extends Component {

  componentDidMount() {
    let slots = ["9am-10am",'10am-11am',"11am-12pm",'12pm-1pm',"1pm-2pm",'2pm-3pm','3pm-4pm','4pm-5pm'];
    slots.forEach((slot) => {
      this.props.setAppointment(slot);
    });
  }

    render() {
    const {setButtonClicked, submittedTime,appointments} = this.props;
    let timeSlots = appointments.map((appointment, index) => {
      return(
      <AppointmentScheduler setButtonClicked={setButtonClicked} buttonClicked={appointment.buttonClicked}
                            timeSlot={appointment.timeSlot} submittedTime={submittedTime} key={index} id={index} appointment={appointment}
                            />
      )
    })
    return (
      <div className="scheduler">
        <h1 className="header">Appointment Scheduler</h1>
        <div className="timeslots">{timeSlots}</div>
        }
      </div>
    );

  }
}

Scheduler.propTypes = {
  setButtonClicked: PropTypes.func,
  buttonClicked: PropTypes.bool,
  submittedTime: PropTypes.bool
};

