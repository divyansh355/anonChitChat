import React, {useEffect, useState} from 'react'
import { useAuth } from '../utils/AuthContext'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import '../index.css'


const LoginPage = () => {
    const {user, handleUserLogin} = useAuth()
    const [credentials, setCredentials] = useState({email:"", password:""})

    const navigate = useNavigate()

    useEffect(() => {
        if (user){
            navigate('/')
        }
    }, [])

    const handleInputChange = (e) => {
      let name = e.target.name
      let value = e.target.value 
  
      setCredentials({...credentials, [name]:value})
      // console.log('CREDS:', credentials)
    }

  return (
    <div className="auth--container">
      <div className="form--wrapper">
        <form
          className="form-control flex justify-center items-center flex-col gap-4"
          onSubmit={(e) => {
            handleUserLogin(e, credentials);
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
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                className="grow"
                required
                type="email"
                name="email"
                placeholder="Email"
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
                name="password"
                placeholder="Enter password..."
                value={credentials.password}
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
            </label>
          </div>

          <div className="field--wrapper">
            <input type="submit" value="Login" className="btn glass" />
          </div>
        </form>

        <p className="text-center">
          Dont have an account? Register{" "}
          <Link className="link link-primary" to="/register">
            here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage
