'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FooterMenu: React.FC = () => (
  <footer className="bg-darker-gray py-4">
    <Container>
      <Row>
        <Col>
          <h5>NAVIGATION</h5>
          <div>
            <div><a href="#link2">About Us</a></div>
            <div><a href="#link3">Employment</a></div>
          </div>
        </Col>
        <Col>
          <h5>MAIN MENU</h5>
          <div>
            <div><a href="#link2">Men</a></div>
            <div><a href="#link3">Women</a></div>
          </div>
        </Col>
        <Col>
          <h5>CONNECT</h5>
          <div>
            <div><a href="#link2">Sign up for the latest updates</a></div>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default FooterMenu;
