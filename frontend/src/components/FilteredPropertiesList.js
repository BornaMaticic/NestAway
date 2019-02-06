import React, {Component, Fragment} from 'react';
import FilteredProperty from './FilteredProperty.js';
import Grid from '@material-ui/core/Grid';



class FilteredPropertiesList extends Component{
  constructor(props){
    super(props);
    this.sendSelectedProperty = this.sendSelectedProperty.bind(this);
    this.handleBookingConfirmationClick = this.handleBookingConfirmationClick.bind(this);
  }


  sendSelectedProperty(index){
    this.props.handlePropertySelect(index)
  }

  handleBookingConfirmationClick(event){
    event.preventDefault();
    this.props.handleBookingClick();
  }

  render(){
    const properties = this.props.filteredProperties.map(property => {
      return (
        <Grid item xs={16} sm={6} lg={4} xl={3}>
          <FilteredProperty
            property={property}
            propertyId={property.id}
            sendSelectedProperty={this.sendSelectedProperty}
          />
        </Grid>
      )
    })

    return (
      <Fragment>
        <form>
          <Grid container spacing={16} style={{padding:16}}>
            {properties}
          </Grid>
          <button type="submit" onClick={this.handleBookingConfirmationClick}>Confirm booking</button>
        </form>
      </Fragment>
    )

  }
}


export default FilteredPropertiesList;
