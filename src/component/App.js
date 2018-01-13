import React, {Component} from 'react';
import '../style/App.css';

import {Col, Container, Row} from "reactstrap";

import Header from '../component/Header';
import SortingFilteringTableWithPagination from "../component/table/Table";
import VisiblePanel from "../container/VisiblePanel";

class App extends Component {
  render() {
    return (
      <Container>
        <Row style={{marginTop: 20}}>
          <Col>
            <Header/>
          </Col>
        </Row>
        <Row>
          <Col>
            <VisiblePanel/>
          </Col>
        </Row>
        <Row>
          <Col>
            <SortingFilteringTableWithPagination/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
