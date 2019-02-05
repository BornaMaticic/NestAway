import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NavBar extends Component {
  render(){
    return(
      <>
      <ul>

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/bookingform">Book A Nest</Link>
        </li>

        <li>
          <Link to="/bookings">Upcoming Bookings</Link>
        </li>

        <li>
          <Link to="/customerform">New Customer</Link>
        </li>

        <li>
          <Link to="/customers">Customers</Link>
        </li>

        <li>
          <Link to="/properties">Nests</Link>
        </li>

        <li>
          <Link to="/propertyform">New Nest</Link>
        </li>

      </ul>
      </>
    )
  }

}

export default NavBar;
