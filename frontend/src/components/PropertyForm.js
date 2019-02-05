import React from 'react';

const PropertyForm = (props) => {

  function preparePropertyToPost(event){
    event.preventDefault()
    const property = {
      "address": event.target.address.value,
      "capacity": event.target.capacity.value,
      "image_url": event.target.image_url.value,
      "name": event.target.name.value,
      "price": event.target.price.value,
      "rating": event.target.rating.value
    }
    props.handlePropertyPost(property)
    console.log(property);
  }

  return(
    <form onSubmit={preparePropertyToPost}>
      <input type="text" placeholder="Address" name="address"/>
      <input type="text" placeholder="Capacity" name="capacity"/>
      <input type="text" placeholder="Link to image" name="image_url"/>
      <input type="text" placeholder="Name" name="name"/>
      <input type="text" placeholder="Nightly rate" name="price"/>
      <input type="text" placeholder="Rating" name="rating"/>
      <button type="submit">Save Nest</button>
    </form>
  )
}

export default PropertyForm;
