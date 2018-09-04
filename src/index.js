import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
// import CoinData from "./TestPage"
// import DataManager from "./DataManager"


ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
