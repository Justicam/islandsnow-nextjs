'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaShoppingCart, FaHome, FaSearch, FaUser } from 'react-icons/fa';

const TopMenu: React.FC = () => (
  <Container fluid>
    <Row>
      <Col className="d-flex justify-content-start">
        <FaFacebook className="mx-2" size={40} />
        <FaInstagram className="mx-2" size={40} />
        <FaTwitter className="mx-2" size={40} />
      </Col>
      <Col className="d-flex justify-content-end">
        <FaHome className="mx-2" size={40} />
        <FaSearch className="mx-2" size={40} />
        <FaUser className="mx-2" size={40} />
        <FaShoppingCart className="mx-2" size={40} />
      </Col>
    </Row>
  </Container>
);

export default TopMenu;
