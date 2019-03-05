import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class ImagePanel extends Component {
  
  render() {

    return (
        
      <div className="ImagePanel">
        <h1>{this.props.author}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        
      </div>
    );
  }
}

export default ImagePanel;
