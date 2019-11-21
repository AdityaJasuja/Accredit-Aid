import React,{Component} from 'react'
import config from './config'
import './App.css'
import firebase from 'firebase'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Tabmenu from './Tabmenu';
  


class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }s


    logout() {
        config.auth().signOut();
    }
    

    render() {
        return (
            <Router>
            <div>
              <div>
                <nav className="nav-wrapper grey darken-2 white-text " style={{padding:0}}>
                  <div className="container">
                    
                    <ul className="right">
                         <li>
                        
                        </li>
                        <li>
                        <button type="button" className="btn white-text" onClick={this.logout}>
                       Log out</button>
                        </li>
                    </ul>
                    <ul className="left">
                    <li>
                  <Link to="/about">Setup Course Materials</Link>
                </li>
                </ul>
                  </div>
                
                </nav>
              </div>
                
              <ul>
                
              </ul>
      
              <Switch>
                <Route path="/about">
                  <Tabmenu />
                </Route>
              
               
              </Switch>
             
          
            </div>
          </Router>
        );
    }
    }

      
    export default Home;