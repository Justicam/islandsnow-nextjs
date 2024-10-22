'use client';

import React from 'react';

interface IslandSnowLogoProps {
  imgUrl: string;
}

const IslandSnowLogo: React.FC<IslandSnowLogoProps> = ({ imgUrl }) => (
  <div className="text-center my-4">
    <img src={imgUrl} alt="Island Snow Logo" style={{ width: '400px' }} />
  </div>
);

export default IslandSnowLogo;
