import React from "react";
import Container from 'react-bootstrap/Container';
import Headbar from './Headbar';
import Main from './Main';

const Home = () => (
    <Container className="mainBody">
        <Headbar/>
        <hr/>
        <Main/>
    </Container>
)


export default Home;