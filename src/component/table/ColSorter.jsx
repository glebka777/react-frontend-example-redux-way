import React from 'react';
import PropTypes from 'prop-types';

import {Button} from "reactstrap";
import {MdKeyboardArrowDown, MdKeyboardArrowUp, MdUnfoldMore} from "react-icons/lib/md/index";


const getNewDir = dir => {
  let newDir;
  switch (dir) {
    case '': {
      newDir = 'ASC';
      break;
    }
    case 'ASC': {
      newDir = 'DESC';
      break;
    }
    default:
    case 'DESC': {
      newDir = '';
      break;
    }
  }
  return newDir;
};

const ColSorter = ({dir, changeDir}) => {
  let button;
  switch (dir) {
    case 'ASC': {
      button = (
        <Button color='primary' size='xs' onClick={() => changeDir(getNewDir(dir))}>
          <MdKeyboardArrowUp/>
        </Button>
      );
      break;
    }
    case 'DESC': {
      button = (
        <Button color='primary' size='xs' onClick={() => changeDir(getNewDir(dir))}>
          <MdKeyboardArrowDown/>
        </Button>
      );
      break;
    }
    default: {
      button = (
        <Button color='secondary' size='xs' onClick={() => changeDir(getNewDir(dir))}>
          <MdUnfoldMore/>
        </Button>
      );
      break;
    }
  }
  return (
    <div>
      {button}
    </div>
  );
};

ColSorter.propTypes = {
  changeDir: PropTypes.func.isRequired,
  dir: PropTypes.string.isRequired
};

export default ColSorter;
