import React from 'react';
import BioData from './BioData';

const App = () => {
  return (
    <div>
      
      <BioData name='Anika'
               email='anikaivnath8@gmail.com'
               pnum='0197386476567'
               github='Anika Ivnath'
               skills={['html','css','Tailwind']}
               interests={['Traveling','Movie','exploring']}
          />
    </div>
  );
}

export default App;
