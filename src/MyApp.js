import React,{ Component} from 'react';
import config from './config'
import Login from './Login.js'
import './App.css';
import Home from './Home'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import firebase from "firebase"
import {NavLink} from 'react-router-dom'
class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }


  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
      this.authListener();
    })
  }



  authListener() {
    config.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }
  render() {
    return (
      
     <div className="homepage">
        {this.state.isSignedIn ? (
          <span>
            <h5 style={{padding: 22}}> {firebase.auth().currentUser.displayName}</h5>
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
       {this.state.user ?  ( <Home/>) : (<Login />)}</div>
    )}
}

 export default App;