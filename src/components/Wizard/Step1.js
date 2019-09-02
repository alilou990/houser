import React, {Component} from 'react'
import {Link} from 'react-router-dom';

//stylesheets
import './step1.css'

//redux
import store, {UPDATE_NAME, UPDATE_ADDRESS, UPDATE_CITY, UPDATE_STATE, UPDATE_ZIP} from '../../store'


export default class Step1 extends Component {
    constructor(){
        super();
        const reduxState = store.getState()
        this.state = {
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip
        }
    }

    componentDidMount(){
        store.subscribe(() => {
            const reduxState = store.getState();
            this.setState({
                name: reduxState.name,
                address: reduxState.address,
                city: reduxState.city,
                state: reduxState.state,
                zip: reduxState.zip
            })
        })
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    saveChanges = () => {
        store.dispatch({
            type: UPDATE_NAME,
            payload: this.state.name
        });
        store.dispatch({
            type: UPDATE_ADDRESS,
            payload: this.state.address
        });
        store.dispatch({
            type: UPDATE_CITY,
            payload: this.state.city
        });
        store.dispatch({
            type: UPDATE_STATE,
            payload: this.state.state
        });
        store.dispatch({
            type: UPDATE_ZIP,
            payload: this.state.zip
        });
    }

    render() {
        return (
                 <div className='step-one-container'>  
                   <div className='house-info-one'>
                        <label>Property Name:</label>
                        <input className='name-input' type='text' name='name' onChange={this.handleOnChange} value={this.state.name}/>
                        <label>Address:</label>
                        <input className='address-input' type='text' name='address' onChange={this.handleOnChange} value={this.state.address}/>
                    </div>
                    <div className='house-info-two'>  
                        <label>City:</label>
                        <input className='input' type='text' name='city' onChange={this.handleOnChange} value={this.state.city}/>
                        <label>State:</label>
                        <input className='input' type='text' name='state' onChange={this.handleOnChange} value={this.state.state}/>
                        <label>Zipcode:</label>
                        <input className='input' type='text' name='zip' onChange={this.handleOnChange} value={this.state.zip}/>
                    </div>  
                        
                    <div className='next-btn'>  
                        <Link to='/wizard/step2'><button onClick={this.saveChanges}>Next Step</button></Link>
                    </div>
                </div>
        )
    }
}
