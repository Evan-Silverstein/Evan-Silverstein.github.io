import { Switch, Route } from 'react-router-dom'
import React, { Component} from "react";

import Home from 'Components/pages/home/Home'
import About from 'Components/pages/home/About'
// import Resume from 'Components/pages/resume/Resume'

function RouterOutlet(props){
    var service = props.service;
    return (
        <router-outlet>
            <Switch>
            
                {/* <Route exact path='/' component={Home}/> */}
                <Route exact path='/' render={(props) => <Home {...props} service={service} />}/>
                {/* <Route path='/resume' render={(props) => <Home {...props} service={service} />}/> */}

                {/* <Route exact path='/resume' render={(props) => <Resume {...props} service={service} />}/> */}

                <Route path='/about' component={About}/>
                {/* <Route path='/schedule' component={Schedule}/> */}
            </Switch>
        </router-outlet>
    )
}
export default RouterOutlet;
