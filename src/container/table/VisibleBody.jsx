import {closeModal, openModal} from "../../action/modal";
import {connect} from "react-redux";
import TableBody from "../../component/table/TableBody";

const mapStateToProps = state => {
  return {
    data: state.tableState.visibleData,
    modalData: state.modalState.data,
    modalIsOpen: state.modalState.isOpen
  }
};

const mapDispatchToProps = dispatch => {
  return {
    open: data => dispatch(openModal(data)),
    close: () => dispatch(closeModal())
  }
};

const VisibleBody = connect(
  mapStateToProps,
  mapDispatchToProps
)(TableBody);

export default VisibleBody;