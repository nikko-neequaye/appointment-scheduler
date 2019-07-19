import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Scheduler from "./scheduler";
import * as schedulerActions from "../redux/schedulerActions";
import {withRouter} from "react-router-dom";

const mapStateToProps = ({scheduler}) => {
  return {
    appointments: scheduler.appointments
  };
};

const mapDispatchToProps = dispatch => ({
  setButtonClicked: bindActionCreators(schedulerActions.setButtonClicked, dispatch),
  setAppointment: bindActionCreators(schedulerActions.setAppointment, dispatch),
  submitTime: bindActionCreators(schedulerActions.submitTime, dispatch),
  cancelSelection: bindActionCreators(schedulerActions.cancelSelection, dispatch),
  setName: bindActionCreators(schedulerActions.setName, dispatch),
  setTime: bindActionCreators(schedulerActions.setTime, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Scheduler));
