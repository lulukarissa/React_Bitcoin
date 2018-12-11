import React, { Component } from 'react';
import axios from 'axios';

class Three extends Component {
    constructor(){
        super();
        this.state= {
            rupiah: '',
            bitcoin: '',
            usd: ''
        }
    }

    componentDidMount(){
        var url = 'https://blockchain.info/ticker'
        axios.get(url)
        .then((x)=>{
            this.setState({
                usd: x.data.USD.buy
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    onHandleChange = (e) => {
        var val = e.target.value
        this.setState({
            rupiah: val*this.state.usd,
            bitcoin: val
        })
    }

    hasil(){
        if(this.state.bitcoin){
            return(
                <h6>BTC {this.state.bitcoin} = Rp {Math.floor(this.state.rupiah*14000)}</h6>
            )
        }
        else{
            return(
                <p>Silahkan input nominal</p>
            )
        }
    }
        
    render(){
        return(
            <div className="container text-center">
                <h3>Konversi Bitcoin ke Rupiah</h3>
                <p>Kurs 1 USD = 14.000 IDR</p>
                <input type="number"
                placeholder="Ketik nominal bitcoin" 
                onChange={this.onHandleChange}></input><br/><br/>
                <p>{this.hasil()}</p>

            </div>
        )
    }
}
export default Three;