import React, { Component } from 'react';
import Good from './Good';
import Login from './Login';

class Regist extends Component {
    constructor(){
        super()
        this.state = {
            statuss: false
        }
        this.check = this.check.bind(this)
    }

    


    check(ism , pass){
        if(ism === 'user' && pass === '12345'){
            this.setState({statuss: !this.state.statuss})
        }
        else{
            alert('kalla ukam')
        }
    }


  
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{(this.state.statuss)? '': 'Register'}</h1>
               {
                (this.state.statuss) ? <Good/> : <Login user={(name , password)=> this.check(name ,password)}/>
               } 
            </div>
        );
    }
}

export default Regist;
