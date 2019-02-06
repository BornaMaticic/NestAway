import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const Booking = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className="booking">
      <Card>
        <CardContent>

          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Customer: {props.booking.customer.firstName} {props.booking.customer.lastName}
          </Typography>

          <Typography variant="h5" component="h2">
            {props.booking.property.address}
          </Typography>

          <Typography component="p">
            Check-in: {props.booking.startDate}
            <br/>
            End Date: {props.booking.endDate}
            <br/>
            Total Price: £{props.booking.totalPrice}
          </Typography>

          <Typography component="p">
            Capacity: {props.booking.property.capacity}
          </Typography>

          </CardContent>
      </Card>
    </div>

  )

}

export default withStyles(Booking)(SimpleCard);
