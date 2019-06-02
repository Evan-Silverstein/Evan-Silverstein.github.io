
import React, { Component} from "react";
import {hot} from "react-hot-loader";
import RouterOutlet from "Components/routes/RouterOutlet";
import Header from "Components/shared/Header"
import Footer from "Components/shared/Footer"
import styles from "Src/assets/sass/app.scss"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel, faCheckSquare, faBars} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

import DataService from "Src/services/DataService";



class App extends React.Component {
    
    render(){
        library.add(faCheckSquare, faGithub, faLinkedin, faBars);
        var service = new DataService();
        return(
          <div className="app">
            <header>
              <Header />
            </header>
            <div className="main">
                <RouterOutlet service={service}/>      
            </div>
            <footer>
                <Footer service={service}/>
            </footer>

          </div>
        );
    }
}

  

export default hot(module)(App);