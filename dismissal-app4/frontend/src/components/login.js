// the orignal App.js was sending the "login" function to here (frontend/src/components/login.js)
// however, since we're implementing react-router-v6 we cannot use "props.login(user)" and "props.history.push('/')" in here
// we need to figure out how to send the "login" function from App.js using react-router-v6
import React, { useState } from "react";
import { useParams } from "react-router-dom";

function Login(props) {

  const initialUserState = {
    name: "",
    id: "",
  };

  console.log(props)

  const [user, setUser] = useState(initialUserState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  // const login = () => {
  //   myLogin(user)
  //   props.login(user)
  //   props.history.push('/');
  // }

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

        <button onClick={() => props.login(user)} className="btn btn-success">
        {/* <button className="btn btn-success"> */}
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;