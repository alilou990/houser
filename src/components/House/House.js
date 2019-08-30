import React from 'react'

import './House.css'

const House = (props) => {
    return (
            <div className='house-container'>
                <label>Property Name: {props.name}</label>
                <label>Address: {props.address}</label>
                <label>City: {props.city}</label>
                <label>State: {props.state}</label>
                <label>Zip: {props.zip}</label>
            </div>
    )
}

export default House
