import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Consumer } from '../contexts/KudosContext';

const KudoButton = (props) => (
    <Button variant="primary" onClick={props.toggleForm}>Give Kudo</Button>
)

const KudoBox = () => (
    <Col className="giveKudoBox">
        <Consumer>
            {context => (
                <KudoButton toggleForm={context.toggleForm}/>
            )}
        </Consumer>
    </Col>
)


const Givekudo = () => (
    <Col xs sm={2} md={2} lg={2} xl={2} className="giveKudo">
        <Row>
            <KudoBox />
        </Row>
    </Col>
)

export default Givekudo;