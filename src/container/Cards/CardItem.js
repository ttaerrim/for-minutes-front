import React from 'react'
import {Link} from 'react-router-dom';
import './Cards.css';

import HY from "../../images/HY.png";
import T_HY from "../../images/T_HY.jpg";
import JJ from "../../images/JJ.jpg";
import T_JJ from "../../images/T_JJ.jpg";
import TL from "../../images/TL.jpg";
import SJ from "../../images/SJ.jpg";
import T_TR from "../../images/T_TR.jpg";
import T_SJ from "../../images/T_SJ.jpg";

function CardItem() {
    return (
        <div>
    <div className="cards">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <li className="cards__item">
                <div className="cards__item__link">
                    <figure className="cards__item__pic-wrap1" data-category="Frontend">
                        <img src={T_TR}  alt="logo image" className="cards__item__img" />
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="card__item__text">TaeRim Lee</h5>
                        <p>#leader #react</p>
                    </div>
                </div>
            </li>
            <li className="cards__item">
                <div className="cards__item__link">
                    <figure className="cards__item__pic-wrap1" data-category="Frontend">
                        <img src={T_JJ}  alt="logo image" className="cards__item__img" />
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="card__item__text">JinJoo Yoo</h5>
                        <p>#webdesigner #react</p>
                    </div>
                </div>
            </li>
            <li className="cards__item">
                <div className="cards__item__link">
                    <figure className="cards__item__pic-wrap2" data-category="Backend">
                        <img src={T_SJ}  alt="logo image" className="cards__item__img" />
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="card__item__text">SuJi Kang</h5>
                        <p>#django #server</p>
                    </div>
                </div>
            </li>
            <li className="cards__item">
                <div className="cards__item__link">
                    <figure className="cards__item__pic-wrap2" data-category="Backend">
                        <img src={T_HY}  alt="logo image" className="cards__item__img" />
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="card__item__text">HaYeon Lee</h5>
                        <p>#django #server</p>
                    </div>
                </div>
            </li>
        </ul>
        </div>
        </div>
        </div>
    )
}

export default CardItem
