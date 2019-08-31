import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

//components
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

//stylesheets
import './Wizard.css'

export default class Wizard extends Component {
    render() {
        return (
            <div className='outer-wizard-contaienr'>
                <Link to='/'><button>Cancel</button></Link>
                <Route path='/wizard/step1' component={Step1}/>
                <Route path='/wizard/step2' component={Step2}/>
                <Route path='/wizard/step3' component={Step3}/>
            </div>
        )
    }
}
