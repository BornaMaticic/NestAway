import React from 'react';


const Customer = (props) => {
  console.log(props);
  const { firstName, lastName } = props.customer

  return (
    <div className="customer">
      <p>Customer: {firstName} {lastName}</p>
    </div>
  )
}


export default Customer;
