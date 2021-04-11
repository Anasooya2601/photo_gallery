import React from 'react';
import ImageGrid from './comps/ImageGrid';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';

function App() {
  return (
    <div className="App">
   <Title/>
   <UploadForm/>
   <ImageGrid/>
   <Modal/>
   </div>
  );
}

export default App;
