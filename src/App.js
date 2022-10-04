import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (   
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
        <h2>this page is modified</h2>
        <h3>this is my third update</h3>
        <h4>test</h4>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);