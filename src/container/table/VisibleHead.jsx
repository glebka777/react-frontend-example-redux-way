import TableHead from "../../component/table/TableHead";
import {connect} from "react-redux";

const mapStateToProps = state => {
  return {
    columns: state.tableState.columns
  }
};

const VisibleHead = connect(mapStateToProps, null)(TableHead);

export default VisibleHead;