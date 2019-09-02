import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

//stylesheets
// import './Wizard.css'

//redux
import store, {UPDATE_MORTGAGE, UPDATE_RENT, CANCEL} from "../../store"

export default class Step3 extends Component {
    constructor(){
        super();
        const reduxState = store.getState()
        this.state = {
            mortgage: reduxState.mortgage,
            rent: reduxState.rent
        }
    }

    componentDidMount(){
        store.subscribe(() => {
            const reduxState = store.getState()
            this.setState({
                img: reduxState.img
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
            type: UPDATE_MORTGAGE,
            payload: this.state.mortgage
        })
        store.dispatch({
            type: UPDATE_RENT,
            payload: this.state.rent
        })
    }


    addHouse = () => {
        const {name, address, city, state, zip, img} = store.getState()
        const {mortgage, rent} = this.state
        const body = {
            name, 
            address, 
            city, 
            state, 
            zip, 
            img, 
            mortgage,
            rent
        }
        axios.post('/api/houses', body)
            .then(res => {
                this.props.history.push('/')
            })
            .catch(err => {
                console.log(err)
            })
        store.dispatch({
            type: CANCEL
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
                   <Link to='/wizard/step2'><button onClick={this.saveChanges}>Previous Step</button></Link>
                    <button onClick={this.addHouse}>Complete</button>
                </div>
        )
    }
}
