import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { BsHouse } from 'react-icons/bs';
import { FaUserPlus } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { TbAlignBoxRightTop } from "react-icons/tb";
import { ImCog } from "react-icons/im";
import { ImBell } from "react-icons/im";
import { ImUser } from "react-icons/im";
import { RiGroupLine } from "react-icons/ri";
import { FcInfo } from "react-icons/fc";
import axios from 'axios';

const Sabina = () => {
    const [mas, setMas] = useState([]);
    useEffect(() => {
        axios.get('https://api.npoint.io/4b1114043e78e2b041d9')
            .then((ress) => {
                console.log(ress.data);
                setMas(ress.data)
            })
            .catch((e) => {
                console.log(e);
            })
    }, []);

    const [mass, setMass] = useState([]);
    useEffect(() => {
        axios.get('https://api.npoint.io/9d33a289e829720175dd')
            .then((ress) => {
                console.log(ress.data);
                setMass(ress.data)
            })
            .catch((e) => {
                console.log(e);
            })
    }, []);

    return (
        <div className="container">

            <div className="row">
                <div className="col-3 p-0">
                    <div className="buttonlar">
                    <button className="but"><BsHouse />Statistika</button>
                    <button className="but1"><Link to='/user'><ImCog />Amallar</Link></button>
                    <button><FaUserPlus />Ruxsatlar</button>
                    <button><TbAlignBoxRightTop />Hisobotlar</button>
                    <button><FaHeadset />Call-markaz</button>
                    </div>
                </div>

                <div className="col-9">

                    <div class="input-group flex-nowrap w-75 m-4 in">
                        <input type="text" class="form-control" placeholder="Search" aria-label="Username" aria-describedby="addon-wrapping  " />
                        <ImBell />
                        <ImUser />
                    </div>

                    <div className="box">
                        <div className="row">
                            {
                                (mas) && mas.map((item, index) => {
                                    return (

                                        <div className="col-1">
                                            <div className="card card1">
                                                <h2>{item.oy}</h2>
                                                <h2>{item.kun}</h2>
                                            </div>
                                        </div>

                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="w-100 qut"><h4>Ro’yxatdan o’tanlar</h4></div>
                    <div className="d-flex w-100 quti">
                        <RiGroupLine />
                        <h1>1 712 001  </h1>
                        <FcInfo />
                    </div>


                    <div className="box1">
                        <div className="row">
                            {
                                (mass) && mass.map((item, index) => {
                                    return (
                                        <div className="col-4">
                                            <div className="card card2">
                                                <h2>{item.nomi}</h2>
                                                <img src={item.url} alt="/" />
                                                <h1>{item.soni}</h1>
                                                <h6>{item.foiz}</h6>
                                                <a href='#'>{item.batafsil}</a>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>

            </div>


        </div>
    )
}


export default Sabina;