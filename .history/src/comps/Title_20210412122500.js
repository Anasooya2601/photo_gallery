import React from 'react';

import { Link, useHistory } from "react-router-dom"
const Title=()=>{
    const [error, setError] = useState("")
    return(
        <div className="title">
            <h1>PicsGram</h1>
<h2>YOUR Pictures</h2>
<p>Lorem        </p>

      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>

        </div>
    )
}
export default Title;