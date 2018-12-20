import React from 'react'
import {Link} from 'react-router-dom'
import firebase from 'firebase'

class Login extends React.Component {
    state = {
        errorMessage: null,
        loading: false
    }

    doLogin(email, password){
        this.setState({errorMessage: null}, function(){
            if(!email || !password){
                this.setState({errorMessage: "Invalid username or password"})
                return false
            } else {
                firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // ...
                    this.setState({errorMessage: error.message})
                }.bind(this));
            }


        })
        
    }

    render(){
        return(
            <div className="card col-3 mr-auto ml-auto mt-4">
                <form className="mt-2 mb-2">
                    <div class="form-group">
                        <label htmlFor="username">Email address</label>
                        <input id="username" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email"></input>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" class="form-control" placeholder="Password"></input>
                    </div>
                    {this.state.errorMessage ? <div>
                        <h6 style={{color:"red"}}>{this.state.errorMessage}</h6>
                    </div> : ""}
                    <button type="button" class="btn btn-primary col-12" onClick={() => this.doLogin(document.getElementById('username').value, document.getElementById('password').value)}>Log In</button>
                    <div className="form-group mt-2">
                        <h6>Are you a vendor who would like access?  <Link to='/signup'>Click here</Link> to request access.</h6>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login