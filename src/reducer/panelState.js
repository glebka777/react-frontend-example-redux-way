import {CLEAR_DATA, RECEIVE_DATA, RECEIVE_DATA_ERROR, REQUEST_DATA} from '../action/panel';

const initialState = {
  isLoading: false,
  errorMessage: ''
};

export const panelState = (prevState = initialState, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        isLoading: true,
        errorMessage: ''
      };
    case RECEIVE_DATA:
      return {
        isLoading: false,
        errorMessage: ''
      };
    case RECEIVE_DATA_ERROR:
      return {
        isLoading: false,
        errorMessage: action.msg
      };
    case CLEAR_DATA:
      return {
        isLoading: false,
        errorMessage: ''
      };
    default:
      return prevState;
  }
};