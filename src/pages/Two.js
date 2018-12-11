import React, { Component } from 'react';
import axios from 'axios';

class Two extends Component {
    constructor(){
        super();
        this.state = {
            rupiah: '',
            bitcoin: ''
        }
    }

    onHandleChange = (e) => {
        var val = e.target.value
        var url = `https://blockchain.info/tobtc?currency=USD&value=${val/14000}`
        axios.get(url)
        .then((x)=>{
            this.setState({
                rupiah: val,
                bitcoin: x.data
            })
            console.log(x.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    hasil(){
        if(this.state.rupiah){
            return(
                <h6>Rp {this.state.rupiah} = BTC {this.state.bitcoin}</h6>
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
            <div className= "container text-center">
                <h3>Konversi Rupiah ke Bitcoin</h3>
                <p>Kurs 1 USD = 14.000 IDR</p>
                <input type="number"
                placeholder="Ketik nominal rupiah"
                onChange={this.onHandleChange} /><br/><br/>
                {this.hasil()}
                
            </div>
        )
    }
}
export default Two;