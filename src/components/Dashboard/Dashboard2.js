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

    deleteHouse = (id) => {
        axios.delete(`/api/house/${id}`)
            .then(res => {
                this.getHouses()
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
       const mappedHouses = this.state.houses.map((house, i) => {
           return <House house={house} key={i} getHouses={this.getHouses} id={house.id} name={house.name} address={house.address} city={house.city} state={house.state} zip={house.zip} deleteHouse={this.deleteHouse}/>
       })

        return (
            <div className="outer-dash-container">
                <div className="dash-container">
                    <div className="dash-sub-header">
                    <h1 className='dash-name'>Dashboard</h1>
                    <Link to='/wizard/step1'> <button className='add-button'>Add New Property</button></Link>
                    </div>
                    <h1 className='listing-text'>Home Listings</h1>
                    <div className="outer-house-container">
                        {mappedHouses}
                    </div>
                </div>
            </div>
        )
    }
}