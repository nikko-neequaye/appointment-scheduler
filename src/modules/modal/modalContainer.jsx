import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Modal from "./modal";
import * as modalActions from "../../redux/modalActions";
import * as schedulerActions from "../../redux/schedulerActions";

const mapStateToProps = ({modal}) => {
  return {
    name: modal.name,
    time: modal.time,
  };
};

const mapDispatchToProps = dispatch => ({
  setName: bindActionCreators(schedulerActions.setName, dispatch),
  setTime: bindActionCreators(schedulerActions.setTime, dispatch),
  submitTime: bindActionCreators(modalActions.submitTime, dispatch),
  cancelSelection: bindActionCreators(modalActions.cancelSelection, dispatch),
  setButtonClicked: bindActionCreators(schedulerActions.setButtonClicked, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
