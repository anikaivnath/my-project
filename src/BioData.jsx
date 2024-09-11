
import React from 'react';

const BioData = (props) => {
  return (
    <>
    <div className='ml-10 '>
    <div className='Bio-Data'>
      <div className='text-center text-xl font-bold	'>BioData</div>
      
      <div className='Personal Info '>
        <h2 className='text-center mt-5'>BioData of {props.name}</h2>
      </div>
      <div className='mt-10'>
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
      <strong>My skills</strong>
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
    <strong>My interest</strong>
    <ul>
      
        {props?.interests?.map((interest)=>(
          <li key={interest}>{interest}</li>

        ))}
     
    </ul>

    </div>
    </div>
    </>
  );
};

export default BioData;
