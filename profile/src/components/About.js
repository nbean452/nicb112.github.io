import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import dev from './sid.jpg';

function  About(){
    return(
        <Container>
            <h1 style={{width:"100%", textAlign:"center"}}>About Me</h1>
            <Row>
                <Col sm={6} md={5} lg={{span:4, offset:1}}>
                    <img src={dev} alt='Developer' />
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
}

export default About;