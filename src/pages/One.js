import React, { Component } from 'react';
import axios from 'axios';



class One extends Component {
  state = {
      judul: '',
      aud: {}, eur:{}, gbp:{}, jpy: {}, usd: {}
  }

  componentDidMount(){
    var url = 'https://blockchain.info/ticker'
    axios.get(url)
    .then((x)=>{
        this.setState({
            judul: 'Harga Bitcoin Hari Ini',
            aud: x.data.AUD,
            eur: x.data.EUR,
            gbp: x.data.GBP,
            jpy: x.data.JPY,
            usd: x.data.USD
        })
        console.log(x.data)
    })
    .catch()
  }

  render() {
    return (
      <div>
        <h3><b>{this.state.judul}</b></h3><br/>
        <div className="table-responsive">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Mata Uang</th>
                        <th>Jual</th>
                        <th>Beli</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Dollar Australia (AUD)</td>
                        <td>{this.state.aud.sell}</td>
                        <td>{this.state.aud.buy}</td>
                    </tr>
                    <tr>
                        <td>Euro Eropa (EUR)</td>
                        <td>{this.state.eur.sell}</td>
                        <td>{this.state.eur.buy}</td>
                    </tr>
                    <tr>
                        <td>Poundsterling Inggris (GBP)</td>
                        <td>{this.state.gbp.sell}</td>
                        <td>{this.state.gbp.buy}</td>
                    </tr>
                    <tr>
                        <td>Yen Jepang (JPY)</td>
                        <td>{this.state.jpy.sell}</td>
                        <td>{this.state.jpy.buy}</td>
                    </tr>
                    <tr>
                        <td>Dollar Amerika (USD)</td>
                        <td>{this.state.usd.sell}</td>
                        <td>{this.state.usd.buy}</td>
                    </tr>

                </tbody>
            </table>
        </div>
      </div>
    );
  }
}

export default One;