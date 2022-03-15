import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import {useNeonTransfer} from "neon-portal/src/react";
import useMetaMask from './hooks/useMetaMask';

function App() {

  const { connect, disconnect, isActive, account } = useMetaMask()
  console.log(account)
  return (
    <div className="App">
      <header className="App-header">
        
        <Button onClick={connect} variant="secondary"><img src="images/metamask.svg" alt="MetaMask" width="50" height="50" /> Connect With MetaMask</Button>
        { isActive ? <span>Connected with {account}</span> : <span>Not Connected</span> }

        <Button onClick={disconnect} variant="danger">Disconnect from MetaMask <img src="images/noun_waving_3666509.svg" height="50" width="50" /></Button>
      </header>
    </div>
  );
}

export default App;
