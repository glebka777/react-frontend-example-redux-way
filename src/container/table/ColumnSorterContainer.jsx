import {changeSort} from "../../action/table";
import {connect} from "react-redux";
import ColSorter from "../../component/table/ColumnSorter";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeDir: (newDir) => dispatch(changeSort(ownProps.colId, newDir))
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    dir: state.tableState.sort.colId === ownProps.colId ? state.tableState.sort.dir : ''
  }
};

const ColumnSorterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ColSorter);

export default ColumnSorterContainer;