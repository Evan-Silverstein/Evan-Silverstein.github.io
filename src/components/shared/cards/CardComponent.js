import React, { Component} from "react";
import styles from 'Src/assets/sass/card.scss';
import CardDisplayType from 'Src/models/CardDisplayType';
const CardComponent = (props)=>{
    var card = props.card;
    var clickHandler = props.clickHandler;
    var isFullImage = card.displayType === CardDisplayType.ImageFullLength;
    var cardContainerClass = isFullImage ? 'my-card-full-image' : 'my-card-grow-image';
    // var backgroundImage = "url(" + card.imageUrl + ")";
    function getImage (isFullImage, imageUrl){
        if(isFullImage){
            return (
                <div style={{backgroundImage: "url(" + card.imageUrl + ")"}} className='img-wrapper'>
                </div>
            )
        }
        else{
            return( <div className="img-wrapper"> <img src={card.imageUrl}/> </div>)
        }
    } 
    return(
        <div className={cardContainerClass}>
            <div className="card-image-container">
                <a target="_blank" href={card.link}>
                    {/* <div style={{backgroundImage: "url(" + card.imageUrl + ")"}} className='img-wrapper'>
                    </div>
                    <img src={card.imageUrl}/> */}
                    {getImage(isFullImage, card.imageUrl)}
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