import { faArrowLeft, faShoppingCart, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Payment from './Payment';
import Shipping from './Shipping';
import YourCart from './YourCart';

const Cart = () => {
    return (
        <Container>
            <div className="d-flex align-items-center justify-content-between">
                <div>
                    <h5>Shipping and Payment</h5>
                </div>
                <div className="d-flex align-items-center">
                    <div style={{ border: '2px solid #5cbf8f', padding: '5px', borderRadius: '50%' }} className="d-flex justify-content-center align-items-center me-2">
                        <FontAwesomeIcon className="fs-5" icon={faShoppingCart} />
                    </div>
                    <span className="divider"></span>
                    <div style={{ backgroundColor: "#5cbf8f", padding: '5px', borderRadius: '50%' }} className="d-flex justify-content-center align-items-center ms-2">
                        <FontAwesomeIcon className="fs-5 text-white" icon={faTruck} />
                    </div>
                </div>
            </div>
            <Row className="mt-4">
                <Col xs={12} md={5}>
                    <Shipping />
                </Col>
                <Col xs={12} md={4}>
                    <Payment />
                </Col>
                <Col xs={12} md={3}>
                    <YourCart />
                </Col>
            </Row>
            <div className="d-flex align-items-center justify-content-between mt-5">
                <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <p className="mb-0 ms-3">Back</p>
                </div>
                <div>
                    <button className="shopping-btn me-3">CONTINUE SHOPPING</button>
                    <button className="common-btn">PROCEED TO PAYMENT</button>
                </div>
            </div>
        </Container>
    );
};

export default Cart;