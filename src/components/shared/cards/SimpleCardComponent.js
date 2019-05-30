// import { Link } from 'react-router-dom';
import React, { Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from 'Src/assets/sass/card-simple.scss';
const SimpleCardComponent = (props)=>{
    var card = props.skill;
    return(

        <div className='my-card-simple'>
            <div className='img-wrapper'>
                <FontAwesomeIcon icon={card.imageUrl} />
                {/* <img src={card.imageUrl}/> */}
            </div>
            <div className='card-content'>
                <div className='header'>
                    <h2 className='title'> {card.title} </h2>

                </div>
                {/* <div className='body'>
                    <p> {card.description} </p>
                </div> */}
            </div>
        </div>
    )
}

export default SimpleCardComponent;