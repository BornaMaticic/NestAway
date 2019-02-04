import React, { Component } from 'react';

class NavBar extends Component {
  render(){
    return(
      <>
      <ul>
        <li>
        <a>Home</a>
        </li>

        <li>
        <a>Book A Customer</a>
        </li>
        
        <li>
        <a>View All Bookings</a>
        </li>
      </ul>
      </>
    )
  }

}

export default NavBar;
