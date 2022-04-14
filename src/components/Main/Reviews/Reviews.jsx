import { React, useState, useRef } from 'react';
import { ReviewFormModal } from './ReviewFormModal/ReviewFormModal';
import Carousel from 'react-elastic-carousel';
import left from '../../assets/img/left.png';
import right from '../../assets/img/right.svg';
import plus from '../../assets/img/plus.svg';
import s from './Reviews.module.scss';
import Card from './Card/Card';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Reviews = ({ slides, setUsersData }) => {
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
                        {slides.map((slide) => (
                            <div className={s.slider__card}>
                                <Card
                                    key={slide.id}
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
                usersData={slides}
                setUsersData={setUsersData}
            />
        </div>
    );
};

export default Reviews;
