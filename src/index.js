import React, { Component } from "react";
import { render } from "react-dom";
import "./roboto.css";
import "./style.css"; 
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ConfirmationDialog from './pages/Home'; 
  
class App extends Component { 
  render() { 
    return (
		<Switch>
			<Route path="/" component={ConfirmationDialog} exact /> 
		</Switch> 
    );
  }
}

render( <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById("root"));
