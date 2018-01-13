import {loadBig, loadHuge, loadSmall} from "../api/api";

export const REQUEST_DATA = 'REQUEST DATA';
export const RECEIVE_DATA = 'RECEIVE DATA';
export const RECEIVE_DATA_ERROR = 'RECEIVE DATA ERROR';
export const CLEAR_DATA = 'CLEAR DATA';

export const requestData = dataType => {
  return {
    type: REQUEST_DATA,
    dataType
  }
};

export const receiveData = data => {
  return {
    type: RECEIVE_DATA,
    data
  }
};

export const receiveDataError = msg => {
  return {
    type: RECEIVE_DATA_ERROR,
    msg
  }
};

export const clearData = () => {
  return {
    type: CLEAR_DATA
  }
};

export const fetchData = dataType => {
  return dispatch => {
    dispatch(requestData(dataType));
    let func;
    switch (dataType) {
      case 'small':
        func = loadSmall;
        break;
      case 'big':
        func = loadBig;
        break;
      case 'huge':
        func = loadHuge;
        break;
      default:
        func = loadSmall;
        break;
    }
    return func(data => dispatch(receiveData(data)), msg => dispatch(receiveDataError(msg)))
  }
};