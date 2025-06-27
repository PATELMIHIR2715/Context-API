import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setusername] = useState(null);
    const [password, setpassword] = useState(null);
    const { setuser } = useContext(UserContext);
    const handlesubmit = (e) => {
        e.preventDefault()
        if (username  && password ) {
            
            setuser({ username, password });
            
        }
        else {
            alert("Please enter username and password")
        }
  };
  return (
    <div className="container">
      <h1>Login</h1>
      <div>
        <label htmlFor="userid"> User Name: </label>
        <input
          type="text"
          placeholder="Mihir Patel"
          id="userid"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
      </div>

      <br />
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="text"
          placeholder="123"
          id="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
      </div>

      <br />
      <button className="btn" onClick={handlesubmit}>Submit</button>
    </div>
  );
}

export default Login;
