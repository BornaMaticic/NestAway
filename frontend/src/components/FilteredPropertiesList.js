import React, {Component, Fragment} from 'react';
import FilteredProperty from './FilteredProperty.js';

class FilteredPropertiesList extends Component{
  constructor(props){
    super(props);
    this.sendSelectedProperty = this.sendSelectedProperty.bind(this);
    this.handleBookingConfirmationClick = this.handleBookingConfirmationClick.bind(this);
  }


  sendSelectedProperty(index){
    this.props.handlePropertySelect(index)
  }

  handleBookingConfirmationClick(){
    this.props.handleBookingClick();
  }

  render(){
    console.log(this.props.filteredProperties);
    const properties = this.props.filteredProperties.map(property => {
      console.log(property.id);
      return (
        <li key={property.id} className="property-list">
          <FilteredProperty
            property={property}
            propertyId={property.id}
            sendSelectedProperty={this.sendSelectedProperty}
          />
        </li>
      )
    })

    return (
      <Fragment>
        <ul>
          {properties}
        </ul>
        <button type="submit" onClick={this.handleBookingConfirmationClick}>Confirm booking</button>
      </Fragment>
    )

  }
}


export default FilteredPropertiesList;
