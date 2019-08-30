import React, { Component } from 'react'

//component imports
import Dashboard from './components/Dashboard/Dashboard'
import Wizard from './components/Wizard/Wizard'
import Header from './components/Header/Header'

export default class App extends Component {
  render() {
    return (
      <div>
          <Dashboard />
          <Wizard />
          <Header />
      </div>
    )
  }
}
