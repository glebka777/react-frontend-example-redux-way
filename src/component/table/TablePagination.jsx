import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';


const MAX_PAGE_COUNT_FOR_VIEW = 7;

const paginationLinkStyle = {width: 55, textAlign: 'center'};

class TablePagination extends Component {
  handlePage(page) {
    const pageCount = this.props.pageCount;
    if (page > pageCount || page <= 0) return;
    this.props.changePage(page);
  }

  getPaginationItem(page, currentPage) {
    return (<PaginationItem className={page === currentPage ? 'active' : ''}>
      <PaginationLink style={paginationLinkStyle}
                      onClick={() => this.handlePage(page)}>
        {page}
      </PaginationLink>
    </PaginationItem>);
  }

  render() {
    const pageCount = this.props.pageCount;
    const current = this.props.current;
    let pages = [];
    if (pageCount < MAX_PAGE_COUNT_FOR_VIEW) {
      for (let i = 1; i <= pageCount; i++) {
        pages.push(
          this.getPaginationItem(i, current)
        )
      }
    } else {
      if (current <= 3) {
        for (let i = 1; i <= 5; i++) {
          pages.push(
            this.getPaginationItem(i, current)
          )
        }
      } else if (current >= (pageCount - 2)) {
        for (let i = (pageCount - 4); i <= pageCount; i++) {
          pages.push(
            this.getPaginationItem(i, current)
          )
        }
      } else {
        for (let i = current - 2; i <= current + 2; i++) {
          if (i <= 0 || i > pageCount) continue;
          pages.push(
            this.getPaginationItem(i, current)
          )
        }
      }
    }

    return (
      <Pagination>
        <PaginationLink style={paginationLinkStyle} onClick={() => this.handlePage(1)}>
          ««
        </PaginationLink>
        <PaginationItem>
          <PaginationLink style={paginationLinkStyle} previous onClick={() => this.handlePage(current - 1)}/>
        </PaginationItem>
        {pages}
        <PaginationItem>
          <PaginationLink style={paginationLinkStyle} next onClick={() => this.handlePage(current + 1)}/>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink style={paginationLinkStyle} onClick={() => this.handlePage(pageCount)}>
            »»
          </PaginationLink>
        </PaginationItem>
      </Pagination>
    )
  }

}

TablePagination.propTypes = {
  current: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired
};

export default TablePagination;