import React from 'react';

const BioData = (props) => {
  return (
    <>
    <div className='Bio-Data'>
      <div>BioData</div>
      
      <div className='Personal Info'>
        <h2>BioData of {props.name}</h2>
      </div>
      <div>
      <p><strong>Email:</strong>{props.email}</p>
      <p>
        <strong>Phone:{props.pnum}</strong>
      </p>
      <p>
        <strong>Github:</strong>{props.github}
      </p>
      </div>
    </div>
    <div className='Skills'>
      <p>My skills</p>
    </div>
    </>
  );
};

export default BioData;
