import React, { Component } from 'react';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';

class CustomerForm extends Component {

  constructor(props){
    super(props);
    this.prepareCustomerToPost = this.prepareCustomerToPost.bind(this);
  }

  prepareCustomerToPost(event){
    event.preventDefault()
    console.log(event);
    const customer = {
      "firstName": event.target.firstName.value,
      "lastName": event.target.lastName.value
    }
    this.props.handleCustomerPost(customer)
  }

  render(){
    return(
      <div className="form-container">

      <form onSubmit={this.prepareCustomerToPost}>

        <label for="firstName">First Name</label>
        <input type="text" placeholder="First Name" name="firstName"/>

        <label for="lastName">Last Name</label>
        <input type="text" placeholder="Last Name" name="lastName"/>

        <button className="form-submit" type="submit">Save Customer</button>
      </form>

      </div>
    )
  }

}

export default CustomerForm;




// return(
//   <Fragment>
//     <Typography variant="h6" gutterBottom>
//     Add new customer
//     </Typography>
//
//     <Grid container spacing={24}>
//       <Grid item xs={12} sm={6}>
//         <TextField
//           required
//           id="firstName"
//           name="firstName"
//           label="First Name"
//           autoComplete="fname"
//         />
//       </Grid>
//
//       <Grid item xs={12} sm={6}>
//         <TextField
//           id="lastName"
//           name="lastName"
//           label="Last Name"
//         />
//       </Grid>
//     </Grid>
//
//   <Button
//     variant="contained"
//     color="primary"
//     onClick={this.prepareCustomerToPost}
//     name="submit"
//     label="Submit"
//     type="submit"
//     >Save</Button>
//   </Fragment>
// )
