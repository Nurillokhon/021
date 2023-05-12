import React, { useEffect, useState } from "react";
import axios from 'axios';
import img1 from './img/buruk.png';
import img2 from './img/oyoqkiyim.png';
import img3 from './img/kambinzon.png';
import img4 from './img/jemper.png';
import img5 from './img/sviter.png';
import img6 from './img/kastum.png';
import img7 from './img/header.png'
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import ScrollContainer from 'react-indiana-drag-scroll'


const Sabina = () => {
    const [kategoriya, setkategotiya] = React.useState([
        {
            icon: img1,
            name: 'Брюки'
        },
        {
            icon: img2,
            name: 'Пуловер'
        },
        {
            icon: img1,
            name: 'Одежда больших размеров'
        },
        {
            icon: img2,
            name: 'Верхняя одежда'
        },
        {
            icon: img3,
            name: 'Комбинезоны'
        },
        {
            icon: img4,
            name: 'Пиджаки'
        },
        {
            icon: img4,
            name: 'Джемпер'
        },
        {
            icon: img5,
            name: 'Домашная одежда'
        },
        {
            icon: img6,
            name: 'Костюмы'
        }, {
            icon: img1,
            name: 'Брюки'
        },
        {
            icon: img2,
            name: 'Пуловер'
        },
        {
            icon: img1,
            name: 'Одежда больших размеров'
        },
        {
            icon: img2,
            name: 'Верхняя одежда'
        },
        {
            icon: img3,
            name: 'Комбинезоны'
        },
        {
            icon: img4,
            name: 'Пиджаки'
        },
        {
            icon: img4,
            name: 'Джемпер'
        },
        {
            icon: img5,
            name: 'Домашная одежда'
        },
        {
            icon: img6,
            name: 'Костюмы'
        },
    ])

    const [mas, setMas] = useState([]);
    const [card, setcard] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredData = mas.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        axios.get('https://api.npoint.io/98792f12dbae96b6a9ff')
            .then((ress) => {
                setMas(ress.data)
            })
            .catch((e) => {
                console.log(e);
            })
    }, []);

    const [car, carMas] = useState([]);;
    useEffect(() => {
        axios.get('https://api.npoint.io/9656f5d72c076b79e607')
            .then((ress) => {
                // console.log(ress.data);
                carMas(ress.data)
            })
            .catch((e) => {
                console.log(e);
            })
    }, []);


    const run = (i) => {
        console.log(i);
        let cur = [...card]
 cur.push(mas[i])
        // if (card.length>0) {
        //     let son = 0
        //     card.map((iteam) => {
        //         if (iteam.url === cur[i].url) {
        //             son++
        //         }  
        //     })
        //     if(son>0){
        //     console.log('salom')
        //     }
        //     else{
        //         cur.push(mas[i])
        //     }
        // }
        // else {
        //     cur.push(mas[i])
        // }

        setcard(cur)
    }
    console.log(card);


    return (
        <div className="container">
            <div>
                <div class="input-group flex-nowrap inp">
                    <input type="search" onChange={handleSearch} class="form-control " placeholder="Пoиск" aria-label="Username" aria-describedby="addon-wrapping" />
                    <Link to='/user' state={card}>
                        <div className="savat">
                            <BsFillCartCheckFill />
                        </div>
                    </Link>

                    {/* <div>
                        {
                            filteredData.map((item) =>{
                                return (
                                                                    <div className="card" key={item.id}>
                                                                        <div className="card-body">
                                                                            <img src={item.icon} alt="" />
                                                                            <h5 className="card-title">{item.name}</h5>
                                                                            <p className="card-text">{item.description}</p>
                                                                        </div>
                                                                    </div>
                                                                )
                            })
                        }
                    </div>
   */}
                </div>
            </div>
            <div>
                <ScrollContainer className="scroll-container d-flex">
                    {
                        car.map((item, index) => {
                            return (
                                <img className="imglar" src={item.url} alt="" />
                            )
                        })
                    }
                </ScrollContainer>
            </div>
            <div className="w-100 rasm">
                <img className="w-100" src={img7} alt="" />
            </div>

            <div className="w-100 box1">
                <div className="box w-100 h-25"><h1>Категории</h1></div>
                <div className="row">
                    {
                        kategoriya.map((item, index) => {
                            return (
                                <div className="col-4 d-flex" >
                                    <img src={item.icon} alt="" />
                                    <h2>{item.name}</h2>
                                </div>
                            )
                        })
                    }
                </div>
            </div>


            <div className="box2 w-100">
                <div className="text"><h2>Oбуви</h2></div>
                <div className="cardlar">
                    {
                        mas.map((item, index) => {
                            return (
                                <div className="card1" key={index}>
                                    <div className="card">
                                        <img src={item.url} alt="" />
                                        <h2>{item.narxi}</h2>
                                        <h2>{item.name}</h2>
                                        <img className="w-25 img" src={item.nike} alt="" />
                                    </div>
                                    <button onClick={() => run(index)}><h2>{item.button}</h2></button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>

    )
}


export default Sabina;