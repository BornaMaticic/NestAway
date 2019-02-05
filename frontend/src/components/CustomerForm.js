import React from 'react';

const CustomerForm = (props) => {

  function prepareCustomerToPost(event){
    event.preventDefault()
    const customer = {
      "firstName": event.target.firstName.value,
      "lastName": event.target.lastName.value
    }
    props.handleCustomerPost(customer)
  }

  return(
    <form onSubmit={prepareCustomerToPost}>
      <input type="text" placeholder="First Name" name="firstName"/>
      <input type="text" placeholder="Last Name" name="lastName"/>
      <button type="submit">Save Customer</button>
    </form>
  )
}

export default CustomerForm;
