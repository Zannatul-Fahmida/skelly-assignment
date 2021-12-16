import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import img1 from '../images/mtsh0001-whaa-2_11.jpg';
import img2 from '../images/black-sport-t-shirt-2714-16.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';

const YourCart = () => {
    return (
        <div>
            <p>Your cart</p>
            <Card className="border-0">
                <Row className="d-flex justify-content-center align-items-center">
                    <Col md={4}>
                        <Card.Img className="img-fluid rounded-circle" src={img1} />
                    </Col>
                    <Col md={8} className="p-0">
                        <Card.Body className="d-flex align-items-center justify-content-between">
                            <div>
                                <p className='m-0'>T-Shirt</p>
                                <p className='m-0'>Summer Vibes</p>
                                <Card.Text>
                                    <small className='text-secondary'>#261311</small>
                                </Card.Text>
                            </div>
                            <div>
                                <p>$89.99</p>
                            </div>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
            <Card className="border-0">
                <Row className="d-flex justify-content-center align-items-center">
                    <Col md={4}>
                        <Card.Img className="img-fluid rounded-circle" src={img2} />
                    </Col>
                    <Col md={8} className="p-0">
                        <Card.Body className="d-flex align-items-center justify-content-between">
                            <div>
                                <p className='m-0'>Basic Slim</p>
                                <p className='m-0'>Fit T-shirt</p>
                                <Card.Text>
                                    <small className='text-secondary'>#212315</small>
                                </Card.Text>
                            </div>
                            <div>
                                <p>$89.99</p>
                            </div>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
            <div className="d-flex justify-content-center mt-3">
                <button className="d-flex justify-content-between w-100 cost-btn">
                    <p className="mb-0 text-secondary">Total cost</p>
                    <p className="mb-0">$159,98</p>
                </button>
            </div>
            <div className='d-flex align-items-center justify-content-center mt-5 text-secondary'>
                <div className="me-3">
                    <FontAwesomeIcon icon={faTruck} />
                </div>
                <div>
                    <p className='mb-0'>You are <span>$30,02</span> away</p>
                    <p className='mb-0'>from free shipping</p>
                </div>
            </div>
        </div>
    );
};

export default YourCart;