'use client';

import React from 'react';
import { Nav, Container } from 'react-bootstrap';

const MiddleMenu: React.FC = () => (
  <Container>
    <Nav className="justify-content-center">
      <Nav.Item>
        <Nav.Link href="#men">MEN ▼</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#women">WOMEN ▼</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#kids">KIDS ▼</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#brands">BRANDS ▼</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#search">SEARCH ▼</Nav.Link>
      </Nav.Item>
    </Nav>
  </Container>
);

export default MiddleMenu;
