import axios from "axios";
import React, { Component } from "react";
import { Fragment } from "react";
import loginImg from '../../images/login.svg';
import { Redirect } from 'react-router-dom'




export class Register extends React.Component {
  state = {
    email: '',
    password: '',
    confirm: '',
    type: ''
  }
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

  }


  componentDidMount() {
    localStorage.getItem('Token') && this.setState({
      logged: true
    })
    console.log(this.state.logged);
  }
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);

    if (this.state.confirm == this.state.password) {
      console.log(this.state);
      const data = {
        email: this.state.email,
        password: this.state.password,
        type: this.state.type
      };
      fetch('http://localhost:5000/auth/signup', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(Response => Response.json())
        .then((data) => {
          console.log(data);
          //adding Token To the Local Storage : 
          localStorage.setItem('User', data.User._id)
          localStorage.setItem('type', data.User.type)
          localStorage.setItem('Token', data.token)
          if (data.token) {
            this.setState({ logged: true })
          }
        })
    } else {
      console.log("wazbiii password azbii");
    }


  };


  render() {

    return (
      <Fragment>
        {this.state.logged ? <Redirect to="/encaddash" /> : null}

        <div className="base-container" ref={this.props.containerRef}>
          <div className="headerr">S'inscrire</div>
          <div className="content">
            <div className="image">
              <img src={loginImg} />
            </div>
            <div className="form">
              <form onSubmit={this.handleSubmit} action="#">
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input type="text" name="email" placeholder="nom-prénom@etu.uae.ac.ma"
                    onChange={e => this.state.email = e.target.value} />

                </div>
                <div className="loginF">
                  <label htmlFor="Type" className="space">S'inscrire comme:</label>
                  <select onChange={e => this.state.type = e.target.value} name="type" id="type" className="selectRegister">
                   
                    <option className="none" value="ENCADRENT">Encadrant</option>
                    <option className="none" value="ETUDIANT">Etudiant</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="password">Mot de passe</label>
                  <input type="password" name="password" placeholder="Le mot de passe"
                    onChange={e => this.state.password = e.target.value} />
                </div>
              
                <div className="form-group">
                  <label htmlFor="password_confime">Confirmez le mot de passe</label>
                  <input type="password" name="password_confime" placeholder="Confirmez le mot de passe"
                    onChange={e => this.state.confirm = e.target.value} />
                </div>
              </form></div>

          </div>
          <div className="footerr">
            <button onClick={this.handleSubmit} type="submit" className="btn" value="Submit">
            S'inscrire
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Register;