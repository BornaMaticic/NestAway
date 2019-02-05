import React from 'react';

const CustomerSelector = (props) => {
  const options = props.customers.map((customer, index) => {
    return <option value={index} key={index}>{customer.firstName} {customer.lastName}</option>
  })

  return(
    <select id="customer-selector" defaultValue="default">
      <option disabled value="default">Select customer</option>
      { options }
    </select>
  )

}

export default CustomerSelector;
