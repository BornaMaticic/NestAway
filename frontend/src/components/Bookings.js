import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Bookings = (props) => {
  console.log("customer", props.booking.customer);
  console.log("property", props.booking.property);

  // const { totalPrice, customer, property, startDate, endDate} = props.bookings


  return (
    <div className="booking">
    <Card>
    <CardContent>
    <Typography gutterBottom variant="headline" component="h2">
      Customer: {props.booking.customer.firstName}
        {props.booking.customer.lastName}
       <br/>
      Property:
      </Typography>
      <Typography component="p">
      <li>Name:
     {props.booking.property.name}</li><li>Address: {props.booking.property.address}</li><li>Capacity: {props.booking.property.capacity}</li>
     </Typography>
     <Typography gutterBottom variant="headline" component="h2">
      <p>Start Date: {props.booking.startDate} </p>
      <p>End Date: {props.booking.endDate} </p>
      Total Price: £{props.booking.totalPrice}

      </Typography>
      </CardContent>
      </Card>
      </div>
  )

}

export default Bookings;
