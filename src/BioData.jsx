import React from 'react';

const BioData = (props) => {
  return (
    <div className='flex flex-col items-center p-6 bg-blue-950 min-h-screen'>
      <div className='bg-white p-6 rounded-lg shadow-md w-full max-w-lg'>
        <div className='text-center text-2xl font-bold mb-4 bg-blue-500 text-white p-2 rounded-t-lg'>
          BioData
        </div>
        <div className='text-center mb-6'>
          <h2 className='text-xl font-semibold'>BioData of {props.name}</h2>
        </div>
        <div className='space-y-4'>
          <p className='text-lg'>
            <strong>Email:</strong> {props.email}
          </p>
          <p className='text-lg'>
            <strong>Phone:</strong> {props.pnum}
          </p>
          <p className='text-lg'>
            <strong>Github:</strong> {props.github}
          </p>
        </div>
        <div className='mt-8'>
          <h3 className='text-lg font-semibold mb-2'>My Skills</h3>
          <ul className='list-disc list-inside'>
            {props?.skills?.map((skill) => (
              <li key={skill} className='text-lg'>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className='mt-8'>
          <h3 className='text-lg font-semibold mb-2'>Social Media</h3>
          <ul className='list-disc list-inside'>
            {props?.socialLinks?.map((socialLink) => (
              <li key={socialLink.platformName} className='text-lg'>
                <strong>{socialLink.platformName}:</strong> {socialLink.handle}
              </li>
            ))}
          </ul>
        </div>
        <div className='mt-8'>
          <h3 className='text-lg font-semibold mb-2'>My Interests</h3>
          <ul className='list-disc list-inside'>
            {props?.interests?.map((interest) => (
              <li key={interest} className='text-lg'>
                {interest}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BioData;
