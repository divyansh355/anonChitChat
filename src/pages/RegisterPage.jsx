import { useState } from "react";
import { useAuth } from "../utils/AuthContext";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const { handleRegister } = useAuth();

  const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setCredentials({ ...credentials, [name]: value });
    // console.log('CREDS:', credentials)
  };

  return (
    <div className="auth--container">
      <div className="form--wrapper">
        <form
          className="form-control flex flex-col justify-center items-center gap-4"
          onSubmit={(e) => {
            handleRegister(e, credentials);
          }}
        >
          <div className="field--wrapper">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                className="grow"
                required
                type="text"
                name="name"
                value={credentials.name}
                placeholder="Enter your name..."
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
            </label>
          </div>

          <div className="field--wrapper">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                className="grow"
                required
                type="email"
                name="email"
                placeholder="Enter your email..."
                value={credentials.email}
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
            </label>
          </div>

          <div className="field--wrapper">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="grow"
                required
                type="password"
                name="password1"
                placeholder="Enter a password..."
                value={credentials.password1}
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
            </label>
          </div>

          <div className="field--wrapper">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                required
                className="grow"
                type="password"
                name="password2"
                placeholder="Comfirm your password..."
                value={credentials.password2}
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
            </label>
          </div>

          <div className="field--wrapper">
            <input className="btn glass" type="submit" value="Register" />
          </div>
        </form>

        <p className="text-center">
          Already have an account? Login{" "}
          <Link className="link link-primary" to="/login">
            here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
