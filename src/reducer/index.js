import {combineReducers} from "redux";
import {panelState} from "./panelState";
import {tableState} from "./tableState";
import {modalState} from "./modalState";

const rootReducer = combineReducers({panelState, tableState, modalState});

export default rootReducer;