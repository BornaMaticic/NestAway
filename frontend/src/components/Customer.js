import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Customer = (props) => {

  return (
    <div className="customer">
      <Card>
        <CardContent>
          <Typography>
            Name: {props.customer.firstName} {props.customer.lastName}
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small"
          href={`http://localhost:8080/api/customer/${props.customer.id}`}
          target="_blank">
          View details
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}


export default Customer;
