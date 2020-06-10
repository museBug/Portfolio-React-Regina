import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.navbar {
    background-color: #222;
}

.navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
} 

&:hover {
    color: white;
} 

`;

export const Navigationbar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.brand href="/">Portfolio</Navbar.brand>
            <Navbar.collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/project">Project</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.collapse>
        </Navbar>

    </Styles>
)
