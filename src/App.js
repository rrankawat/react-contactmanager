import React from 'react';
import Header from './components/Header';
import Contacts from './components/Contacts';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header branding="Contact Manager" />
      <div className="container">
        <Contacts />
      </div>
    </div>
  );
}

export default App;
