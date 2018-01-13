import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';


const rowsPerPageVars = [10, 25, 50, 100];

class RowsPerPageDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropDownOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((prevState) => {
      return {
        isDropDownOpen: !prevState.isDropDownOpen
      }
    });
  }

  render() {
    return (
      <Dropdown isOpen={this.state.isDropDownOpen} toggle={this.toggle}>
        <DropdownToggle color='primary' caret>
          {this.props.pageSize}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Rows per page</DropdownItem>
          {rowsPerPageVars.map((vr => (<DropdownItem onClick={() => this.props.change(vr)}>{vr}</DropdownItem>)))}
        </DropdownMenu>
      </Dropdown>
    )
  }
}

RowsPerPageDropDown.propTypes = {
  change: PropTypes.func.isRequired,
  pageSize: PropTypes.number.isRequired
};

export default RowsPerPageDropDown;