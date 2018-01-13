import React from 'react';
import PropTypes from 'prop-types';

import DataInfo from "./DataInfo";


const TableBody = props => {
  const data = props.data;
  return (
    <tbody>
    {data.length === 0 ?
      <td style={{textAlign: 'center'}} colSpan='5'>No data found</td>
      : data.map((person) => (
        <tr onClick={() => props.open(person)}>
          <td>{person.id}</td>
          <td>{person['firstName']}</td>
          <td>{person['lastName']}</td>
          <td>{person['email']}</td>
          <td>{person['phone']}</td>
        </tr>
      ))}
    <DataInfo data={props.modalData} close={props.close} modal={props.modalIsOpen}/>
    </tbody>
  );
};

TableBody.propTypes = {
  data: PropTypes.array.isRequired,
  modalData: PropTypes.object.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  open: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired
};

export default TableBody;