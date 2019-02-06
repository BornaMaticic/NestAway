import React from 'react';
import Bookings from './Bookings.js';
import Grid from '@material-ui/core/Grid';

const BookingsList = (props) => {
  console.log("customer1", props.customer);
  console.log("property1", props.property);
  console.log(props);
  const bookings = props.bookings.map (booking => {
    return (
      <Grid item xs={16} sm={6} lg={4} xl={3}>
      
        <Bookings booking={booking} />
      </Grid>
    )
  })

  return (
  <Grid container spacing={16} style={{padding:16}}>
      {bookings}
    </Grid>
  )
}

export default BookingsList;
