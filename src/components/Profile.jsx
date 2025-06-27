import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    
    const { user } = useContext(UserContext);
    if (!user) {
        return (
          <div className="container">
            <h3>Please Login...</h3>
          </div>
        );
    }
    return (
        <div className="container">
            <h3>User Name is: {user.username}</h3>
        </div>
  )
}

export default Profile