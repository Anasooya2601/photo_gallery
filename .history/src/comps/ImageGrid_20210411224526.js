import React from 'react';
import useFirestore from '../hooks/useFirestore'
const ImageGrid=({setSelectedImg})=>{
    const {docs}=useFirestore('images');
    return(
        <div className="img-grid">
          {docs &&docs.map(docs=>(
              <div className="img-wrap" key={doc.id}>
              <img src={doc.url} alt="uploaded pic"/>
              </div>
          ))}
        </div>
    )
}
export default ImageGrid;