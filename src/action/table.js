export const CHANGE_PAGINATION = 'CHANGE PAGINATION';
export const CHANGE_PAGE = 'CHANGE PAGE';
export const CHANGE_SORT = 'CHANGE SORT';
export const CHANGE_FILTER = 'CHANGE FILTER';


export const changePagination = rowsPerPage => {
  return {
    type: CHANGE_PAGINATION,
    rowsPerPage
  }
};

export const changePage = page => {
  return {
    type: CHANGE_PAGE,
    page
  }
};

export const changeSort = (colId, dir) => {
  return {
    type: CHANGE_SORT,
    colId,
    dir
  }
};

export const changeFilter = (colId, filterStr) => {
  return {
    type: CHANGE_FILTER,
    colId,
    filterStr
  }
};