import React from 'react'
import {Switch, Route} from 'react-router-dom'

//component imports
import Dashboard from './components/Dashboard/Dashboard2'
import Wizard from './components/Wizard/Wizard'

export default (
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/wizard' component={Wizard} />
    </Switch>

)