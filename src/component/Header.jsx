import React, {Component} from 'react';
import {Alert} from 'reactstrap';

class Header extends Component {
  render() {
    return (
      <div>
        <Alert color='secondary' style={{textAlign: 'center'}}>
          <h1>React datatable (reduxed)</h1>
        </Alert>
      </div>
    );
  }
}

export default Header;