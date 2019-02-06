import React from 'react';


const CustomerSelector = (props) => {
  const options = props.customers.map((customer, index) => {
    return <option value={index} key={index}>{customer.firstName} {customer.lastName}</option>
  })

  function handleChange(event){
    props.handleCustomerSelect(event.target.value);
  }

  return(
    <select id="customer-selector" defaultValue="default" onChange={handleChange}>
      <option disabled value="default">Select customer</option>
      { options }
    </select>
  )

}

export default CustomerSelector;
