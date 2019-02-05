import React, { Component, Fragment } from 'react';
import FilteredPropertiesList from '../components/FilteredPropertiesList.js';
import CustomerSelector from './CustomerSelector.js';

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
      "minPricePerNight": event.target.minPricePerNight,
      "maxPricePerNight": event.target.maxPricePerNight
    }
    this.props.onCriteriaSubmit(criteria);
  }


  render() {
    return (
      <Fragment>
      <form onSubmit={this.handleCriteriaSubmit}>
      <CustomerSelector customers={this.props.existingCustomers} />
      <input type="text" placeholder="Customer name" name="customerName" required/>
      <input type="text" placeholder="Capacity" name="capacity" required/>
      <input type="number" placeholder="Min price per night" name="minPricePerNight" required/>
      <input type="number" placeholder="Max price per night" name="maxPricePerNight" required/>

      <button type="submit">Save</button>
      </form>

      <FilteredPropertiesList filteredProperties={this.props.filteredProperties} />

      </Fragment>
    )
  }




}

export default BookingForm;
