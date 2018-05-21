import React, { Component } from 'react';
import './firstpage.css';
import brandLogo from '../icons/dbs.svg';
export default class Firstpage extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className='firstpage' id='first'>
        <div className='container'>
          <div className='box'>
              <img src={brandLogo} className='brand'/>
          </div>
          <div className='commerce-container'>
            <img src="../images/lahega.png" alt="Clemondo" className='lahega-logo' style={{backgroundColor:'transparent'}}/>
            <img src="../images/clemondo.png" alt="Clemondo" className='clemondo-logo' style={{backgroundColor:'transparent'}}/>
          </div>
          <div className='price-container'>
            <div className='price-container-flexbox'>

            </div>
          </div>
        </div>
      </div>
    )
  }
}
