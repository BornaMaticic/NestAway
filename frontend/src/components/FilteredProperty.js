import React from 'react';


const FilteredProperty = (props) => {

  const {name, capacity } = props.property

  function onSelect(event){
    props.sendSelectedProperty(event.target.value)
    console.log(event.target.value);
  }

  return (
    <div className="property">
      <h2>{name}</h2>
      <p>Capacity: {capacity}</p>
      <button type="button" value={props.propertyId} onClick={onSelect}>Select nest</button>
    </div>
  )
}


export default FilteredProperty;
