import React, { Component } from 'react';

class BookingForm extends Component {
  constructor(props){
    super(props);
  }

  handleCriteriaSubmit(event){
    event.preventDefault()
    const criteria = {
      "customerName": event.target.customerName.value,
      "capacity": event.target.capacity.value,
    }
    this.props.properties(criteria);
  }


  render() {
    return (
      <form onSubmit={this.handleCriteriaSubmit}>
      <input type="text" placeholder="Customer name" name="customerName"/>
      <input type="text" placeholder="Capacity" name="capacity"/>

      <button type="submit">Save</button>
      </form>
    )
  }


}

export default BookingForm;
