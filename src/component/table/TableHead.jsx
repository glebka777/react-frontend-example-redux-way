import React from "react";
import PropTypes from 'prop-types';

import {Col, Container, Row} from "reactstrap";
import VisibleFilter from "../../container/table/ColumnFilterContainer";
import VisibleSorter from "../../container/table/ColumnSorterContainer";


const TableHead = props => {
  return (
    <thead>
    <tr style={{textAlign: 'center'}}>
      {props.columns.map((column) => (
        <th>{column}</th>
      ))}
    </tr>
    <tr>
      {props.columns.map((column) => (
        <th>
          <Container>
            <Row noGutters>
              <Col md={{size: 9}}>
                <VisibleFilter colId={column}/>
              </Col>
              <Col/>
              <Col md={{size: 1}} style={{marginRight: 10}}>
                <VisibleSorter colId={column}/>
              </Col>
            </Row>
          </Container>
        </th>
      ))}
    </tr>
    </thead>
  )
};

TableHead.propTypes = {
  columns: PropTypes.array.isRequired,
};

TableHead.defaultProps = {
  columns: []
};

export default TableHead;