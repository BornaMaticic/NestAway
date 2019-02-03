import React, { Component } from 'react';
import Property from './Property'

class PropertyList extends Component {

  render() {
     const propertyNodes = this.props.properties.map(property => {
       return (
         <Property
         propertyName={property.name}
         propertyCapacity={property.capacity}
         key={property.id}>
         </Property>
       );
     });

     return (
       <div className="property-list">
         {propertyNodes}
       </div>
     )
   }

};

export default PropertyList;
