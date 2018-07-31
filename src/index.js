import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./container";
import 'bulma/css/bulma.css'
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
