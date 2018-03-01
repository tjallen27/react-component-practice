import React, { Component } from 'react';


var num = 0;
class Tile extends Component {


  ConsoleLog = () => {
    num ++;
    console.log(`Button has been clicked ${num} times!`);
  }

  render(){
    return(
      <div className="Tile container">
        <div className="card">
          <img className="card-img-top" src="http://www.colours.co.tz/wp-content/uploads/2014/04/placeholder4.png" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">When the button below is clicked, it logs the number on clicks in the console.</p>
            <a href="#" className="btn btn-primary" onClick={this.ConsoleLog}>Log something in the console</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Tile;
