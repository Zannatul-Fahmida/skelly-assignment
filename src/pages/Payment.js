import React from 'react';
import { Col, Row } from 'react-bootstrap';
import img1 from '../images/download.png';
import img2 from '../images/Mastercard-logo.svg.png';
import img3 from '../images/Visa_Inc._logo.svg.png';
import img4 from '../images/Maestro_2016.svg.png';
import img5 from '../images/Discover-logo.png';
import img6 from '../images/ideal-logo-png-transparent.png';
import img7 from '../images/1280px-InPost_logo.svg.png';
import img8 from '../images/2560px-DPD_logo_(2015).svg.png';
import img9 from '../images/DHL_logo.png';
import img10 from '../images/fedex-logo.png';

const Payment = () => {
    return (
        <div>
            <div>
                <p>Payment method</p>
                <Row>
                    <Col xs={4}>
                        <button className="w-100 bg-white rounded-pill d-flex align-items-center justify-content-center p-2 payment-btn">
                            <div className="m-2">
                                <img src={img1} height="30px" width="100%" alt="" />
                            </div>
                        </button>
                    </Col>
                    <Col xs={4}>
                        <button className="w-100 bg-white rounded-pill d-flex align-items-center justify-content-center p-2 payment-btn">
                            <div className="m-2">
                                <img src={img3} height="30px" width="100%" alt="" />
                            </div>
                        </button>
                    </Col>
                    <Col xs={4}>
                        <button className="w-100 bg-white rounded-pill d-flex align-items-center justify-content-center p-2 payment-btn">
                            <div className="m-2">
                                <img src={img2} height="30px" width="100%" alt="" />
                            </div>
                        </button>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs={4}>
                        <button className="w-100 bg-white rounded-pill d-flex align-items-center justify-content-center p-2 payment-btn">
                            <div className="m-2">
                                <img src={img4} height="30px" width="100%" alt="" />
                            </div>
                        </button>
                    </Col>
                    <Col xs={4}>
                        <button className="w-100 bg-white rounded-pill d-flex align-items-center justify-content-center p-2 payment-btn">
                            <div className="m-2">
                                <img src={img5} height="30px" width="100%" alt="" />
                            </div>
                        </button>
                    </Col>
                    <Col xs={4}>
                        <button className="w-100 bg-white rounded-pill d-flex align-items-center justify-content-center p-2 payment-btn">
                            <div className="m-2">
                                <img src={img6} height="30px" width="100%" alt="" />
                            </div>
                        </button>
                    </Col>
                </Row>
            </div>
            <div className="mt-4">
                <p>Delivery method</p>
                <Row>
                    <Col xs={6}>
                        <button className="w-100 bg-white border rounded-pill d-flex align-items-center justify-content-center p-2">
                            <div className="d-flex m-2 justify-content-between align-items-center">
                                <img src={img7} height="30px" width="100%" alt="" />
                                <p className="mb-0 ms-3">$20.00</p>
                            </div>
                        </button>
                    </Col>
                    <Col xs={6}>
                        <button className="w-100 bg-white border rounded-pill d-flex align-items-center justify-content-center p-2">
                            <div className="d-flex m-2 justify-content-between align-items-center">
                                <img src={img8} height="20px" width="100%" alt="" />
                                <p className="mb-0 ms-3">$12.00</p>
                            </div>
                        </button>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs={6}>
                        <button className="w-100 bg-white border rounded-pill d-flex align-items-center justify-content-center p-2">
                            <div className="d-flex m-2 justify-content-between align-items-center">
                                <img src={img9} height="10px" width="100%" alt="" />
                                <p className="mb-0 ms-3">$15.00</p>
                            </div>
                        </button>
                    </Col>
                    <Col xs={6}>
                        <button className="w-100 bg-white border rounded-pill d-flex align-items-center justify-content-center p-2">
                            <div className="d-flex m-2 justify-content-between align-items-center">
                                <img src={img10} height="10px" width="100%" alt="" />
                                <p className="mb-0 ms-3">$10.00</p>
                            </div>
                        </button>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Payment;