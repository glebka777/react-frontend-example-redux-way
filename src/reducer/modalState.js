import {CLOSE_MODAL, OPEN_MODAL} from "../action/modal";

const initialState = {
  isOpen: false,
  data: {}
};

export const modalState = (prevState = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        isOpen: true,
        data: action.data
      };
    case CLOSE_MODAL:
      return {
        isOpen: false,
        data: {}
      };
    default:
      return prevState;
  }
};