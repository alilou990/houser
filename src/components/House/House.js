import React from 'react'

import './House.css'

const House = (props) => {
    return (
            <div className='house-container'>
                <div className='img-container'>
                    <img src={props.img} alt=""/>
                </div>
                <div className='house-info-one'>
                    
                    <label className='house-info-text'>Property Name: {props.name}</label>
                    <label className='house-info-text'>Address: {props.address}</label>
                    <label className='house-info-text'>City: {props.city}</label>
                    <label className='house-info-text'>State: {props.state}</label>
                    <label className='house-info-text'>Zip: {props.zip}</label>
                </div>
                <div className='house-info-two'>
                    <label className='house-info-text'>Monthly Mortgage: {props.mortgage}</label>
                    <label className='house-info-text'>Monthly Rent: {props.rent}</label>
                    <button onClick={() => props.deleteHouse(props.house.id)}>Delete</button>
                </div>
            </div>
    )
}

export default House
