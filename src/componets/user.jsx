import React, { useEffect, useState } from "react";
// import axios from 'axios';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


const User = () => {
  const state = useLocation()
  const [count, setCount] = useState(0);
  // const [total, setTotal] = useState(150);
  let arr = state.state
  const [ arr1 ,setarr1] = useState(arr)

  const handleIncrement = (i) => {
    let cur = [...arr1]
    cur[i].qty = cur[i].qty +1
    setarr1(cur)
    // console.log(cur);
  }

  const handleDecrement = (i) => {
    let cur = [...arr1]
    cur[i].qty = cur[i].qty -1
    if(cur[i].qty < 0) {
      cur.splice(i, 1)
    }
    setarr1(cur)
 }

  return (
    <div className='row row1'>
                  <div>
                <div class="input-group flex-nowrap inp">
                    <input type="search" className="form-control " placeholder="Пoиск" aria-label="Username" aria-describedby="addon-wrapping"  />
                </div>
                </div>
      <Link to='/'>
      <div>
        <h1>Назадь</h1>
      </div>
      </Link>
      {
        (arr1).map((item,index)=>{
               return(
               <div className='col-10'>
                  <div className='card kard'>
                  <img   src={item.url} alt="" />
                             <h2>{item.narxi  * item.qty}</h2>
                             <h2>{item.count}</h2>
                             <h2>{item.name}</h2>
                             <div className="d-flex buttonlar">
                             <button  onClick={()=>handleIncrement(index)} className="btn btn-success">+</button>
                             <h4>{item.qty}</h4>
                             <button onClick={()=>handleDecrement(index)} className="btn btn-danger">-</button>
                             </div>
                  </div>
               </div>
               )
        })
      }
    </div>
  );
}


export default User;
