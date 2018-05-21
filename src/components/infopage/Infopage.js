import React, { Component } from 'react';
import './Infopage.css';
import MyMapComponent from '../maps/maps';
import localization from '../../localization';
export default class Infopage extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return (
			<section className='infopage' id='info'>
			<h2 className='title'>{localization.pages.infopage}</h2>
				<div className='container'>

				<div className='square'>
						<MyMapComponent
							isMarkerShown
							googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
							loadingElement={<div style={{ height: `100px` }} />}
							containerElement={<div style={{ height: `75%` }} />}
							mapElement={<div className='map-style'/>}
							defaultOptions={{mapTypeControl: false}}
						/>
						<a href="https://goo.gl/maps/tpMw2pV3Zfu">{localization.address.address}</a>
			</div>

						<div className='square'>
							<div className='circle'>
							<i className="material-icons md-48 logo">phone</i>
								</div>
								<span></span>
								<a href="tel://0722840844">{localization.phone_number.phone_number}</a>
						</div>
						<div className='square'>
							<div className='circle'>
							<i className="material-icons md-48 logo">email</i>
								</div>
									<a href="mailto:info@danielsbilvard.se">{localization.email.email}</a>

						</div>


				</div>
			</section>
		)
	}
}
