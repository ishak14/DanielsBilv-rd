import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './navbarScrolled.css';
import brandLogo from '../icons/dbs2.svg';
import localization from '../../localization';

export default class NavbarScrolled extends Component {
  constructor(props){
    super(props);
    this.setState({
      isHide:false,
      toggle:false,
      display:'hideLinks',
      toggleIcon: ''
    });
    this.state = this.hideBar = this.hideBar.bind(this)
  }
  hideBar(){

    if(window.scrollY === 0){
      if(window.innerWidth > 992){
            console.log("vafan")
        this.setState({
          isHide:false,
          display:''})
      }
      else {
        this.setState({
          isHide:true})
      }
    }
    else if(window.scrollY < this.prev ){
      if(this.state.toggle === true && window.scrollY < this.prev - 3){
          this.toggle();
      }
      else {
      this.setState({
      isHide:true,
      display:'hideLinks'})
    }
    }
    else if (window.scrollY >= this.prev) {
      if(this.state.toggle === true && window.scrollY > this.prev + 3){
          this.toggle();
      }
      else{
      this.setState({
      isHide:false,
      display:'hideTopbar'})
    }
    }


     this.prev = window.scrollY;
  }
  componentWillMount() {
    this.setState({
      isHide:false,
      toggle:false,
      toggleIcon:'',
      display:'hideLinks'
    })
    if (window.scrollY === 0 && window.innerWidth < 992) {
      this.setState({isHide:true});
    }
  }

  componentDidMount(){
      window.addEventListener('scroll',this.hideBar);
  }
  componentWillUnmount(){
       window.removeEventListener('scroll',this.hideBar);
  }
  toggle = () => {

    this.setState({
    toggle: !this.state.toggle,
  }, () => {
    if(this.state.toggle){
      this.setState({
        display: '',
        toggleIcon: 'nav-icon4-open'
      })
    }
    else{
      this.setState({
        display: 'hideLinks',
        toggleIcon: ''
      })
    }
  });




  }
  render() {
    let classHide=this.state.isHide?"":"hide"
        return (
          <div className={"topbar "+classHide + ' '+this.state.display}>
              <div onClick={this.toggle} className="topbar-link topbar-link-toggle">
                <img src={brandLogo} className='brand-small-toggle'/>
                  <div className={"nav-icon4 "+this.state.toggleIcon}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <img src={brandLogo} className='brand-small'/>
              <nav className={"topbar-items topbar-items-right "}>
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
