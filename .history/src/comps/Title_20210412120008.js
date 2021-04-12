import React from 'react';
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
const Title=()=>{
    const [error, setError] = useState("")
    return(
        <div className="title">
            <h1>PicsGram</h1>
<h2>YOUR Pictures</h2>
<p>Lorem        </p>
<Card>
        </div>
    )
}
export default Title;