import React,{ useEffect, useState } from "react";
import { BsHouse } from 'react-icons/bs';
import { FaUserPlus } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { TbAlignBoxRightTop } from "react-icons/tb";
import { ImCog } from "react-icons/im";
import { ImBell } from "react-icons/im";
import { ImUser } from "react-icons/im";
import axios from 'axios';

const User = () => {
    const [mas, setMas] = useState([]);
    useEffect(() => {
        axios.get('https://api.npoint.io/45e6264d5b437ebadbd1')
            .then((ress) => {
                console.log(ress.data);
                setMas(ress.data)
            })
            .catch((e) => {
                console.log(e);
            })
    }, []);
    return (
        <div className="container">
            <div className="row">
                <div className="col-3 d-block second">
                    <div className="buttonlar">
                    <button><BsHouse />Statistika</button>
                    <button className="but"><ImCog />Amallar</button>
                    <button className="butt">Push jonatish</button>
                    <button className="butt1">Foydalanuvchi siyosati</button>
                    <button><FaUserPlus />Ruxsatlar</button>
                    <button><TbAlignBoxRightTop />Hisobotlar</button>
                    <button><FaHeadset />Call-markaz</button>
                    </div>
                </div>

                <div className="col-9">

                    <div class="input-group flex-nowrap w-75 m-4 in">
                        <input type="search" class="form-control" placeholder="Search" aria-label="Username" aria-describedby="addon-wrapping  " />
                        <ImBell />
                        <ImUser />
                    </div>

                    <div><h2>Id orqali qidirish</h2></div>
                    <div className="d-flex boxcha">
                        <input type="search" placeholder="ID" />
                        <button className="btn btn-primary">Qoshish</button>
                    </div>


                    <div>
                        <table className="table">
                            <thead>
                               <tr>
                               <td>ID</td>
                                <td>User</td>
                                <td>Telefon</td>
                                <td>JShShIR</td>
                                <td>Qurilma</td>
                               </tr>
                            </thead>
                            <tbody>
                               {
                                (mas) && mas.map((item,index)=>{
                                    return(
                                            <tr className="tr1">
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.stir}</td>
                                            <td>{item.device}</td>
                                            <td>{item.number}</td>
                                        </tr>
                                    )
                                })
                               }
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default User;