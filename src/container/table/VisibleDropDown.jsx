import {changePagination} from "../../action/table";
import {connect} from "react-redux";
import RowsPerPageDropDown from "../../component/table/RowsPerPageDropDown";

const mapDispatchToProps = dispatch => {
  return {
    change: (pageSize) => dispatch(changePagination(pageSize))
  }
};

const mapStateToProps = state => {
  return {
    pageSize: state.tableState.pageSize
  }
};

const VisibleDropDown = connect(
  mapStateToProps,
  mapDispatchToProps
)(RowsPerPageDropDown);

export default VisibleDropDown;