import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Scheduler from "./scheduler";
import * as schedulerActions from "../redux/schedulerActions";
import {withRouter} from "react-router-dom";

const mapStateToProps = ({scheduler,modal}) => {
  return {
    appointments: scheduler.appointments,
    submittedTime: modal.submittedTime,
  };
};

const mapDispatchToProps = dispatch => ({
  setButtonClicked: bindActionCreators(schedulerActions.setButtonClicked, dispatch),
  setAppointment: bindActionCreators(schedulerActions.setAppointment, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Scheduler));
