import React from 'react';
import Property from './Property.js';

const FilteredPropertiesList = (props) => {

  const properties = props.filteredProperties.map(property => {
    return (
      <li key={property.id} className="property-list">
        <Property property={property} />
      </li>
    )
  })

  return (
    <ul>
      {properties}
    </ul>
  )
}

export default FilteredPropertiesList;
