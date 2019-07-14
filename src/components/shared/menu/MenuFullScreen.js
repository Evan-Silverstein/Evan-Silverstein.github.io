import { Link } from 'react-router-dom'
import { HashLink as NavLink } from 'react-router-hash-link';
import React, { Component} from "react";
import styles from "Src/assets/sass/header.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SocialMediaComponent from 'Src/components/shared/SocialMediaComponent';

class MenuFullScreen extends React.Component{
    constructor(props){
        super(props);

        this.socialMediaItems = this.props.socialMediaCards == null ? [] : this.props.socialMediaItems;
        console.log(this.socialMediaItems)
    }
    MenuItemClickHandler(e){
        var val = e.target.textContent;
        var handler = this.props.menuClickHandler;
        if(handler != undefined){
            this.props.menuClickHandler(val)
        }
    }
    // getSocialMediaIcons(){
    //     var items = this.socialMediaItems;
    //     if(items.count > 0)
    // }
    render(){
        return (        
                <nav>
                  <ul className="nav-list">
                    <li className="nav-item"><NavLink onClick={this.MenuItemClickHandler.bind(this)} smooth to='/#section-about'>About</NavLink></li>
                    <li  className="nav-item"> <NavLink onClick={this.MenuItemClickHandler.bind(this)} smooth to='/#section-portfolio'>Projects</NavLink></li>
                    <li  className="nav-item"> <Link onClick={this.MenuItemClickHandler.bind(this)} to={{path: '/', query: 'display-resume'}}>Resume</Link></li>
        
                    {/* <li  className="nav-item"> <a href={getUploadsDir('documents/resume.docx')}>Resume</a></li> */}
                    <li  className="nav-item"> <NavLink onClick={this.MenuItemClickHandler.bind(this)} smooth to='/#section-contact'>Contact</NavLink></li>
                    {/* <li> <SocialMediaComponent socialMediaItems={this.socialMediaItems}/> </li> */}

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