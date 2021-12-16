import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import useFirebase from '../hooks/useFirebase';
import './common.css';

function MyVerticallyCenteredModal(props) {
    const { signInUsingGoogle } = useFirebase();
    const handleGoogleLogin = () => {
        signInUsingGoogle()
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    E-Shop
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
                <h4>Login</h4>
                <Button onClick={handleGoogleLogin} variant="success" className="rounded-pill"><FontAwesomeIcon icon={faGoogle} /> Login with google</Button>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

const Shipping = () => {
    const { logOut, user } = useFirebase();
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div>
            <div className="mb-4">
                {
                    !user.displayName ?
                        <>
                            <button className="common-btn me-2" onClick={() => setModalShow(true)}>LOG IN</button>
                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </>
                        :
                        <button className="common-btn me-2" onClick={logOut}>LOG OUT</button>
                }
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