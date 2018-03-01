import React, { Component } from 'react';
import Header from './components/Header.js';
import Counter from './components/Counter.js';
import Tile from './components/Tile.js';
import Gallery from './components/Gallery.js';
import HorizontalLinearStepper from './components/HorizontalLinearStepper.js';
import TabsExampleSimple from './components/TabsExampleSimple.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          <Counter />
          <Tile />
          <HorizontalLinearStepper />
          <TabsExampleSimple />
          <Gallery />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
