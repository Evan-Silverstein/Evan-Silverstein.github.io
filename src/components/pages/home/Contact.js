
import React, { Component} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormContact from 'Components/shared/FormContact';


class Contact extends React.Component {
    // constructor(){
    //     // state={
    //     //     displayForm: true
    //     // }
    // }

    // setDisplayForm(){

    // }
    render() {

        // var projects = this.props.projects;
        
        return(
            <section id="section-contact" className="section-contact">
            <Container>
                <Row>
                    <Col>
                    <h2 className="section-title-primary text-underline"> Contact  </h2>
                    <div className="form-wrapper">
                        <FormContact/>
                    </div>
                    </Col>
                </Row>
            </Container>
            </section>
        )
    }
}

export default Contact;