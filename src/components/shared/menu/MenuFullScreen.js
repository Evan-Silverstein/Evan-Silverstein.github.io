import { Link } from 'react-router-dom'
import { HashLink as NavLink } from 'react-router-hash-link';
import React, { Component} from "react";
import styles from "Src/assets/sass/header.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class MenuFullScreen extends React.Component{
    MenuItemClickHandler(e){
        var val = e.target.textContent;
        // console.log(val);
        var handler = this.props.menuClickHandler;
        if(handler != undefined){
            this.props.menuClickHandler(val)
        }
    }
    render(){
        return (
            // <div className="header-wrapper">
            // <div className="overlay-container">
            // <div className="overlay-content">
            // <Container>
            // <Row>
            // <Col>
            //   <div className="header-content">
        
                <nav>
                  <ul className="nav-list">
                    <li className="nav-item"><NavLink onClick={this.MenuItemClickHandler.bind(this)} smooth to='/#section-about'>About</NavLink></li>
                    <li  className="nav-item"> <NavLink onClick={this.MenuItemClickHandler.bind(this)} smooth to='/#section-portfolio'>Projects</NavLink></li>
                    <li  className="nav-item"> <Link onClick={this.MenuItemClickHandler.bind(this)} to={{path: '/', query: 'display-resume'}}>Resume</Link></li>
        
                    {/* <li  className="nav-item"> <a href={getUploadsDir('documents/resume.docx')}>Resume</a></li> */}
                    <li  className="nav-item"> <NavLink onClick={this.MenuItemClickHandler.bind(this)} smooth to='/#section-contact'>Contact</NavLink></li>
        
                    {/* <li><Link to='/schedule'>Schedule</Link></li> */}
                  </ul>
                </nav>
            //   </div>
            //   </Col>
            //   </Row>
            //   </Container>
            //   </div>
            //   </div>
            //   </div>
          );
    }

}

export default MenuFullScreen;