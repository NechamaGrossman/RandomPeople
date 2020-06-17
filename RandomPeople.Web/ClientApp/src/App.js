import React, { Component } from 'react';
import { Route } from 'react-router';
import  Layout  from './components/Layout';
import Home from './Pages/Home';
import AddRandomPerson from'./Pages/AddRandomPerson'
import AddPerson from './Pages/AddPerson'

export default class App extends Component {
  displayName = App.name

  render() {
    return (
        <Layout>
            <Route exact path='/' component={Home} />
            <Route exact path='/AddRandomPerson' component={AddRandomPerson} />
            <Route exact path='/AddPerson' component={AddPerson} />
      </Layout>
    );
  }
}
