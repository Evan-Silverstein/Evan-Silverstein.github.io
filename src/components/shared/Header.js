// import { Link } from 'react-router-dom'
// import { HashLink as NavLink } from 'react-router-hash-link';
import React, { Component} from "react";
import MenuFullScreen from 'Src/components/shared/menu/MenuFullScreen';
import styles from "Src/assets/sass/header.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Collapse from 'react-bootstrap/Collapse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import SocialMediaComponent from 'Src/components/shared/SocialMediaComponent';




class Header extends React.Component{
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
    this.service = this.props.service;
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  // handleMenuClick(menuItem){
  //   console.log('here');

  //   this.setState({open: false})
  // }

  handleButtonClick(){
    var isOpen = !this.state.open;
    this.setState({ open: isOpen })
  }
  render(){
    return (
      <div className="header-wrapper">
        <div className="overlay-container">
          <div className="overlay-content">
            <Container>
              <Row>
                <Col xs={12}>
                  <div className="header-content">
                      <div className="left">
                        <h1 className="logo d-md-none"> ES </h1>
                        <div className="menu-fullscreen d-none d-md-block">
                          <MenuFullScreen/>
                        </div>  
                      </div>
                      <div className="right">

                          <button
                            className="d-md-none"
                            onClick={this.handleButtonClick}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                            >
                            <FontAwesomeIcon icon="bars" />

                          </button>

                          <span className="spacer d-md-none"/>
                          <button className="resume d-md-none"> 
                            <Link to={{path: '/', query: 'display-resume'}}>
                              <FontAwesomeIcon icon="file" />
                            </Link>
                          </button>
                          <div className="d-none d-md-block">

                            <SocialMediaComponent socialMediaItems={this.service.getSocialMediaCards()}/>
                          </div>
                          {/* <MenuFullScreen socialMediaCards={this.service.getSocialMediaCards()} menuClickHandler={this.handleButtonClick}/> */}

                        </div>             
                  </div>

                    <div className="menu-mobile-wrapper d-md-none">
                      <Collapse in={this.state.open}>
                          <div id="example-collapse-text">
                            <MenuFullScreen socialMediaCards={this.service.getSocialMediaCards()} menuClickHandler={this.handleButtonClick}/>

                          </div>
                      </Collapse>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
        </div>
      </div>
    )
  }
}


export default Header;