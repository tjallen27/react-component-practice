import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function HeaderTitle(props){
  return (
    <span>Counter Title</span>
  );
}


class CounterHeader extends React.Component {
  render(){
    return(
      <h2>This is the <HeaderTitle /></h2>
    )
  }
}

export default CounterHeader;
