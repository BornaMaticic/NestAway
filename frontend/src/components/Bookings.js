import React from 'react';

const Bookings = (props) => {
  console.log("customer", props.booking.customer);
  console.log("property", props.booking.property);

  // const { totalPrice, customer, property, startDate, endDate} = props.bookings


  return (
    <div className="booking">
      <p>Total Price: {props.booking.totalPrice}</p>
      <p>Customer: {props.booking.customer.firstName}{props.booking.customer.lastName}</p>
      <p>Property: {props.booking.property.name}{props.booking.property.address}{props.booking.property.capacity}</p>
      <p>Start Date: {props.booking.startDate} </p>
      <p>End Date: {props.booking.endDate} </p>
      </div>
  )

}

export default Bookings;
