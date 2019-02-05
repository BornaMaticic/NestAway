import React from 'react';


const Customer = (props) => {

  const {id, firstName, lastName } = props.customer

  return (
    <div className="customer">
      <p>ID: {id} </p>
      <p>Customer: {firstName} {lastName}</p>
    </div>
  )
}


export default Customer;
