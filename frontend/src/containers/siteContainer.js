import React, { Component } from 'react';
import BookingForm from '../components/BookingForm.js'

class siteContainer extends Component{

  constructor(props){
    super(props);
    this.state = {
      properties: [
        {
          name: "Rose Cottage",
          capacity: 4
        },
        {
          name: "Ivy Cottage",
          capacity: 5
        },
        {
          name: "Holly House",
          capacity: 10
        },
      ],
      filteredProperties: [];

    }
    this.criteria = null;

    this.handleBookingCriteriaSubmit = this.handleBookingCriteriaSubmit.bind(this);
    this.filteredProperties = this.filterProperties.bind(this);
  }

  filterProperties(){
    let selectedProperties = this.state.filteredProperties;
    selectedProperties = selectedProperties.filter((property) => {
      if (property.capacity >= this.criteria.capacity) {
        return property;
      }
    })
    this.setState({filteredProperties: selectedProperties});
  }


  handleBookingCriteriaSubmit(criteria){
    this.criteria = criteria;
    this.filterProperties;
  }



  render(){
    return (
      <BookingForm properties={this.handleBookingCriteriaSubmit} />
    )
  }

}

export default siteContainer;
