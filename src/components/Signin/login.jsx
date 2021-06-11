import React from "react";
import loginImg from '../../images/login.svg';
import axios from "axios";
import { Redirect } from 'react-router-dom'
import { Fragment } from "react";

export class Login extends React.Component {
  state = {
    username: "",
    password: "",
    logged: false
  }
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    localStorage.getItem('Token') && this.setState({
      logged : true
    })
    console.log(this.state.logged);
  }

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      email: this.email,
      password: this.password
    };
    fetch('http://localhost:5000/auth/signin', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(Response => Response.json())
      .then((data) => {
        //adding Token To the Local Storage : 
        localStorage.setItem('Token', data.token)
        if (data.token) {
          this.setState({ logged: true })
        }
      })
  };



  render() {
    return (
      <Fragment>
        {this.state.logged ? <Redirect to="/encaddash" /> : null}
        <div className="base-container" ref={this.props.containerRef}>
          <div className="headerr">Login</div>
          <div className="content">
            <div className="image">
              <img src={loginImg} />
            </div>
            <div className="form">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Email</label>
                  <input type="text" name="username" placeholder="username"
                    onChange={e => this.email = e.target.value}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" placeholder="password"
                    onChange={e => this.password = e.target.value} />
                </div>
              </form></div>
          </div>
          <div className="footerr">
            <button onClick={this.handleSubmit} type="button" className="btn">
              Login
            </button>
          </div>
        </div>

      </Fragment>
    );
  }
}


export default Login;