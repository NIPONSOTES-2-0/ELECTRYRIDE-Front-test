import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Login} from "./components/login/Login";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin() {
    this.setState({
        isLoggedIn: true
    });
  }
  render() {
    const LoginView = () => <Login handleLogin={this.handleLogin}/>;
    return (
      <div className="App">
        <Router>          
          <Switch>
            <Route exact path="/" component={LoginView}>
            </Route>
            <Route exact path="/viaje">
              <h1>Inicia tu viaje</h1>
            </Route>
            <Route exact path="/pagos">
              <h1>Escoge tu metodo de pago</h1>
            </Route>
            <Route exact path="/ayuda">
              <h1>Contacta con nosotros</h1>
            </Route>
          </Switch>
          
        </Router>
      </div>
    );
  }
}

export default App;
