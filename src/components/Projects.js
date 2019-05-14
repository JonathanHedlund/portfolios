import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap';
import ProjectButton from './ProjectButton.js'
import './Modal.css'



class Projects extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <>
        <button className="Work" variant="primary" onClick={this.handleShow}>
          <h3>PROJECTS</h3>
        </button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h3>Projects</h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Här är mina projekt
          </Modal.Body>

        </Modal>
      </>
    );
  }
}

export default Projects;