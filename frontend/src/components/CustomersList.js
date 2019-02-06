import React from 'react';
import Customer from './Customer.js';


const CustomersList = (props) => {
  console.log(props);
  const customers = props.customers.map(customer => {
    return (

      <li key={customer.id} className="customer-list">
        <Customer customer={customer} />
      </li>
    )
  })

  return (
    <ul>
      {customers}
    </ul>
  )

}


export default CustomersList;
