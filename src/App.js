import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Beranda from './pages/Beranda'
import One from './pages/One';
import Two from './pages/Two';
import Three from './pages/Three';


class App extends Component {
  render() {
    return (
      <div>
        <Beranda/>
        <div className="container" style={{margin: "50px", textAlign: "center"}}>
          <Route exact path='/' component={One}/>
          <Route path='/harga-bitcoin' component={One}/>
          <Route path='/konversi-rp-bitcoin' component={Two}/>
          <Route path='/konversi-bitcoin-rp' component={Three}/>
        </div>
      </div>
    );
  }
}

export default App;