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
          <Link to="/bookingform">Book A Property</Link>
        </li>

        <li>
          <Link to="/bookings">View All Upcoming Bookings</Link>
        </li>

        <li>
          <Link to="/properties">View All Properties</Link>
        </li>

      </ul>
      </>
    )
  }

}

export default NavBar;
