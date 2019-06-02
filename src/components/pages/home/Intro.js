import React, { Component} from "react";
import Container from 'react-bootstrap/Container';
import { HashLink as NavLink } from 'react-router-hash-link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import backgroundImage from 'Src/uploads/images/hero-image.jpg';
// import styles from "Src/assets/sass/home.scss";
// backgroundImageStyle: "url(" + { backgroundImage } + ")";
class Intro extends React.Component {
    handleLearnMoreClick(event) {
        event.preventDefault();
        //console.log(event.target);
        //var id = event.target.id;
        
        // var targetEleId = 'section-about';
        // console.log(event);

        // var test = document.getElementById(targetEleId).scrollIntoView();
        // var value = event.target.value;
        // console.log(test);
        // var stateProp = {[id]: value}

        // this.setState(stateProp);
    }
    render() {
        return(
            <section className="section-intro">
            <div className="overlay-container">
                <div className="overlay-content">
                    <Container>
                        <Row>
                            <Col xs={12}>
                            <div className='hero'>
                                <div className="stamp">
                                    <h2 className="hero-text"> Evan Silverstein </h2>
                                    <p className="hero-text-sub"> fullstack devevloper </p>

                                    <NavLink className="button-border" smooth to='/#section-about'>Learn More</NavLink>
                                </div>
                            </div>

                            {/* <h1>Hello {this.props.message}!</h1> */}
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            </section>
        )
    }
}

export default Intro;
