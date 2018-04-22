import {changeFilter} from "../../action/table";
import {connect} from "react-redux";
import ColFilter from "../../component/table/ColumnFilter";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    filter: (filterStr) => dispatch(changeFilter(ownProps.colId, filterStr)),
    clear: () => dispatch(changeFilter(ownProps.colId, ''))
  }
};

const ColumnFilterContainer = connect(
  null,
  mapDispatchToProps
)(ColFilter);

export default ColumnFilterContainer;