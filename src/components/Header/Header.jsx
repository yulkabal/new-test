import React from 'react';
import s from './Header.module.scss';
import photo from './images/Rectangle 1.png';
import logo from './images/logo.svg';
import { Button1 } from './Button1/Button1';

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.header__left}>
                <div className={s.header__left__photo}>
                    <img src={photo} />
                </div>
                <a>
                    Юлия <span>Бальжинимаева</span>
                </a>
            </div>
            <div className={s.header__center}>
                <img src={logo} />
            </div>
            <div className={s.header__right}>
                <Button1 />
            </div>
        </div>
    );
};

export { Header };
