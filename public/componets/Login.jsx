import React, { Component } from 'react';

class Login extends Component {
    constructor(){
        super()
        this.state = {
            val1: '',
            val2: ''
        }
    }
    render() {
        return (
            <div>
                <input type="text" className='form-control my-1' onInput={(val)=>this.setState({val1: val.target.value})} />
                <input type="text" className='form-control my-1' onInput={(val)=>this.setState({val2: val.target.value})} />
                <button onClick={()=> this.props.user(this.state.val1 , this.state.val2)}>send</button>
            </div>
        );
    }
}

export default Login;
