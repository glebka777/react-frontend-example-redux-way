import {changePage} from "../../action/table";
import TablePagination from "../../component/table/TablePagination";
import {connect} from "react-redux";

const mapStateToProps = state => {
  return {
    current: state.tableState.currentPage,
    pageCount: getPageCount(state.tableState.filteredData.length, state.tableState.pageSize)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    changePage: page => dispatch(changePage(page))
  }
};

const getPageCount = (dataSize, pageSize) => {
  let pageCount;
  if (dataSize <= pageSize)
    pageCount = 1;
  else {
    let even = ((dataSize % pageSize) === 0);
    pageCount = dataSize / pageSize;
    if (!even)
      pageCount += 1;
  }
  return Math.floor(pageCount);
};

const TablePaginationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TablePagination);

export default TablePaginationContainer;