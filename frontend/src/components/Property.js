import React, { Component } from 'react';

class Property extends Component {
  render() {
    return (
      <div className="property">
        <h4>{this.props.propertyName}</h4>
        <p>{this.props.propertyCapacity}</p>
      </div>
    );
  }

}

export default Property;
