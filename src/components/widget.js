import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

class JumboWidget extends Component {

    render() {
        return (
            <div className="widget-outer">
                <Container className="Container">
                    <Row>
                        <Col xs="5" className="Column">
                            <div className="leftPart"></div>
                        </Col>
                        <Col xs="7" className="rightPart">
                            Please, select what your password should look like, and click generate
                            <input type="text"></input>
                            <Button color="fff" style={{ color: "black" }}>Generate</Button>{' '}
                            <p />
                            <input type="checkbox"></input>
                            Passoword must be between 8 and 16 characters
                            <p />
                            <input type="checkbox"></input>
                            Password cannot include some special characters
                            <p />
                            <input type="checkbox"></input>
                            Password must have at least one upper case and one number
                        </Col>

                    </Row>
                </Container>
            </div >
        )
    };

}

export default JumboWidget;