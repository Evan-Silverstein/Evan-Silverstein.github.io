
import React, { Component} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

class ProjectDetails extends React.Component {
    render() {
        // var skills = this.props.skills;
        // var self = this.props.self;
        var project = this.props.project
        var description = project.descriptionLong == '' ? project.description : project.descriptionLong;
        var gallery = project.gallery.length > 0 ? project.gallery : [project.imageUrl]
        return(
            // <section id="section-about" className="section-about">
            <div className="portfolio-item">
                <div className="carousel-wrapper">
                    <Carousel>
                        {gallery.map((imgSrc, index)=>{
                            return(
                                <Carousel.Item key={index}>
                                <div className="img-wrapper">
                                    <img
                                    className="d-block w-100"
                                    src={imgSrc}
                                    // alt="slide"
                                    />
                                </div>
                            </Carousel.Item>
                            )
                 

                        })}
                        {/* <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=First slide&bg=373940"
                            alt="Second slide"
                            />
                        </Carousel.Item> */}
                    </Carousel>
                </div>
                <div className="item-details">
                    {/* <h3> {project.title} </h3> */}
                    {/* <a href={project.link}> {project.title} </a> */}
                    <p className="description"> {description} </p>
                    <div className="data-section">
                        <div className="data-title"> Tech: </div>
                        <ul className="tags-list">
                            {project.tags.map((tags, index) => {
                                return(
                                    <li key={index}>
                                        {tags}
                                    </li>
                                )
                    
                            })}
                        </ul>
                    </div>
                    <div className="data-section">
                        <div className="data-title"> Link: </div>
                        <a target="_blank" href={project.link}> {project.title} </a>
                    </div>

          
                </div>
            </div>
            // </section>
        )
    }
}

export default ProjectDetails;