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
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>

        </div>
    )
}
export default Title;