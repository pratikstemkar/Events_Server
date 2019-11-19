import React, { Fragment } from 'react'
import './css/style.css'

const App = () => {
  return (
    <Fragment>
      <h1 className="head-title">Events App Admin</h1>
      <div id="login-form" className="container">
        <h1>Login</h1>
        <h3 className="lead">Username</h3>
        <input id="username-input" type="text" />
        <h3 className="lead">Password</h3>
        <input id="password-input" type="password" /><br />
        <a href="#" className="btn btn-primary mt">Login</a><br />
        <small>Don't have an account? </small><a href="#" className="small">Register</a>
      </div>
    </Fragment>
  )
}

export default App;
