import React, { Component} from "react";
import Intro from './Intro';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

import MyModal from 'Src/components/shared/MyModal';
import styles from "Src/assets/sass/home.scss";
// import DataService from "Src/services/DataService";

class Home extends React.Component {
    // constructor(props){
    //     super(props)
    //     this.state={
    //         showModal: false
    //     }

    // }
    // componentDidMount(){
    //     console.log('called');
    // }
    render(){
        var props = this.props;
        var service = props.service;
        var skills = service.getSkillCards();
        var selfInfo = service.getSelfCard();
        var projects = service.getProjectCards();
        var displayResume = props.location.query == 'display-resume';
        // props.location.query = '';

        // console.log("query:", displayResume);
        var resumeLink = service.getResumeUrl();
        var emailHandler = () => service.getEmail();
        var modalHeader = this.getModalTitle(resumeLink);
            // console.log(modalHeader)

            return(
                <div className="page-home">
                    <Intro/>
                    <About skills={skills} self={selfInfo}/>
                    <Portfolio projects={projects}/>
                    <Contact emailHandler={emailHandler}/>
                    <MyModal modalTitle={modalHeader} modalId='resume-modal' fullWindow={true} show={displayResume}>
                        <Resume resumeLink={resumeLink}/>
                    </MyModal>
    
                </div>
    
        )
    }
        

    getModalTitle(resumeLink){
        return(
                <div className='title-wrapper'>
                    <a href={resumeLink}  download> Download </a>
                    <a target="_blank" href={resumeLink}> Open </a>

                </div>

        )

    }


}

export default Home;
