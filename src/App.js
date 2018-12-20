import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import firebase from 'firebase'
import HomePage from './components/HomePage'
import Login from './components/Login'
import Logout from './components/Logout'
import MenuBar from './components/Menubar'
import Info from './components/Info'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAHTXa56F-_gx3gVQSoBv21Y8aAwZrPH7M",
  authDomain: "vendorportal-fa881.firebaseapp.com",
  databaseURL: "https://vendorportal-fa881.firebaseio.com",
  projectId: "vendorportal-fa881",
  storageBucket: "vendorportal-fa881.appspot.com",
  messagingSenderId: "152152723627"
};
firebase.initializeApp(config);

class App extends React.Component {
  state = {
    authenticated: false,
    currentUser: null,
    loading: true
  }

  componentWillMount(){
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    })
  }

  checkAuth(){
    if(!this.state.authenticated && window.location.pathname != '/login'){
      return <Redirect to='/login'/>
    }
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => (
              !this.state.authenticated ? (
                <Redirect to="/login"/>
              ) : (
                !this.state.loading ? 
                <React.Fragment>
                  <MenuBar  currentUser={this.state.currentUser}/>
                  <HomePage/>
                </React.Fragment> : ""
              )
            )}/>

            <Route exact path="/login" render={() => (
              this.state.authenticated ? (
                <Redirect to="/"/>
              ) : (
                !this.state.loading ? (
                  <React.Fragment>
                    <MenuBar currentUser={this.state.currentUser}/>
                    <Login/> 
                  </React.Fragment>
                ) : ("")
              )
            )}/>

            <Route exact path="/logout" render={() => (
              !this.state.authenticated ? (
                <Redirect to="/login"/>
              ) : (
                <Logout/>
              )            
            )}/>

            <Route exact path="/info" render={() => (
              !this.state.authenticated && !this.state.loading ? (
                <Redirect to="/login"/>
              ) : (
                !this.state.loading ? (
                  <React.Fragment>
                    <MenuBar currentUser={this.state.currentUser}/>
                    <Info/> 
                  </React.Fragment>
                ) : ("")
              )
            )}/>




              {/* <Route exact path="/" render={(props) => <React.Fragment><MenuBar/><HomePage/></React.Fragment>}/> */}
              {/* <Route exact path="/logout" render={(props) => <React.Fragment><MenuBar/><Logout/></React.Fragment>}/> */}
              {/* {!this.state.authenticated ? <Route path="/login" render={(props) => <Login/>}/> : <Redirect to='/'/>} */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
