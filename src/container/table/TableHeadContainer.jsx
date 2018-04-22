import TableHead from "../../component/table/TableHead";
import {connect} from "react-redux";

const mapStateToProps = state => {
  return {
    columns: state.tableState.columns
  }
};

const TableHeadContainer = connect(mapStateToProps, null)(TableHead);

export default TableHeadContainer;