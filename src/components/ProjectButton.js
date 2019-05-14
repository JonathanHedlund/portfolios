import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import './ModalButton.css'
import logo from '/Users/jonathanhedlund/Documents/Projekt/portfolio/src/square.jpg'


class ProjectButton extends React.Component {
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
                <button className="WorkButton" variant="primary" onClick={this.handleShow}>
                    <img src={logo} alt="logo" />
                    <h3>PROJECT</h3>
                </button>
                <button className="closeModal" onClick={this.handleClose}>
                    <Modal className="hejsan" show={this.state.show} onHide={this.handleClose} backdrop={false} animation={false}>

                        <Modal.Header closeButton>
                            <Modal.Title>

                                <h3>Projects</h3>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="hej">Woohoo, you're reading this text in a modal!</Modal.Body>
                    </Modal>
                </button>
            </>
        );
    }
}

export default ProjectButton;