// import { Link } from 'react-router-dom';
import React, { Component} from "react";
import styles from 'Src/assets/sass/card.scss';
const CardComponent = (props)=>{
    var card = props.card;
    var clickHandler = props.clickHandler;
    // var backgroundImage = "url(" + card.imageUrl + ")";
    return(
        <div className='my-card-full-image'>
            <div className="card-image-container">
                <a target="_blank" href={card.link}>
                    <div style={{backgroundImage: "url(" + card.imageUrl + ")"}} className='img-wrapper'>
                        {/* <img src={card.imageUrl}/> */}
                    </div>
                </a>
            </div>
            <div className='card-content-container'>
                <div className="content-wrapper">
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
        </div>
    )
}

export default CardComponent;