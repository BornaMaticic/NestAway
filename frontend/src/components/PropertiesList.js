import React from 'react';
import Property from './Property.js';

const PropertiesList = (props) => {
  
  const properties = props.properties.map(property => {
    return (
      <li key={property.id} className="component-item">
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


export default PropertiesList;
