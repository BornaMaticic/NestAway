import React from 'react';


const Property = (props) => {

  const {name, capacity } = props.property
  
  return (
    <div className="component">
      <h2>{name}</h2>
      <p>Capacity: {capacity}</p>
    </div>
  )
}


export default Property;
