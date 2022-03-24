import { React, useState, useRef } from 'react';
import { ReviewFormModal } from './ReviewFormModal/ReviewFormModal';
import Carousel from 'react-elastic-carousel';
import slide1 from '../../assets/img/user1.png';
import slide2 from '../../assets/img/user2.png';
import slide3 from '../../assets/img/user3.png';
import slide4 from '../../assets/img/user4.png';
import left from '../../assets/img/left.png';
import right from '../../assets/img/right.svg';
import plus from '../../assets/img/plus.svg';
import s from './Reviews.module.scss';
import Card from './Card/Card';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const slides = [
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



const Reviews = () => {
    const [isOpenFormModal, setIsOpenFormModal] = useState(false);

    const sliderRef = useRef(null);
   
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 576, itemsToShow: 2 },
    ];

    return (
        <div className={s.container}>
            <div className={s.container__wrapper}>
                <div className={s.reviews}>
                    <div className={s.reviews__top}>
                        <h2>Отзывы</h2>
                        <button
                            className={s.reviews__top__buttonReview}
                            onClick={() => setIsOpenFormModal(true)}
                        >
                            <img src={plus} />+ Добавить отзыв
                        </button>
                    </div>
                    <div></div>
                </div>

                <div className={s.slider}>
                    <Carousel
                        breakPoints={breakPoints}
                        ref={sliderRef}
                        outerSpacing={-24}
                        showArrows={false}
                        disableArrowsOnEnd={true}
                    >
                        {slides.map((slide, index) => (
                            <div className={s.slider__card}>
                                <Card
                                    key={index}
                                    imgUrl={slide.imgUrl}
                                    userName={slide.userName}
                                    date={slide.date}
                                    text={slide.text}
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
            <div className={s.container__buttonsWrapper}>
                <button
                    className={s.buttons}
                    onClick={() => sliderRef.current.slidePrev()}
                >
                    <img src={left} />
                </button>
                <button
                    className={s.buttons}
                    onClick={() => sliderRef.current.slideNext()}
                >
                    <img src={right} />
                </button>
            </div>

            <ReviewFormModal
                isOpenFormModal={isOpenFormModal}
                setIsOpenFormModal={() => setIsOpenFormModal(false)}
            />
        </div>
    );
};

export default Reviews;
