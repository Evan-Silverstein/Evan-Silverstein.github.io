// import { Link } from 'react-router-dom'
import React, { Component} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SocialMediaComponent from "Components/shared/SocialMediaComponent";
import styles from "Src/assets/sass/footer.scss";

function Footer(props) {
  var service = props.service;
  var socialMediaItems = service.getSocialMediaCards();
  return (
    <section className="section-footer">
      <Container>
        <Row>
          <Col>
            <SocialMediaComponent socialMediaItems={socialMediaItems}/>
            <p> Evan Silverstein </p>
          </Col>
        </Row>
      </Container>
      {/* <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </nav> */}

    </section>
  );
}
export default Footer;