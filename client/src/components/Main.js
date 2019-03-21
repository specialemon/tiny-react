import React from "react";
import Row from 'react-bootstrap/Row';
import GiveKudo from './GiveKudo';
import Kudos from './Kudos';

const Main = () => (
    <Row>
        <GiveKudo/>
        <Kudos/>
    </Row>
)

export default Main;