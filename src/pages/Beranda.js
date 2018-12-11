import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link class="navbar-brand" to="/">
            <i class="fas fa-coins"></i>
        </Link>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#lol">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="lol">
            <ul class="navbar-nav mr-auto nav-dark">
                <li class="nav-item">
                    <Link class="nav-link" to="/harga-bitcoin"><i class="fab fa-bitcoin"></i> Harga Bitcoin</Link>
                </li>
                <li class="nav-item" >
                    <Link class="nav-link" to="/konversi-rp-bitcoin"><i class="far fa-money-bill-alt"></i> Konversi Rupiah ke Bitcoin</Link>
                </li>
                <li class="nav-item" >
                    <Link class="nav-link" to="/konversi-bitcoin-rp"><i class="far fa-money-bill-alt"></i> Konversi Bitcoin ke Rupiah</Link>
                </li>
            </ul>
        </div>
        </nav>
      </div>
    );
  }
}

export default App;