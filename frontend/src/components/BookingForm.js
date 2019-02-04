import React, { Component, Fragment } from 'react';
import FilteredPropertyList from '../components/PropertyList.js';

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
      <input type="text" placeholder="Customer name" name="customerName"/>
      <input type="text" placeholder="Capacity" name="capacity"/>
      <input type="number" placeholder="Min price per night" name="minPricePerNight"/>
      <input type="number" placeholder="Max price per night" name="maxPricePerNight"/>

      <button type="submit">Save</button>
      </form>
      <FilteredPropertyList
      filteredProperties={this.props.filteredProperties}
      />

      </Fragment>
    )
  }




}

export default BookingForm;
