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


class Header extends React.Component{
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
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
            
                      <button className='d-md-none'
                        onClick={this.handleButtonClick}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                      >
                        <FontAwesomeIcon icon="bars" />

                      </button>

                      <div className="menu-fullscreen d-none d-md-block">
                        <MenuFullScreen/>

                      </div>
              
                  </div>

                    <div className="menu-mobile-wrapper d-md-none">
                      <Collapse in={this.state.open}>
                          <div id="example-collapse-text">
                            <MenuFullScreen menuClickHandler={this.handleButtonClick}/>

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