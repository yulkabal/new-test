import React, { useState } from 'react';
import s from './Main.module.scss';
import photoUser from '../assets/img/photo3.jpg';
import slide1 from '../assets/img/user1.png';
import slide2 from '../assets/img/user2.png';
import slide3 from '../assets/img/user3.png';
import slide4 from '../assets/img/user4.png';
import icon from '../assets/img/icon.svg';
import woman from '../assets/img/woman.svg';
import Reviews from '../Main/Reviews/Reviews';

const defaultUsers = [
    {
        id: 1,
        imgUrl: slide1,
        userName: 'Буба Бубенцов',
        date: '08.01.2022',
        text: 'Отличный коллектив, руководители понимают сам процесс работы каждого сотрудника и помогают всем без исключения. Система KPI позволяет реально хорошо зарабатывать по простому принципу - чем больше и лучше ты работаешь, тем больше денег получаешь. Соцпакет - отличная страховка ДМС, организовали курсы английского языка бесплатно, оплачивают тренажерный зал. Зарплату выплачивают всегда вовремя.',
    },
    {
        id: 2,
        imgUrl: slide2,
        userName: 'Илья Анташкевич',
        date: '08.01.2022',
        text: 'Год назад попытал счастье, откликнулся на вакансию, прошел собес и попал в компанию.Долго переживал что будет тяжело влиться, но тут прям классные ребята работают, все на одной волне. Всегда готовы помочь с любым вопросом. Для эффективной работы здесь нужно хорошо знать иностранные языки.',
    },
    {
        id: 3,
        imgUrl: slide3,
        userName: 'Юрина Маргарита',
        date: '26.12.2021',
        text: 'Наша компания благодарна фирме ilink за сотрудничество. Хотелось бы отметить отличную работу сотрудников: все было выполнено качественно, со знанием дела, в установленные сроки. За время работы с компанией значительно увеличилась аудитория, сайт приносит стабильный доход, контент уникальный, грамотный и качественный. Будет продолжать работу и дальше. Мы довольны, что доверили создание сайта компании ilink.',
    },
    {
        id: 4,
        imgUrl: slide4,
        userName: 'Дмитрий Иванов',
        date: '16.12.2021',
        text: 'Отвечал за найм и адаптацию сотрудников в компании, за поддержание на нужном уровне HR-бренда и трудового настроя коллектива. В компанию пришел без опыта работы HR-ом. Всему научился здесь. Как теории, так и практике. Набрал опыт достаточно быстро. Есть программа обучения, поощряются различные курсы, и это большой плюс. В коллективе очень дружная атмосфера. Все дружелюбные, амбициозные.',
    },
];

const Main = () => {
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify(defaultUsers));
    }

    const users = JSON.parse(localStorage.getItem('users'));

    const [usersData, setUsersData] = useState(users);
    return (
        <div className={s.main}>
            <div className={s.main__welcome}>
                <h1>Добро пожаловать!</h1>
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
                                проекты, очень хочу попасть к Вам в команду и
                                поработать над реальным проектом.
                            </span>
                        </a>
                    </div>
                    <div className={s.userInfo__info__icon}>
                        <img src={icon} />
                        <a> Домашние жмвотные: нет :(</a>
                    </div>
                </div>
            </div>
            <div>
                <Reviews slides={usersData} setUsersData={setUsersData} />
            </div>
        </div>
    );
};

export { Main };
