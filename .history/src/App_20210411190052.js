import React from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';

function App() {
  return (
    <div className="App">
   <Title/>
   <UploadForm/>
   <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
