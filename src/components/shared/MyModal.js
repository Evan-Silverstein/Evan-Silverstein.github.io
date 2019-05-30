import React, { Component} from "react";
import styles from "Src/assets/sass/modal.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class MyModal extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
      // var isDisplayed = this.props.isDisplayed
      // var defaultDisplay = false;
      // var isDisplayed = isDisplayed == null ? defaultDisplay : isDisplayed;
      
      this.state = {
        show: false,
        fullWindow: this.props.fullWindow

      };
    }

    UNSAFE_componentWillReceiveProps(nextProps){
      if(nextProps.show){
        this.handleShow();
      }
    }

    // componentDidUpdate(oldProps) {
      
    //   var newProps = this.props


    //   console.log(this.setByProps, newProps.show, this.state.show);

    //   // if(this.state.show){return}
    //   //var newState = !this.state.show;
    //   if(this.setByProps !== newProps.show) {
    //       this.setByProps = newProps.show;
    //       // this.props.show = oldProps.show; 
    //       this.handleShow();
    //       // this.setState({
    //       //   show: newState,
    //       //   // fullWindow: newProps.fullWindow 
    //       // })
        
    //   }
    // }
    handleClose() {
      //this.props.show = false;
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ 
        show: true, 
      });
    }
  
    render() {
      this.setByProps = false;
      var modalSizeClass = this.state.fullWindow ? 'modal-full-window' : '';
      var modalId = this.props.modalId == undefined ? 'modal' : this.props.modalId;
      return (
          <Modal id={modalId} className={modalSizeClass} show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title> {this.props.title} </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {this.props.children}

            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              {/* <Button variant="primary" onClick={this.handleClose}>
                Save Changes
              </Button> */}
            </Modal.Footer>
          </Modal>
      );
    }
  }
export default MyModal
//   render(<Example />);