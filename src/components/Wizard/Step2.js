import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//stylesheets
// import './Wizard.css'

//redux
import store, {UPDATE_IMG} from '../../store'

export default class Step2 extends Component {
    constructor(){
        super();
        const reduxState = store.getState();
        this.state = {
            img: reduxState.img
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
            type: UPDATE_IMG,
            payload: this.state.img
        })
    }

    render() {
        return (
                <div className='wizard-conatiner'>
                    <div className='wizard-sub-header'>
                    <h1>Add New Listing</h1>
                    </div>
                    <label>Image:</label>
                    <input type='url' name='img' onChange={this.handleOnChange} value={this.state.img}/>
                   <Link to="/wizard/step1"><button onClick={this.saveChanges}>Previous Step</button></Link>
                    <Link to='/wizard/step3'><button onClick={this.saveChanges}>Next Step</button></Link>
                </div>
        )
    }
}
