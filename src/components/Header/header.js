import React, { Component } from 'react';
import './header2.css';
import localization from '../../localization';

export default class Header extends Component {
  render(){
    let infoToggle = true;

    infoToggle ?
    <div >
      <div className='open-hour'>
        <p> {localization.open_hours.label}: <br/>{localization.open_hours.weekdays.weekdays} {localization.open_hours.weekdays.time_open} - {localization.open_hours.weekdays.time_close}
          <br/>
          {localization.open_hours.weekends.weekends} {localization.open_hours.weekends.time_open} - {localization.open_hours.weekends.time_close}</p>
      </div>
      <div className='phone-number'>
        <p>{localization.phone_number.label}: <br/>{localization.phone_number.phone_number}</p>
      </div>
    </div> : <div className='top-info'>LOGO</div>;
    return(
      <div className='top-info'>

      </div>


    )
  }
}
