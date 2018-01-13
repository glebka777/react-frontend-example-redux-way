import React from 'react';
import PropTypes from 'prop-types';

import svgLoader from '../style/img/svg-loader.svg';
import {Alert, Button, ButtonGroup, Col, Row} from 'reactstrap';

const ToolsPanel = (props) => {
  return (
    <Alert color='secondary'>
      <Row style={{alignItems: 'center'}}>
        <Col md={{size: 5}} style={{alignItems: 'left'}}>
          <ButtonGroup>
            <Button
              disabled={props.isLoading}
              color='secondary'
              onClick={() => props.load('huge')}
            >
              Load huge data
            </Button>
            <Button
              disabled={props.isLoading}
              color='secondary'
              onClick={() => props.load('big')}
            >
              Load big data
            </Button>
            <Button
              disabled={props.isLoading}
              color='secondary'
              onClick={() => props.load('small')}
            >
              Load small data
            </Button>
            <Button
              disabled={props.isLoading}
              color='secondary'
              onClick={props.clear}
            >
              Clear
            </Button>
          </ButtonGroup>
        </Col>
        <Col md={{size: 2}} style={{alignItems: 'center'}}>
          {props.isLoading ? (<img src={svgLoader} alt='Loading...'/>) : (<div/>)}
        </Col>
        <Col>
          <div>
            <Alert color='danger'
                   isOpen={props.errorMessage !== ''}
                   style={{lineHeight: '50%', textAlign: 'centerLeft', marginBottom: 0}}
            >
              {props.errorMessage}
            </Alert>
          </div>
        </Col>
      </Row>
    </Alert>

  );
};

ToolsPanel.propTypes = {
  load: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired
};

export default ToolsPanel;