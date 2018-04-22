import {clearData, fetchData} from "../action/panel";
import {connect} from "react-redux";
import ToolsPanel from "../component/ToolsPanel";

const mapStateToProps = state => {
  return {
    isLoading: state.panelState.isLoading,
    errorMessage: state.panelState.errorMessage
  }
};

const mapDispatchToProps = dispatch => {
  return {
    load: dataType => dispatch(fetchData(dataType)),
    clear: () => dispatch(clearData())
  }
};

const ToolsPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolsPanel);

export default ToolsPanelContainer;