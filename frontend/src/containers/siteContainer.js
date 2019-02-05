import React, { Component, Fragment } from 'react';

import Request from '../helpers/Request.js'

import Home from '../components/Home.js';
import NavBar from '../components/NavBar.js';
import BookingForm from '../components/BookingForm.js';
import PropertiesList from '../components/PropertiesList.js';
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
      customers: []

    }
    this.selectedCustomer = null;
    this.criteria = null;

    this.handleBookingCriteriaSubmit = this.handleBookingCriteriaSubmit.bind(this);
    this.setSelectedCustomer = this.setSelectedCustomer.bind(this);
  }

  componentDidMount(){
    let request = new Request()
    request.get('/api/properties').then((propertiesData) => {
      this.setState({properties: propertiesData._embedded.properties})
    });
    request.get('/api/customers').then((customersData) => {
      this.setState({customers: customersData._embedded.customers})
    })
    console.log("api component Mounted");
  }


  handleBookingCriteriaSubmit(criteria){
    this.criteria = criteria;
    let selectedProperties = this.state.properties;
    selectedProperties = selectedProperties.filter(property =>
      property.capacity >= this.criteria.capacity);
      this.setState({filteredProperties: selectedProperties});
      console.log(this.state.filteredProperties);
    }

  handleCustomerPost(customerInfo){
    const request = new Request();
    request.post('/api/customers', customerInfo).then(() => {
      window.location = '/bookingform'
    })
  }

  setSelectedCustomer(index){
    this.selectedCustomer = index;
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
