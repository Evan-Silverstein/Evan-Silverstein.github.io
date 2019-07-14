
import React, { Component} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardComponent from 'Components/shared/cards/CardComponent';
import ProjectDetails from './ProjectDetails';
import MyModal from 'Src/components/shared/MyModal';


class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
          activeProject: null,
        //   show: false,
        };
        // var projects = this.props.projects;
        this.clickHandler = this.clickHandler.bind(this);
        this.modalCloseHandler = this.modalCloseHandler.bind(this)
    }
    
    clickHandler(e){
        e.preventDefault();
        var index = e.currentTarget.getAttribute("card-index")
        var project = this.props.projects[index];
        this.setState({
            activeProject: project,
        })
    }

    modalCloseHandler(){
       // console.log('test close')
        this.setState({
            activeProject: null
        })
    }
    displayModal(project){
        // console.log(project)
        if(project == null){ return }
        var modalTitle = <a target="_blank" href={project.link}> {project.title} </a>;
        return (
            <MyModal closeHandler={this.modalCloseHandler} modalTitle={modalTitle} modalId='project-modal' fullWindow={true} show={true}>
                <ProjectDetails project={project}/>
            </MyModal>
        )
    }
    render() {
        var projects = this.props.projects;
        var project = this.state.activeProject;
        var showModal = project != null;
        return(
            <section id="section-portfolio" className="section-portfolio">
            <Container>
                <Row>
                    <Col xs={12}>
                    <h2 className="section-title-primary text-underline"> Projects  </h2>
                    <div className="skills">
                        <Container>
                            <Row className="justify-content-center" noGutters={true}>
                                    {projects.map((card, index)=>{
                                        return(
                                            <Col key={index} md={6} lg={4}>
                                                <div card-index={index} onClick={this.clickHandler} className='item-wrapper'>
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
            {this.displayModal(this.state.activeProject)}
            </section>
        )
    }
}

export default Portfolio;