
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
      <ul>
        {props?.skills?.map((skill)=>{
          <li key={skill}>{skill}</li>
        })}
      </ul>
    </div>
    <div className='social-link'>
    <h2>
      Social media
    </h2>
    <ul>
      {props?.socialLinks?.map((socialLink)=>(
        <li>
          <strong>{socialLink.platformName}:</strong>
          {socialLink.handle}
        </li>
      ))}
      
    </ul>

    </div>
    <div className='My interest'>
    <h2>My interest</h2>
    <ul>
      
        {props?.interests?.map((interest)=>(
          <li key={interest}>{interest}</li>

        ))}
     
    </ul>

    </div>
    </>
  );
};

export default BioData;
