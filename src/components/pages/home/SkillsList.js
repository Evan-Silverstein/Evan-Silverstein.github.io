import React, { Component} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SimpleCardComponent from 'Components/shared/cards/SimpleCardComponent';


function SkillsList(props){
    var skills = props.skills;
    return(
    <div className="skills">
    <Container>
        <Row noGutters={true}>
                {skills.map((card, index)=>{
                        // console.log(card);
                    return(
                        <Col key={index} sm={6}>
                            <div  className='item-wrapper'>
                                <SimpleCardComponent skill={card}/>
                            </div>
                        </Col>

                    )})
                }
          
        </Row>
    </Container>
    </div>
    )
}

export default SkillsList;