import React from 'react';


const PropertyForm = (props) => {

  function preparePropertyToPost(event){
    event.preventDefault()
    const property = {
      "address": event.target.address.value,
      "capacity": event.target.capacity.value,
      "imageUrl": event.target.image_url.value,
      "name": event.target.name.value,
      "price": event.target.price.value,
      "rating": event.target.rating.value
    }
    props.handlePropertyPost(property)
    console.log(property);
  }

  return(
    <div className="form-container">

    <form onSubmit={preparePropertyToPost}>

      <label for="address">Property Address</label>
      <input type="text" placeholder="Address" name="address"/>

      <label for="capacity">Sleeps</label>
      <input type="text" placeholder="Capacity" name="capacity"/>

      <label for="image_url">Property Image</label>
      <input type="text" placeholder="Link to image" name="image_url"/>

      <label for="name">Property Label</label>
      <input type="text" placeholder="Name" name="name"/>

      <label for="price">Nightly Rate</label>
      <input type="text" placeholder="Nightly rate" name="price"/>

      <label for="rating">Property Review Rating</label>
      <input type="text" placeholder="Rating" name="rating"/>

      <button className="form-submit" type="submit">Save Nest</button>
    </form>

    </div>
  )
}

export default PropertyForm;
