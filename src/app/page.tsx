'use client';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container } from 'react-bootstrap';
import TopMenu from '@/components/TopMenu';
import IslandSnowLogo from '@/components/IslandSnowLogo';
import MiddleMenu from '@/components/MiddleMenu';
import FullWidthImage from '@/components/FullWidthImage';
import FooterMenu from '@/components/FooterMenu';

const Home: React.FC = () => (
  <main>
    <Container>
      <TopMenu />
      <IslandSnowLogo imgUrl="https://pbs.twimg.com/profile_images/580543396592386048/BXO_oJGv_400x400.jpg" />
      <MiddleMenu />
      <FullWidthImage />
      <FooterMenu />
    </Container>
  </main>
);

export default Home;
