import React from 'react';
import './Preloader.css';

const Preloader = ({ isActive }) => (
  <div className={`preloader ${isActive ? 'preloader_active' : ''}`}>
    <span className="preloader__round" />
  </div>
);

export default Preloader;
