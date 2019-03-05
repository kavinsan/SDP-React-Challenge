import React, { Component } from 'react';
import ImagePanel from "./components/ImagePanel"
import './App.css';

class App extends Component {
  state = {
    visible: true,
    author: "Kavinsan Thavanesan"
  }
  
  render() {
    return (
      <div className="App">
        {this.state.visisble ? <ImagePanel author={this.state.author}/> : null}
        <button onClick={()=> {
          this.setState({visisble: true})
        } } className="App-btn">ON</button>

        <button onClick={()=> {
          this.setState({visisble: false})
        } } className="App-btn">OFF</button>
      </div>
    );
  }
}

export default App;
