import React from 'react';

const CustomIcon = ({ src, alt, style }) => (
  <img src={src} alt={alt} style={{ width: 44, height: 44, ...style }} />
);

export default CustomIcon;
