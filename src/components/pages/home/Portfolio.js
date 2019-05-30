
import React, { Component} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardComponent from 'Components/shared/cards/CardComponent';


class Portfolio extends React.Component {
    render() {
        var projects = this.props.projects;

        return(
            <section id="section-portfolio" className="section-portfolio">
            <Container>
                <Row>
                    <Col>
                    <h2 className="section-title-primary text-underline"> Projects  </h2>
                    <div className="skills">
                        <Container>
                            <Row className="justify-content-center" noGutters={true}>
                                    {projects.map((card, index)=>{
                                            // console.log(card);
                                        return(
                                            <Col key={index} md={6} lg={4}>
                                                <div  className='item-wrapper'>
                                                    <CardComponent card={card}/>
                                                </div>
                                            </Col>

                                        )})
                                    }
                            
                            </Row>
                        </Container>
                    </div>

                    </Col>
                </Row>
            </Container>
            </section>
        )
    }
}

export default Portfolio;