import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import './common.css';

const Shipping = () => {
    return (
        <div>
            <div className="mb-4">
                <button className="common-btn me-2">LOG IN</button>
                <button className="signup-btn">SIGN UP</button>
            </div>
            <div>
                <p>Shipping information</p>
                <Form>
                    <Row>
                        <Col>
                            <Form.Control className="rounded-pill mb-3" placeholder="Email" />
                            <Form.Control className="rounded-pill mb-3" placeholder="First name" />
                            <Form.Control className="rounded-pill mb-3" placeholder="Last name" />
                            <Form.Control className="rounded-pill" placeholder="Phone number" />
                        </Col>
                        <Col>
                            <Form.Control className="rounded-pill mb-3" placeholder="Address" />
                            <Form.Control className="rounded-pill mb-3" placeholder="City" />
                            <Form.Control className="rounded-pill mb-3" placeholder="Postal Code / ZIP" />
                            <Form.Select className="rounded-pill text-secondary" defaultValue="Poland">
                                <option>Poland</option>
                            </Form.Select>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    );
};

export default Shipping;