// import { Link } from 'react-router-dom';
import React, { Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from 'Src/assets/sass/social-media.scss';
const SocialMediaComponent = (props)=>{
    var items = props.socialMediaItems;
    return(

        <ul className='social-media-collection'>

            {items.map((card, index)=>{
                return(
                    <a className="social-media-item" target="_blank" key={index} href={card.link}>
                        <li className="">
                                <FontAwesomeIcon icon={["fab", card.imageUrl]} />
                        </li>
                    </a>

                )
            })}
        </ul>
    )
}

export default SocialMediaComponent;