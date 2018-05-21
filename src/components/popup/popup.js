import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import './popup.css';

/**
 * Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.
 */
export default class DialogAlert extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        className='cancel'
        label="Stäng"
        primary={true}
        onClick={this.handleClose}
      />

    ];

    return (
      <div className='test' style={{textAlign:'center'}}>
        <RaisedButton label={this.props.label +' '+ this.props.price} onClick={this.handleOpen} className='button-style'/>
        <Dialog
          className='dialog'
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <span className='dialog-text'>{this.props.text}</span>
        <div className='dialog-images'><img src='../images/clemondo.png'/></div>
        </Dialog>
      </div>
    );
  }
}
