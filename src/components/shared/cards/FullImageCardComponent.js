// import { Link } from 'react-router-dom';
import React, { Component} from "react";
import styles from 'Src/assets/sass/card.scss';
const FullImageCardComponent = (props)=>{
    var card = props.card;
    // var backgroundImage = "url(" + card.imageUrl + ")";
    return(

        <div className='my-card-full-image'>
            <div className="img-container">
                <a target="_blank" href={card.link}>
                    <div style={{backgroundImage: "url(" + card.imageUrl + ")"}} className='img-wrapper'>
                        {/* <img src={card.imageUrl}/> */}
                    </div>
                </a>
            </div>
            <div className='card-content'>
                <div className='header'>
                    <a target="_blank" href={card.link}>
                        <h2 className='title'> {card.title} </h2>
                    </a>

                </div>
                <div className='body'>
                    <p> {card.description} </p>
                </div>
            </div>
        </div>
    )
}

export default FullImageCardComponent;