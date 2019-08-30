import React, { Component } from 'react'
import {HashRouter as Router} from 'react-router-dom'

//route
import routes from './routes'

//components
import Header from './components/Header/Header'

//stylesheet
import 'reset-css'
import './App.css'

export default class App extends Component {
  render() {
    return (
     <Router>
        <div className='main-container'>
            <Header />
            {routes}
        </div>
        
    </Router>
    )
  }
}
