import React, { Component } from "react";
import "./App.css";
import DataManager from "./DataManager"
// import CoinData from "./TestPage"

class App extends Component {
  render() {

    

  DataManager.getData()
  .then((result) =>{
    console.log(result);
    
  }
  )


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
       
        </p>
      </div>
    );
  }
}


export default App;
