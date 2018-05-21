import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './navbarScrolled.css';
import brandLogo from '../icons/dbs-black.svg';
import localization from '../../localization';

export default class NavbarScrolled extends Component {
  constructor(props){
    super(props);
    this.setState({
      isHide:false,
      toggle:false,
      display:'displayNone',
      toggleIcon: ''
    });
    this.state = this.hideBar = this.hideBar.bind(this)
  }
  hideBar(){
     let {isHide} = this.state
     window.scrollY < this.prev?
     !isHide && this.setState({isHide:true})
     :
     isHide && this.setState({isHide:false})

     if(window.scrollY === 0){
       this.setState({isHide:false});
       console.log("scroll = 0");
     }
     this.prev = window.scrollY;
  }
  componentWillMount() {
    this.setState({
      isHide:false,
      toggle:false,
      toggleIcon:'',
      display:'displayNone'
    })

  }

  componentDidMount(){
      window.addEventListener('scroll',this.hideBar);
  }
  componentWillUnmount(){
       window.removeEventListener('scroll',this.hideBar);
  }
  toggle = () => {
    console.log(this.state.toggle);
    this.setState(prevState => ({
    toggle: !prevState.toggle
  }));
  this.state.display = this.state.toggle ? '': 'displayNone';
  this.state.toggleIcon = this.state.toggle ? 'nav-icon4-open': '';

  console.log(this.state.toggle);
  }
  render() {
    let classHide=this.state.isHide?"":"hide"
        return (
          <div className={"topbar "+classHide}>
              <div onClick={this.toggle} className="topbar-link topbar-link-toggle">
                <img src={brandLogo} className='brand-small-toggle'/>
                  <div className={"nav-icon4 "+this.state.toggleIcon}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <img src={brandLogo} className='brand-small'/>
              <nav className={"topbar-items topbar-items-right "+this.state.display}>
                <div className="topbar-link startpage">
                  <a onClick={this.toggle} href="#first">Startsida</a>
                </div>
                <div className="topbar-link offerspage">
                  <a onClick={this.toggle} href="#offers">Prislista</a>
                </div>
                <div className="topbar-link about-us">
                  <a onClick={this.toggle} href="#info">Boka tid/Kontakta oss</a>
                </div>
              </nav>
          </div>
      )
  }
}
