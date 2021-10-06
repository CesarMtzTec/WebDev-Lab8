import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import NavBar from './components/NavBar';
import Routes from './components/Routes';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <BrowserRouter>
        <NavBar />
        <Routes />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
