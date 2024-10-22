'use client';

import React from 'react';
import Image from 'next/image';

const FullWidthImage: React.FC = () => (
  <div style={{ width: '100%' }}>
    <Image
      src="https://archive.org/download/hawaii_islands_waterfall-1920x1080/hawaii_islands_waterfall-1920x1080.jpg"
      alt="Full Width"
      layout="responsive"
      width={1920}
      height={1080}
      priority
    />
  </div>
);

export default FullWidthImage;
