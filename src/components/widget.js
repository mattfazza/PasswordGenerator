import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Generator from './generator';

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
                            <Generator></Generator>
                        </Col>

                    </Row>
                </Container>
            </div >
        )
    };

}

export default JumboWidget;