import React from 'react';
import s from './Header.module.scss';
import photo from '../assets/img/Rectangle 1.png';
import logo from '../assets/img/logo.svg';
import { ControlBtn } from './ControlBtn/ControlBtn';

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.header__left}>
                <div className={s.header__left__photo}>
                    <img src={photo} />
                </div>
                <a>
                    Юлия<span> Бальжинимаева</span>
                </a>
            </div>
            <div className={s.header__center}>
                <img src={logo} />
            </div>
            <div className={s.header__right}>
                <ControlBtn />
            </div>
        </div>
    );
};

export { Header };
