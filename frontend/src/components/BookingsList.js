import React from 'react';
import Booking from './Booking.js';
import Grid from '@material-ui/core/Grid';

const BookingsList = (props) => {


  const bookings = props.bookings.map (booking => {

    return (
      <Grid item xs={16} sm={6} lg={4} xl={3}>
        <Booking booking={booking} />
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
