import React from 'react';

const UploadForm=()=>{
    const [file,setFile]=useState(null);
    const changeHandler=(e)=>{
        let selected=e.target.files[0];
        console.log(selected)
    }
return(


<form>
    <input type="file" onChange={changeHandler}/>
</form>

)



}
export default UploadForm;