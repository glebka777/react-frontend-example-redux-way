import React from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  Col,
  Container,
  Input,
  InputGroup,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row
} from 'reactstrap';

const DataInfo = (props) => {
  const data = props.data;
  return (
    <Modal isOpen={props.modal} toggle={props.close}>
      <ModalHeader toggle={props.onAction}>{data['firstName'] + " " + data['lastName']}</ModalHeader>
      <ModalBody>
        <Container>
          <Row>
            <Col>
              <Label>Description:</Label>
              <InputGroup>
                <Input type='textarea' disabled style={{height: 150}}>
                  {data['description']}
                </Input>
              </InputGroup>
            </Col>
          </Row>
          {data['address'] && (
            <div>
              <Row style={{marginTop: 10}}>
                <Col>
                  Address:
                </Col>
                <Col>
                  <b>{data['address'] && data['address']['streetAddress']}</b>
                </Col>
              </Row>
              <Row>
                <Col>
                  City:
                </Col>
                <Col>
                  <b>{data['address'] && data['address']['city']}</b>
                </Col>
              </Row>
              <Row>
                <Col>
                  State:
                </Col>
                <Col>
                  <b>{data['address'] && data['address']['state']}</b>
                </Col>
              </Row>
              <Row>
                <Col>
                  ZIP:
                </Col>
                <Col>
                  <b>{data['address'] && data['address']['zip']}</b>
                </Col>
              </Row>
            </div>
          )}
        </Container>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={props.close}>Close</Button>
      </ModalFooter>
    </Modal>
  );
};

DataInfo.propTypes = {
  close: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired
};

export default DataInfo;