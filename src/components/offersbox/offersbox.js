import React, { Component } from 'react';
import './offersbox.css';
export default class OffersBox extends Component {
  render(){
    return(
      <div className='offersbox box-shadow'>
        <div className='offersbox-text'>
          <p>{this.props.category}</p>
          <p>{this.props.price}</p>
        </div>
      </div>
    )
  }
}
