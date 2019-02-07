import React, { Component } from 'react';
import Customer from './Customer.js';
import Grid from '@material-ui/core/Grid';


class CustomersList extends Component {

  render(){
  const customers = this.props.customers.map(customer => {
    return (
        <Grid item xs={16} sm={6} lg={4} xl={3}>
          <Customer customer={customer} />
        </Grid>
        )
      })

    return (
      <Grid container spacing={16}    style={{padding:16}}>
        {customers}
      </Grid>
    )
  }

}


export default CustomersList;
