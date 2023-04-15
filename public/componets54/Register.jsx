import React, { Component } from 'react';
import axios from 'axios';
import User from './User';


class Register extends Component {
  constructor() {
    super()
    this.state = {
      val1: '',
      val2: '',
      mass: [],
      sanoq: [],
      status: false
    }
    this.gorun = this.gorun.bind(this)
  }
  componentDidMount() {
    axios.get('https://633600ed65d1e8ef2666e3bf.mockapi.io/users')
      .then(res => {
        this.setState({ mass: res.data })
        console.log(this.state.mass) 
      })
      .catch(err => {
        console.log(err);
      })
  }
  gorun(item){
    this.setState({
      status: !this.state.status,
      sanoq: item
    })

  }

  render() {
    return (
      <div>
        {
          (this.state.status) ? <User user={this.state.sanoq} /> :
            <div>
              {
               (this.state.mass.length > 0) ?
                  <div className='row g-0'>
                    {
                    
                      this.state.mass.map((item, index) => {
                        return (
                          <div key={index} className='col-4'>
                            <div className="card">
                              <img src={item.avatar} alt="" />
                              <h1 className='text-dark'>{item.citi}</h1>
                              <button className='btn btn-success' onClick={()=>this.gorun(item)}>see more</button>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div> :
                  <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
              }
            </div>
        }
      </div>
    );
  }
}

export default Register;
