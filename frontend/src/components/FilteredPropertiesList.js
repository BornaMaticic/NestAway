import React, {Component} from 'react';
import FilteredProperty from './FilteredProperty.js';

class FilteredPropertiesList extends Component{
  constructor(props){
    super(props);
    this.sendSelectedProperty = this.sendSelectedProperty.bind(this);
  }


  sendSelectedProperty(index){
    this.props.handlePropertySelect(index)
  }

  render(){
    const properties = this.props.filteredProperties.map(property => {
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
      <ul>
        {properties}
      </ul>
    )

  }
}


export default FilteredPropertiesList;
