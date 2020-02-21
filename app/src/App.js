import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Header from './containers/Header';
import Footer from './containers/Footer';
import Dashboard from './views/Dashboard';
import Cocinero from './views/Cocinero';
import Mozo from './views/Mozo';
import Detail from './views/Detail';

const client = new ApolloClient({
  uri: 'http://localhost:4000/'
});

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route exact path='/cocinero' component={Cocinero} />
              <Route exact path='/mozo' component={Mozo} />
              <Route path='/people/:name' component={Detail} />
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default ApolloApp;
