import React,{useState} from 'react';

const UploadForm=()=>{
    const [file,setFile]=useState(null);
    const[error,setError]=useState(null);
    const types=['image/png','image/jpeg'];
    const changeHandler=(e)=>{
        let selected=e.target.files[0];
        
        if(selected && types.includes(selected.types)){
            setFile(selected);
            setError('');
        }else{
            setFile(null);
setError('please select correct image file in jpeg or png');
        }
    }
return(


<form>
    <input type="file" onChange={changeHandler}/>
    <div className="output">
        {error && <div className="error">{error}</div>}
    </div>
</form>

)



}
export default UploadForm;