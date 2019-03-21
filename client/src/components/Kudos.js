import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Consumer } from '../contexts/KudosContext';

const Kudos = (props) => (
    <Col className="kudos">
        <Consumer>
            {context => context.kudos.map(kudo => (
                <Row>
                    <Col className="eachKudo">
                        <h1 className="kudoTitle">{kudo.title}</h1>
                        <h2 className="sender">From: {kudo.sender[0].Name}</h2>
                        <p className="kudoBody">{kudo.body}</p>
                        <h3 className="receiver">To: {kudo.receiver[0].Name}</h3>
                    </Col>
                </Row>
            ))}
        </Consumer>
    </Col>
)

export default Kudos;