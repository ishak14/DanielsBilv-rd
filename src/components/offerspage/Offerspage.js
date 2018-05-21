import React, { Component } from 'react';
import './Offerspage.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DialogAlert from '../popup/popup.js';
import localization from '../../localization';
export default class Offerspage extends Component {
  constructor(props){
    super(props)
  }
  render(){

    return (<section className='offers' id='offers'>
    <div className='background'/>
      <div className='container'>
        <div className='offers-title'>
          <h2>{localization.pages.offerspage}</h2>
          <h3>{localization.offerspage.subtitle}</h3>
        </div>
        <div className='offersbox-flex-container'>
          <MuiThemeProvider>
            <DialogAlert
              label='Handtvätt utv.'
              price='159kr'
              text='ei per, graeci probatus eleifend et has, vix labores similique et. Id usu eius tibique liberavisse. Tritani definitionem mediocritatem ne est, nominavi voluptua senserit duo ex.Lorem ipsum dolor sit amet, ex alterum expetenda consequat eam, sea an vocibus sadipscing. Omnium evertitur et pro. Ut mea rebum harum. In congue scriptorem eum. An vix feugait imperdiet pertinacia, nec te omnis omittantur.
              Sed id liber alterum. Fierent ullamcorper ei per, graeci probatus eleifend et has, vix labores similique et. Id usuus tibique liberavisse. Tritani definitionem mediocritatem ne est, nominavi voluptua senserit duo ex.
              '
            />
            <DialogAlert
              label='Invändig tvätt'
              price='159kr'
            />
            <DialogAlert
              label='Ut och in tvätt'
              price='fr 299kr'
            />
            <DialogAlert
              label='Supertvätt'
              price='399kr'
            />
            <DialogAlert
              label='Motortvätt'
              price='159kr'
            />
            <DialogAlert
              label='Strålkastarrenovering'
              price='259kr'
            />
            <DialogAlert
              label='Däckbyte'
              price='149kr'
            />
            <DialogAlert
              label='Klädseltvätt'
              price='fr 699kr'
            />
            <DialogAlert
              label='Skinnbehandling'
              price='499kr'
            />
            <DialogAlert
              label='Lätt lastbil'
              price='fr 599kr'
            />
            <DialogAlert
              label='Husbilstvätt'
              price='799kr'
            />
            <DialogAlert
              label='Vaxning'
              price='699kr'
            />
            <DialogAlert
              label='Helrekond'
              price='fr 1399kr'
            />
            <DialogAlert
              label='Polering'
              price='fr 899kr'
            />
            <DialogAlert
              label='Lackskydd'
              price='fr 3499kr'
            />
            <DialogAlert
              label='Keramisk lackskydd'
              price='fr 4499kr'
            />
          </MuiThemeProvider>
        </div>
      </div>
    </section>
  )

}
}
