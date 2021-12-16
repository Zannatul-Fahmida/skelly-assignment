import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="light">
            <Container>
                <Navbar.Brand href="#home">E-Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto items-center">
                        <Nav.Link href="#" className="text-dark">Men</Nav.Link>
                        <Nav.Link href="#" className="text-dark">Women</Nav.Link>
                        <Nav.Link href="#" className="text-dark">Kids</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#" className="text-dark"><FontAwesomeIcon icon={faSearch} /></Nav.Link>
                        <Nav.Link href="#" className="text-dark"><FontAwesomeIcon icon={faShoppingCart} /></Nav.Link>
                        <Nav.Link href="#" className="text-dark"><FontAwesomeIcon icon={faUser} /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;