
import React, {Component} from 'react';
import './_modal.scss'
import PropTypes from 'prop-types';


class Modal extends Component{

  handleChange = (event) => {
    this.props.setName(event.target.value,this.props.id);
  };
  handleChange2 = event => {
    this.props.setTime(event.target.value, this.props.id);
  };
  cancelSelection = () => {
    this.props.cancelSelection();
    this.props.setButtonClicked(this.props.buttonClicked, this.props.id);
  };
  submitTime = () => {
    this.props.submitTime(this.props.submittedTime);
    this.props.setButtonClicked(this.props.buttonClicked,this.props.id);
  };

  render(){
    const { buttonClicked, appointment} = this.props;
    return (
      <div className="centered-modal">

        <div>
          <div className="modal-header">
            <h3>Select Appointment Times</h3>
          </div>

            <input
              id="text-input-name"
              placeholder={"Enter Name"}
              type="text"
              onChange={this.handleChange}
              value={appointment.name}
            />
            <input
              id="text-input-name"
              placeholder={"Enter Time"}
              type="text"
              onChange={this.handleChange2}
              value={appointment.time}
            />
          <button onClick={() => this.submitTime(buttonClicked)}> Submit</button>
          <button onClick={() => this.cancelSelection()}> Cancel</button>


        </div>
      </div>
    );
  }


}

Modal.propTypes = {
  setName: PropTypes.func,
  setTime: PropTypes.func,
  setButtonClicked: PropTypes.func,
  name: PropTypes.string,
  time: PropTypes.string
};

export default Modal;
