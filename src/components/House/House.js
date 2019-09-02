import React from 'react'

import './House.css'

const House = (props) => {
    return (
            <div className='house-container'>
                <div className='img-container'>
                    <img src={props.img} alt=""/>
                </div>
                <div className='house-info-one'>
                    
                    <label>Property Name: {props.name}</label>
                    <label>Address: {props.address}</label>
                    <label>City: {props.city}</label>
                    <label>State: {props.state}</label>
                    <label>Zip: {props.zip}</label>
                </div>
                <div className='house-info-two'>
                    <label>Monthly Mortgage: {props.mortgage}</label>
                    <label>Monthly Rent: {props.rent}</label>
                    <button onClick={() => props.deleteHouse(props.house.id)}>Delete</button>
                </div>
            </div>
    )
}

export default House
