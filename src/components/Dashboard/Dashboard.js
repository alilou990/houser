import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

//component imports
import House from '../House/House'

//stylesheets
import './Dashboard.css'

export default class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            houses: []
        }
    }

    componentDidMount(){
        this.getHouses()
    }

    getHouses = (req, res) => {
        axios.get('/api/houses')
            .then((res) => {
                this.setState({
                    houses: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
       const mappedHouses = this.state.houses.map((house, i) => {
           return <House house={house} key={i} getHouses={this.getHouses}/>
       })

        return (
            <div className="outer-dash-container">
                <div className="dash-contaienr">
                    <div className="dash-sub-header">
                    <h1 className='dash-name'>Dashboard</h1>
                    <Link to='/wizard'> <button className='add-button'>Add New Property</button></Link>
                    </div>
                    {mappedHouses}
                </div>
            </div>
        )
    }
}
