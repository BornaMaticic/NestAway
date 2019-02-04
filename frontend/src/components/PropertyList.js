import React from 'react';
import Property from './Property.js';


const PropertyList = (props) => {
  console.log(props);

  const properties = props.filteredProperties.map(property => {
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

export default PropertyList;
