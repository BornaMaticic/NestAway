import React from 'react';
import Bookings from './Bookings.js';

const BookingsList = (props) => {
  console.log("customer1", props.customer);
  console.log("property1", props.property);
  console.log(props);
  const bookings = props.bookings.map (booking => {
    return (
      <li key={booking.id} className="booking-list">
        <Bookings booking={booking} />
        </li>
    )
  })

  return (
    <ul>
      {bookings}
    </ul>
  )
}

export default BookingsList;
