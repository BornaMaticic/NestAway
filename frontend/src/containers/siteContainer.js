import React, { Component, Fragment } from 'react';

import Request from '../helpers/Request.js'

import Home from '../components/Home.js';
import NavBar from '../components/NavBar.js';
import BookingForm from '../components/BookingForm.js';
import PropertiesList from '../components/PropertiesList.js';
import PropertyForm from '../components/PropertyForm.js';
import Bookings from '../components/Bookings.js';
import CustomerForm from '../components/CustomerForm.js';
import CustomersList from '../components/CustomersList.js';

import { BrowserRouter as Router, Route } from "react-router-dom";

class SiteContainer extends Component{

  constructor(props){
    super(props);
    this.state = {
      properties: [],
      filteredProperties: [],
      customers: [],
      selectedCustomer: null,
      selectedProperty: null

    }
    // this.selectedCustomer = null;
    this.criteria = null;
    // this.selectedProperty = null;
    this.bookingInfo = null;

    this.handleBookingCriteriaSubmit = this.handleBookingCriteriaSubmit.bind(this);
    this.setSelectedCustomer = this.setSelectedCustomer.bind(this);
    this.setSelectedProperty = this.setSelectedProperty.bind(this);
    this.handleBookingPost = this.handleBookingPost.bind(this);
  }

  componentDidMount(){
    let request = new Request()
    request.get('/api/properties').then((propertiesData) => {
      this.setState({properties: propertiesData._embedded.properties})
    });
    request.get('/api/customers').then((customersData) => {
      this.setState({customers: customersData._embedded.customers})
      console.log(this.state.customers);
    })

  }


  handleBookingCriteriaSubmit(criteria){
    this.criteria = criteria;
    let selectedProperties = this.state.properties;
    selectedProperties = selectedProperties.filter(property =>
      property.capacity >= this.criteria.capacity);
      this.setState({filteredProperties: selectedProperties});
    }

  handleCustomerPost(customerInfo){
    const request = new Request();
    request.post('/api/customers', customerInfo).then(() => {
      window.location = '/bookingform'
    })
  }

  handlePropertyPost(propertyInfo){
    const request = new Request();
    request.post('/api/properties', propertyInfo).then(() => {
      window.location = '/properties'
    })
  }

  setSelectedCustomer(index){
    console.log(index);
    let newSelectedCustomer = this.state.selectedCustomer;
    newSelectedCustomer = this.state.customers[index].id
    this.setState({selectedCustomer: newSelectedCustomer});
    // this.selectedCustomer = index;
    // console.log(this.selectedCustomer);
  }

  setSelectedProperty(propertyId){
    console.log(propertyId);
    let newSelectedProperty = this.state.selectedProperty;
    newSelectedProperty = propertyId
    this.setState({selectedProperty: newSelectedProperty})
    // this.selectedProperty = index;
    // console.log(this.selectedProperty);
  }

  handleBookingPost(){
    console.log(this.selectedCustomer);
    console.log(this.selectedProperty);
    console.log(this.bookingInfo);

    const confirmedBooking = {
      "customer_id": this.state.selectedCustomer,
      "property_id": this.state.selectedProperty
      // TODO add the remaining booking criteria - ie dates
    }
    const request = new Request();
    request.post('/api/bookings', confirmedBooking).then(() => {
      window.location = '/bookings'
    })
  }

  render(){
    return (
      <Router>
      <Fragment>
      <NavBar/>

      <Route exact path="/" component={Home} />

      <Route path="/bookingform"
        render={() => <BookingForm
          filteredProperties={this.state.filteredProperties} onCriteriaSubmit={this.handleBookingCriteriaSubmit}
          existingCustomers={this.state.customers}
          setSelectedCustomer={this.setSelectedCustomer}
          setSelectedProperty={this.setSelectedProperty}
          handleBookingPost={this.handleBookingPost}
          selectedCustomer={this.state.selectedCustomer}
          selectedProperty={this.state.selectedProperty}
        />
      }
      />

      <Route path="/customerform"
        render={() => <CustomerForm
          handleCustomerPost={this.handleCustomerPost}
        />
      }
      />

      <Route path="/customers"
        render={() => <CustomersList
          customers={this.state.customers}
        />
      }
      />

      <Route path="/propertyform"
        render={() => <PropertyForm handlePropertyPost={this.handlePropertyPost}
        />
      }
      />

      <Route path="/properties"
        render={() => <PropertiesList
          properties={this.state.properties}
        />
      }
      />

      <Route path="/bookings" component={Bookings} />

      </Fragment>
      </Router>
    )
  }


}

  export default SiteContainer;
