
import React, { Component} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SkillsList from './SkillsList';

class About extends React.Component {
    render() {
        // var cards = this.props.cards;
        // console.log(cards);
        // var imgUrl = getUploadsDir('images/evan-headshot.jpg');
        // var welcomeText = "Thanks"
        var skills = this.props.skills;
        var self = this.props.self;
        return(
            <section id="section-about" className="section-about">
            <div className="section-body">
            <Container>
                <Row>
                    <Col>
                        <div className="section-content">
                            <h2 className="section-title-primary text-underline"> About  </h2>

                            <Container>
                                <Row noGutters={true}>
                                    <Col sm={6}>
                                        <div className="left-wrapper">
                                            <div className="img-wrapper">
                                                <img src={self.imageUrl}/>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="right-wrapper">
                                            <div className="self-wrapper">
                                                <h3 className="title-secondary"> {self.title} </h3>
                                                <p className="description"> {self.description} </p>
                                            </div>
                                            <div className="cards-wrapper">
                                                {/* <h3 className="title-secondary"> Skills </h3> */}
                                                {/* <SkillsList skills={skills}/> */}
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
            </section>
        )
    }
}

export default About;