import {CHANGE_FILTER, CHANGE_PAGE, CHANGE_PAGINATION, CHANGE_SORT} from "../action/table";
import {CLEAR_DATA, RECEIVE_DATA, RECEIVE_DATA_ERROR, REQUEST_DATA} from "../action/panel";

const defaultColumns = [
  'id',
  'firstName',
  'lastName',
  'email',
  'phone'
];

const initialState = {
  pageSize: 10,
  currentPage: 1,
  filters: {},
  sort: {dir: '', colId: ''},
  visibleData: [],
  filteredData: [],
  fullData: [],
  columns: defaultColumns
};

export const tableState = (prevState = initialState, action) => {
  switch (action.type) {
    case CHANGE_PAGINATION:
      return Object.assign(
        {},
        prevState,
        {pageSize: action.rowsPerPage},
        {currentPage: 1},
        {visibleData: getVisibleData(prevState.filteredData, 1, action.rowsPerPage)}
      );
    case CHANGE_SORT: {
      const filtered = getFilteredData(prevState.fullData, prevState.filters, prevState.columns, {
        dir: action.dir,
        colId: action.colId
      });
      const visible = getVisibleData(filtered, prevState.currentPage, prevState.pageSize);
      return Object.assign(
        {},
        prevState,
        {sort: {dir: action.dir, colId: action.colId}},
        {filteredData: filtered},
        {visibleData: visible}
      );
    }
    case CHANGE_FILTER: {
      const filters = prevState.filters;
      filters[action.colId] = action.filterStr;
      const filtered = getFilteredData(prevState.fullData, filters, prevState.columns, prevState.sort);
      const visible = getVisibleData(filtered, 1, prevState.pageSize);
      return Object.assign(
        {},
        prevState,
        {filters: filters},
        {currentPage: 1},
        {filteredData: filtered},
        {visibleData: visible}
      );
    }
    case CHANGE_PAGE:
      return Object.assign(
        {},
        prevState,
        {currentPage: action.page},
        {visibleData: getVisibleData(prevState.filteredData, action.page, prevState.pageSize)}
      );
    case REQUEST_DATA:
      return Object.assign(
        {},
        prevState,
        {fullData: []},
        {filteredData: []},
        {visibleData: []}
      );
    case RECEIVE_DATA: {
      const filtered = getFilteredData(action.data, prevState.filters, prevState.columns, prevState.sort);
      const visible = getVisibleData(filtered, prevState.currentPage, prevState.pageSize);
      return Object.assign(
        {},
        prevState,
        {fullData: action.data},
        {filteredData: filtered},
        {visibleData: visible}
      );
    }
    case RECEIVE_DATA_ERROR:
      return Object.assign(
        {},
        prevState,
        {fullData: []},
        {filteredData: []},
        {visibleData: []}
      );
    case CLEAR_DATA:
      return Object.assign(
        {},
        prevState,
        {fullData: []},
        {filteredData: []},
        {visibleData: []}
      );
    default:
      return prevState;
  }
};

const getFilteredData = (data, filters, columns, sort) => {
  return filterData(data, filters, columns, sort);
};

const getVisibleData = (filteredData, currentPage, pageSize) => {
  let start = (currentPage - 1) * pageSize;
  let end = start + pageSize;
  return filteredData.slice(start, end);
};

const sortFiltered = (filteredData, sort) => {
  let sortedData = filteredData.slice();
  let func;
  if (sort.dir === 'ASC')
    func = (a, b) => {
      if (typeof a[sort.colId] === 'number') {
        return a[sort.colId] - b[sort.colId];
      }
      else
        return a[sort.colId].toString().localeCompare(b[sort.colId].toString());
    };
  else if (sort.dir === 'DESC')
    func = (a, b) => {
      if (typeof a[sort.colId] === 'number')
        return b[sort.colId] - a[sort.colId];
      else
        return b[sort.colId].toString().localeCompare(a[sort.colId].toString())
    };
  else
    func = null;
  if (func !== null)
    sortedData = sortedData.sort(func);
  return sortedData;
};

const filterData = (data, filters, columns, sort) => {
  let filteredData = data.slice();
  columns.forEach(col => {
    const value = filters[col] === undefined ? '' : filters[col];
    if (value !== '')
      filteredData = filteredData.filter(data => data[col].toString().toLowerCase().includes(value.toLowerCase()));
  });
  return sortFiltered(filteredData, sort);
};