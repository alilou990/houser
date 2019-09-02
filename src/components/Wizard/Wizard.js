import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import store, {CANCEL} from '../../store'

//components
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

//stylesheets
import './Wizard.css'

export default class Wizard extends Component {
    cancelBtn = () => {
        store.dispatch({
            type: CANCEL
        })
    }
    render() {
        return (
            <div className='outer-wizard-container'>
                <div className='wizard-sub-header'>
                    <h1>Add New Listing</h1>
                    <Link to='/'><button onClick={this.cancelBtn} className='cancel-btn'>Cancel</button></Link>
                </div>
                <Route path='/wizard/step1' component={Step1}/>
                <Route path='/wizard/step2' component={Step2}/>
                <Route path='/wizard/step3' component={Step3}/>
            </div>
        )
    }
}
