import React from 'react';

import {Col, Container, Row, Table} from 'reactstrap';
import VisiblePagination from "../../container/table/TablePaginationContainer";
import VisibleDropDown from "../../container/table/RowsPerPageDropDownContainer";
import VisibleBody from "../../container/table/TableBodyContainer";
import VisibleHead from "../../container/table/TableHeadContainer";


const SortingFilteringTableWithPagination = () => {
  return (
    <Container style={{border: '2px solid gray', borderRadius: 10}}>
      <Row style={{marginTop: 15}}>
        <Col md={{size: 'auto'}}>
          <VisiblePagination/>
        </Col>
        <Col>
          <VisibleDropDown/>
        </Col>
      </Row>
      <Row>
        <Col md={{size: 12}}>
          <Table hover bordered style={{tableLayout: 'fixed'}}>
            <VisibleHead/>
            <VisibleBody/>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col md={{size: 'auto'}}>
          <VisiblePagination/>
        </Col>
        <Col>
          <VisibleDropDown/>
        </Col>
      </Row>
    </Container>
  );
};

export default SortingFilteringTableWithPagination;