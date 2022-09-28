// the orignal App.js was sending the "login" function to here (frontend/src/components/login.js)
// however, since we're implementing react-router-v6 we cannot use "props.login(user)" and "props.history.push('/')" in here
// we pass the "login" function from App.js into this file.
// when "login" function is called in the "on-click" event, it calls "props.login(user)" to send the "user" info to the login function inside App.js
// the login info is then set in App.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(props) {

  const initialUserState = {
    name: "",
    id: "",
  };

  let navigate = useNavigate()

  // console.log(props)

  const [user, setUser] = useState(initialUserState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const login = () => {
    props.login(user)
    navigate('/restaurants');
  }

  return (
    <div className="submit-form">
      <div>
        <div className="form-group">
          <label htmlFor="user">Username</label>
          <input
            type="text"
            className="form-control"
            id="name"
            required
            value={user.name}
            onChange={handleInputChange}
            name="name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="id">ID</label>
          <input
            type="text"
            className="form-control"
            id="id"
            required
            value={user.id}
            onChange={handleInputChange}
            name="id"
          />
        </div>

        <button onClick={() => login(user)} className="btn btn-success">
        {/* <button className="btn btn-success"> */}
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;