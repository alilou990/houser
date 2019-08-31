import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

//stylesheets
import './Wizard.css'

export default class Step3 extends Component {
    constructor(){
        super();
        this.state = {
            mortgage: 0,
            rent: 0
        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addHouse = (event) => {
        const body = {
            name: this.state.name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
        }
        axios.post('/api/houses', body)
            .then(res => {
                this.props.history.push('/')
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
                <div className='wizard-conatiner'>
                    <div className='wizard-sub-header'>
                    <h1>Add New Listing</h1>
                    </div>
                    <label>Mortgage:</label>
                    <input type='text' name='mortgage' onChange={this.handleOnChange} value={this.state.mortgage}/>
                    <label>Rent:</label>
                    <input type='text' name='rent' onChange={this.handleOnChange} value={this.state.rent}/>
                   <Link to='/wizard/step2'><button>Previous Step</button></Link>
                    <button onClick={this.addHouse}>Complete</button>
                </div>
        )
    }
}
