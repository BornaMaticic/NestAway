import React from 'react';
import Property from './Property.js';


const PropertyList = (props) => {
  console.log(props);

// edit what this renders when in use.
// site container needs to pass api data here. then map that data below to render properties

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

export default PropertyList;
