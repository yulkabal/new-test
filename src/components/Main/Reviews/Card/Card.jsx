import React from 'react';
import s from './Card.module.scss';

const SliderItem = ({ imgUrl, userName, text, date }) => {
    return (
        <div className={s.SliderItem}>
            <div className={s.SliderItem__wrapper}>
                <div className={s.SliderItem__wrapper__top}>
                    <div className={s.SliderItem__wrapper__top__img}>
                        <img src={imgUrl} />
                    </div>
                    <div className={s.SliderItem__wrapper__top__name}>
                        <h4>{userName}</h4>
                    </div>
                    <div>
                        <a>{date}</a>
                    </div>
                </div>
            </div>
            <div className={s.SliderItem__text}>
                <p> {text}</p>
            </div>
        </div>
    );
};

export default SliderItem;
