import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CounterHeader from './CounterHeader';

class Counter extends Component {

// Create a constructor function
  constructor(props){
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

// Increment function
  IncrementItem = () => {
  this.setState({ clicks: this.state.clicks + 1 });
  }

// Decrease function
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }

//  Implement Increment / Decrease on click
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div className="Counter container">
        <CounterHeader />
          <button className="btn btn-primary" onClick={this.IncrementItem}>+</button>
          <button className="btn btn-primary" onClick={this.DecreaseItem}>-</button>
        { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
      </div>
    )
  }
}


export default Counter;
