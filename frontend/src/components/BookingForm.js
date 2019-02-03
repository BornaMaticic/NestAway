import React, { Component, Fragment } from 'react';
import PropertyList from '../components/PropertyList.js';

class BookingForm extends Component {
  constructor(props){
    super(props);
    this.handleCriteriaSubmit = this.handleCriteriaSubmit.bind(this);
  }

  handleCriteriaSubmit(event){
    event.preventDefault()
    const criteria = {
      "customerName": event.target.customerName.value,
      "capacity": event.target.capacity.value,
    }
    this.props.onCriteriaSubmit(criteria);
  }


  render() {
    return (
      <Fragment>
      <form onSubmit={this.handleCriteriaSubmit}>
      <input type="text" placeholder="Customer name" name="customerName"/>
      <input type="text" placeholder="Capacity" name="capacity"/>

      <button type="submit">Save</button>
      </form>

      <PropertyList
      filteredProperties={this.props.filteredProperties}
      />
      </Fragment>
    )
  }


}

export default BookingForm;
