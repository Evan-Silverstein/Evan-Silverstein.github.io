// import { Link } from 'react-router-dom';
import React, { Component} from "react";
import styles from 'Src/assets/sass/contact-form.scss';
// import axios from 'axios';
// import dataService from "Src/services/DataService";
import DataService from "../../services/DataService";

class FormContact extends React.Component {
    constructor(props = '') {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: '',
            submitted: false,
        };
        //this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dataService = new DataService();

      }
    handleChange(event) {

        var id = event.target.id;
        var value = event.target.value;
        //console.log(value);
        var stateProp = {[id]: value}

        this.setState(stateProp);
    }
    handleSubmit(event){
        event.preventDefault();
        //console.log(dataService)
        this.dataService.sendEmail(this.state)
        .then((response) => this.updateSubmittedState(true)
        ).catch((error) => this.updateSubmittedState(false)

         );
        // if(!isSuccessful){
        //     console.log('test here')
        // }



    }

    updateSubmittedState(success){
        if(success){
            this.setState({submitted: true})
        }
        // console.log('success')
        // console.log(response);
        // return true;
    }
    render(){
        var formSubmittedClassName = this.state.submitted ? 'is-submitted' : '';
        return(

            <div className={'my-form ' + formSubmittedClassName} onSubmit={this.handleSubmit} >

                <form>
                    {/* <label> Name </label> */}
                    <div className="content-wrapper">
                        <input required type="text" name="name" id="name" placeholder="Name" value={this.state.name} onChange={this.handleChange.bind(this)}/>
                        <input required type="email" name="email" id="email" placeholder="Email" value={this.state.email} onChange={this.handleChange.bind(this)}/>
                        <textarea required type="text" name="message" id="message" placeholder="Message" value={this.state.message} onChange={this.handleChange.bind(this)}/>
                        <input required type="submit" id="submit" value="Submit"/>
                    </div>
                </form>

                <p className="thank-you-msg"> Thank you. I will be in touch with you soon. </p>
            </div>
        )
    }

}

export default FormContact;