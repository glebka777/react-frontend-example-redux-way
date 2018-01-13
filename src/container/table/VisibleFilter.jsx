import {changeFilter} from "../../action/table";
import {connect} from "react-redux";
import ColFilter from "../../component/table/ColFilter";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    filter: (filterStr) => dispatch(changeFilter(ownProps.colId, filterStr)),
    clear: () => dispatch(changeFilter(ownProps.colId, ''))
  }
};

const VisibleFilter = connect(
  null,
  mapDispatchToProps
)(ColFilter);

export default VisibleFilter;