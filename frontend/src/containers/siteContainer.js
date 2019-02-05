import React, { Component, Fragment } from 'react';

import Request from '../helpers/Request.js'

import Home from '../components/Home.js';
import NavBar from '../components/NavBar.js';
import BookingForm from '../components/BookingForm.js';
import PropertiesList from '../components/PropertiesList.js';
import Bookings from '../components/Bookings.js';
import CustomerForm from '../components/CustomerForm.js';

import { BrowserRouter as Router, Route } from "react-router-dom";

class SiteContainer extends Component{

  constructor(props){
    super(props);
    this.state = {
      properties: [],
      filteredProperties: []

    }
    this.criteria = null;

    this.handleBookingCriteriaSubmit = this.handleBookingCriteriaSubmit.bind(this);
  }

  componentDidMount(){
    let request = new Request()
    request.get('/api/properties').then((data) => {
      this.setState({properties: data._embedded.properties})
    })
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
        window.location = '/customers'
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
                />
              }
            />

            <Route path="/customerform"
              render={() => <CustomerForm
                handleCustomerPost={this.handleCustomerPost}
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
