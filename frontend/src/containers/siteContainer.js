import React, { Component } from 'react';
import BookingForm from '../components/BookingForm.js';
import NavBar from '../components/NavBar.js';
import PropertyList from '../components/PropertyList.js';

class siteContainer extends Component{

  constructor(props){
    super(props);
    this.state = {
      properties: [
        {
          id: 1,
          name: "Rose Cottage",
          capacity: 4,
          pricePerNight: 60.00
        },
        {
          id: 2,
          name: "Ivy Cottage",
          capacity: 5,
          pricePerNight: 75.00
        },
        {
          id: 3,
          name: "Holly House",
          capacity: 10,
          pricePerNight: 80.00
        }
      ],
      filteredProperties: []

    }
    this.criteria = null;

    this.handleBookingCriteriaSubmit = this.handleBookingCriteriaSubmit.bind(this);
  }


  handleBookingCriteriaSubmit(criteria){
    this.criteria = criteria;
    let selectedProperties = this.state.properties;
    selectedProperties = selectedProperties.filter(property =>
      property.capacity >= this.criteria.capacity);
    this.setState({filteredProperties: selectedProperties});
    console.log(this.state.filteredProperties);
  }



  render(){
    return (
      <>
      <NavBar/>
      <BookingForm
      filteredProperties={this.state.filteredProperties} onCriteriaSubmit={this.handleBookingCriteriaSubmit} />
      </>
    )
  }

  // <PropertyList properties = {this.state.properties}/>

}

export default siteContainer;
