import React from 'react';
import montreal from '../images/montreal.jpg';
import toronto from '../images/toronto.jpg';
import vancouver from '../images/vancouver.jpg';
import ottawa from '../images/ottawa.jpeg';

const Locations = () => {
  return (
    <div className='location-container'>
      <div className='toronto'>Toronto</div>
      <div className='montreal'>Montreal</div>
      <div className='vancouver'>Vancouver</div>
      <div className='ottawa'>Ottawa</div>
    </div>
  );
};

export default Locations;

// <img src={toronto} alt='toronto'></img>
// <img src={montreal} alt='montreal'></img>
// <img src={vancouver} alt='vancouver'></img>
// <img src={ottawa} alt='ottawa'></img>
