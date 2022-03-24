import React from 'react';
import s from './Main.module.scss';
import photoUser from '../assets/img/user.png';
import icon from '../assets/img/icon.svg';
import woman from '../assets/img/woman.svg';
import Reviews from '../Main/Reviews/Reviews';

const Main = () => {
    return (
        <div className={s.main}>
            <div className={s.main__welcome}>
                <h1>Добро пожаловать в академию!</h1>
            </div>
            <div className={s.userInfo}>
                <img className={s.userInfo__photoUser} src={photoUser} />
                <div className={s.userInfo__info}>
                    <div className={s.userInfo__info__top}>
                        <h3 className={s.userInfo__info__top__name}>
                            Юлия Бальжинимаева
                        </h3>
                        <a className={s.userInfo__info__top__date}>
                            02.12.1997
                        </a>
                    </div>
                    <div className={s.userInfo__info__info}>
                        <div>
                            <b>Город: </b>
                            <span>Томск</span>
                        </div>
                        <div>
                            <b>Пол: </b>
                            <span>женщина </span>
                            <img src={woman} />
                        </div>
                        <div>
                            <b>Возраст: </b>
                            <span>24</span>
                        </div>
                    </div>
                    <div className={s.userInfo__info__text}>
                        <a>
                            О себе:{' '}
                            <span>
                                Всем привет! Меня зовут Юлия, мне 24 года. В
                                2021 году окончила СибГМУ по специальности
                                Педиатрия. Но поняла, что медицина не мое и
                                начала изучать фронтенд разработку. Сейчас 
                                активно изучаю REACT, выполняю свои учебные 
                                проекты, очень хочу попасть к Вам на стажировку
                                и поработать над реальным проектом.

                            </span>
                        </a>
                    </div>
                    <div className={s.userInfo__info__icon}>
                        <img src={icon} />
                        <a> К сожалению у меня нет домашних животных :(</a>
                    </div>
                </div>
            </div>
            <div>
                <Reviews />
            </div>
        </div>
    );
};

export { Main };
