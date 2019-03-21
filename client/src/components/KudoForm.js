import React from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
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
                            <Form.Row>
                                <Form.Group as={Col} xs sm={3} md={3} lg={3} xl={3}>
                                    <Form.Control as="select" onChange={context.handleUserChange} name="sender" id="sendSender" defaultValue="Select Sender">
                                        <option selected={true} disabled={false} value="">Select Sender</option>
                                        {context.users.map(user => (
                                            <option value={user._id}>{user.Name}</option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} xs sm={5} md={5} lg={5} xl={5}>
                                    <Form.Control as="input" onChange={context.handleTextChange} name="title" type="text" id="sendTitle" placeholder="Type a title!" />
                                    <Form.Control as="textarea" onChange={context.handleTextChange} name="body" type="text" id="sendBody" rows="5"
                                        placeholder="Type a Message!"></Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} xs sm={3} md={3} lg={3} xl={3}>
                                    <Form.Control as="select" onChange={context.handleUserChange} name="receiver" id="sendReceiver" defaultValue="Select Receiver">
                                        <option selected={true} disabled={false} value="">Select Receiver</option>
                                        {context.users.map(user => (
                                            <option value={user._id}>{user.Name}</option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                        </Container>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={context.toggleForm}>Close</Button>
                    <Button variant="primary" onClick={context.sendKudo}>Send</Button>
                </Modal.Footer>
            </Modal>
        )}
    </Consumer>
)

export default KudoForm;