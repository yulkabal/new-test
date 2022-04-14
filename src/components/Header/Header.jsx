import React from 'react';
import s from './Header.module.scss';
import photo from '../assets/img/photo3.jpg';
import logo from '../assets/img/logo1.png';
import { ControlBtn } from './ControlBtn/ControlBtn';

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.header__left}>
                <div className={s.header__left__photo}>
                    <img width={50} height={52} src={photo} />
                </div>
                <a>
                    Юлия<span> Бальжинимаева</span>
                </a>
            </div>
            <div className={s.header__center}>
                <img width={60} height={52} src={logo} />
            </div>
            <div className={s.header__right}>
                <ControlBtn />
            </div>
        </div>
    );
};

export { Header };
