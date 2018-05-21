import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Fullpage, Slide, HorizontalSlider } from 'fullpage-react';
import Firstpage from './firstpage/Firstpage';
import Offerspage from './offerspage/Offerspage';
import Infopage from './infopage/Infopage';
import  './navbar/navbar2.css';

const { changeFullpageSlide, changeHorizontalSlide } = Fullpage;
const fullPageOptions = {
  // for mouse/wheel events
  // represents the level of force required to generate a slide change on non-mobile, 0 is default
  scrollSensitivity: 2,
  verticalCentered: true,
  scrollOverflow: false,
  paddingBottom: '0',
  scrollingSpeed: '800',
  navigation: true,
  navigationPosition: 'right',
  fixedElements:'#header',
  resize: false,
  css3: true,
};

const topNavStyle = {
  position: 'fixed',
  marginTop: '110px',
  height: '45px',
  width: '100%',
  background: '#2d739f',
  zIndex: '9',
  textAlign: 'center',
  color: '#f2f2f2',
  padding: '0',
  boxShadow: '-2px 3px 16px -1px black',
  zIndex: '99',
  display: 'flex',
  justifyContent: 'flex-end',
};

export default class FullPageReact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: {
        Fullpage: 0,
        toggle: true
      }
    };
    this.onSlideChangeStart = this.onSlideChangeStart.bind(this);
    this.onSlideChangeEnd = this.onSlideChangeEnd.bind(this);
  }

  onSlideChangeStart(name, props, state, newState) {
  }

  onSlideChangeEnd(name, props, state, newState){
  const oldActive = this.state.active
  const sliderState = {
    [name]: newState.activeSlide
  };
  const updatedState = Object.assign(oldActive, sliderState);
  this.setState(updatedState);
}
classToggle = () => {
  this.setState(prevState => ({
  toggle: !prevState.toggle
}));
console.log(this.state.toggle);
}

render() {
  var navbarToggle = this.state.toggle ? 'navbar-toggle-hide' : 'navbar-toggle-show navbar-link-toggle'

  const { active } = this.state;

  const currentActive = active.Fullpage;
  const prevSlide = changeFullpageSlide.bind(null, 1);
  const nextSlide = changeFullpageSlide.bind(null, 2);
  const goToTop = changeFullpageSlide.bind(null, 0);

  const topNav = (


    <div class="navbar">
  <nav onClick={this.classToggle}class={navbarToggle}>
    <i class="fas fa-bars"></i>
    <div>logo</div>
  </nav>
  <nav class="navbar-items navbar-items-right">
    <div class="navbar-link startpage">
      <span onClick={goToTop}>Startsida</span>
    </div>
    <div class="navbar-link offerspage">
      <span className onClick={prevSlide}>Prislista</span>
    </div>
    <div class="navbar-link about-us">
      <span  onClick={nextSlide}>Boka tid/Kontakta oss</span>
    </div>
  </nav>
</div>

  );
const verticalSlides = [
  <Slide> <Firstpage/> </Slide>,
    <Slide><Offerspage/></Slide>,
      <Slide><Infopage/></Slide>
    ];
    fullPageOptions.slides = verticalSlides;
    return (
      <div>
        <Fullpage onSlideChangeStart={this.onSlideChangeStart} onSlideChangeEnd={this.onSlideChangeEnd} {...fullPageOptions}>
          {topNav}
        </Fullpage>
      </div>

    );
  }
}
