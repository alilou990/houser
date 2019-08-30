import React, { Component } from 'react'

//component imports
import House from '../House/House'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <House />
            </div>
        )
    }
}