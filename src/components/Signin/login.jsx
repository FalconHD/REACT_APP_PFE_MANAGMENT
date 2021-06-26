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
        localStorage.setItem('User', data.User._id)
        localStorage.setItem('type', data.User.type)
        localStorage.setItem('Token', data.token)

        console.log(localStorage.getItem('User'));
        if (data.token) {
          this.setState({ logged: true })

          
        }
      })
  };



  render() {
    return (
      <Fragment>
        {this.state.logged && localStorage.getItem('type') == "ETUDIANT" ? <Redirect to="/studdash" /> : null}
        {this.state.logged && localStorage.getItem('type') == "ENCADRENT"? <Redirect to="/encaddash" /> : null}
        {this.state.logged && localStorage.getItem('type') == "DIRECTEUR"? <Redirect to="/dashdirecteur" /> : null}
        <div className="base-container" ref={this.props.containerRef}>
          <div className="headerr">Connexion</div>
          <div className="content">
            <div className="image">
              <img src={loginImg} />
            </div>
            <div className="form">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">E-mail</label>
                  <input type="text" name="username" placeholder="Email"
                    onChange={e => this.email = e.target.value}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Mot de passe</label>
                  <input type="password" name="password" placeholder="password"
                    onChange={e => this.password = e.target.value} />
                </div>
              </form></div>
          </div>
          <div className="footerr">
            <button onClick={this.handleSubmit} type="button" className="btn">
            Connexion
            </button>
          </div>
        </div>

      </Fragment>
    );
  }
}


export default Login;