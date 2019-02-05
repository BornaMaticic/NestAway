import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class CustomerForm extends Component {

  prepareCustomerToPost(event){
    event.preventDefault()
    const customer = {
      "firstName": event.target.firstName.value,
      "lastName": event.target.lastName.value
    }
    this.props.handleCustomerPost(customer)
  }

  render(){
    return(
      <Fragment>
        <Typography variant="h6" gutterBottom>
        Add new customer
        </Typography>

        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstname"
              name="firstName"
              label="First Name"
              autoComplete="fname"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="lastName"
              name="lastName"
              label="Last Name"
            />
          </Grid>
        </Grid>

      <Button
        variant="contained"
        color="primary"
        onClick={this.prepareCustomerToPost}
        name="submit"
        label="Submit"
        type="submit"
        >Save</Button>
      </Fragment>
    )
  }

}

export default CustomerForm;

// return(
//   <form onSubmit={prepareCustomerToPost}>
//     <input type="text" placeholder="First Name" name="firstName"/>
//     <input type="text" placeholder="Last Name" name="lastName"/>
//     <button type="submit">Save Customer</button>
//   </form>
// )
