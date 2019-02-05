import React, { Component, Fragment } from 'react';
import FilteredPropertiesList from '../components/FilteredPropertiesList.js';
import CustomerSelector from './CustomerSelector.js';

class BookingForm extends Component {
  constructor(props){
    super(props);
    this.handleCriteriaSubmit = this.handleCriteriaSubmit.bind(this);
    this.handleCustomerSelect = this.handleCustomerSelect.bind(this);
    this.handlePropertySelect = this.handlePropertySelect.bind(this);
    this.handleBooking = this.handleBooking.bind(this);
  }

  handleCriteriaSubmit(event){
    event.preventDefault()
    const criteria = {
      "capacity": event.target.capacity.value,
      "minPricePerNight": event.target.minPricePerNight,
      "maxPricePerNight": event.target.maxPricePerNight
    }
    this.props.onCriteriaSubmit(criteria);
    console.log(criteria);
  }

  handleCustomerSelect(index){
    this.props.setSelectedCustomer(index);
  }

  handlePropertySelect(index){
    this.props.setSelectedProperty(index);
  }


  handleBooking(){
    this.props.handleBookingPost();
  }


  render() {
    return (
      <Fragment>
      <form onSubmit={this.handleCriteriaSubmit}>
        <CustomerSelector
          customers={this.props.existingCustomers}
          handleCustomerSelect={this.handleCustomerSelect}
        />
        <input type="text" placeholder="Capacity" name="capacity" required/>
        <input type="number" placeholder="Min price per night" name="minPricePerNight" required/>
        <input type="number" placeholder="Max price per night" name="maxPricePerNight" required/>

        <button type="submit">Display available nests</button>
      </form>

      <FilteredPropertiesList
        filteredProperties={this.props.filteredProperties}
        handlePropertySelect={this.handlePropertySelect}
        handleBookingClick={this.handleBooking}
      />

      </Fragment>
    )
  }




}

export default BookingForm;
