import React, { Component } from 'react';
import Header from './components/Header/header';
import Menu from './components/menu/menu';
import './App.css';
class App extends Component {
  render() {
    return (
        <div>
          <Header/>
          <Menu className="Menu"/>
        </div>


    );
  }
}

export default App;
