import React, { Component} from "react";
import Intro from './Intro';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

import MyModal from 'Src/components/shared/MyModal';
import styles from "Src/assets/sass/home.scss";
// import DataService from "Src/services/DataService";

function Home(props) {

        var service = props.service;
        var skills = service.getSkillCards();
        var selfInfo = service.getSelfCard();
        var projects = service.getProjectCards();
        var displayResume = props.location.query == 'display-resume';
        // props.location.query = '';

        // console.log("query:", displayResume);
        var resumeLink = service.getResumeUrl();
        var emailHandler = () => service.getEmail();
        return(
            <div className="page-home">
                <Intro/>
                <About skills={skills} self={selfInfo}/>
                <Portfolio projects={projects}/>
                <Contact emailHandler={emailHandler}/>
                <MyModal modalId='resume-modal' title='' fullWindow={true} show={displayResume}>
                    <Resume resumeLink={resumeLink}/>
                </MyModal>

            </div>
        )


    }

export default Home;
