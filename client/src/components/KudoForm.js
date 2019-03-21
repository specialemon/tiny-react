import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Consumer } from '../contexts/KudosContext';


const KudoForm = () => (
    <Consumer>
        {context => (
            <Modal
                size="lg"
                show={context.modalState}
                onHide={context.toggleForm}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        <h5>Input a kudo</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Container>
                            <Row>
                                <Col xs sm={3} md={3} lg={3} xl={3}>
                                    <select onChange={context.handleChange} name="sender" id="sendSender" defaultValue="Select Sender">
                                        <option selected disabled value>Select Sender</option>
                                        {context.users.map(user => (
                                            <option val={user._id}>{user.Name}</option>
                                        ))}
                                    </select>
                                </Col>
                                <Col xs sm={5} md={5} lg={5} xl={5}>
                                    <input onChange={context.handleChange} name="title" type="text" id="sendTitle" placeholder="Type a title!" />
                                    <textarea onChange={context.handleChange} name="body" type="text" id="sendBody" rows="5"
                                        placeholder="Type a Message!"></textarea>
                                </Col>
                                <Col xs sm={3} md={3} lg={3} xl={3}>
                                    <select onChange={context.handleChange} name="receiver" id="sendReceiver" defaultValue="Select Receiver">
                                        <option selected disabled value>Select Receiver</option>
                                        {context.users.map(user => (
                                            <option val={user._id}>{user.Name}</option>
                                        ))}
                                    </select>
                                </Col>
                            </Row>
                        </Container>
                    </Form>
                </Modal.Body>
            </Modal>
        )}
    </Consumer>
)

export default KudoForm;