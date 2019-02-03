import React, { Component } from 'react';
import BookingForm from '../components/BookingForm.js'

class siteContainer extends Component{

  constructor(props){
    super(props);
    this.state = {
      properties: [
        {
          id: 1,
          name: "Rose Cottage",
          capacity: 4
        },
        {
          id: 2,
          name: "Ivy Cottage",
          capacity: 5
        },
        {
          id: 3,
          name: "Holly House",
          capacity: 10
        }
      ],
      filteredProperties: []

    }
    this.criteria = null;

    this.handleBookingCriteriaSubmit = this.handleBookingCriteriaSubmit.bind(this);
  }


  handleBookingCriteriaSubmit(criteria){
    this.criteria = criteria;
    // this.filterProperties;
    let selectedProperties = this.state.properties;
    selectedProperties = selectedProperties.filter(property =>
      property.capacity >= this.criteria.capacity);
    this.setState({filteredProperties: selectedProperties});
    console.log(this.state.filteredProperties);
  }



  render(){
    return (
      <BookingForm
      filteredProperties={this.state.filteredProperties} onCriteriaSubmit={this.handleBookingCriteriaSubmit}
      />
    )
  }

}

export default siteContainer;
