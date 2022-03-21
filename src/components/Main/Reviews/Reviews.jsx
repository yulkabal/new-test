import s from './Reviews.module.scss';
import plus from './plus.svg';
// import slider from './Slider.svg';
import SliderCarousel from './Slider/SliderCarousel';

import "swiper/css/bundle";


const Reviews = () => {
    
        return (
            <div className={s.reviews}>
                <div className={s.reviews__top}>
                  <h2>Отзывы</h2>
                  <button className={s.reviews__top__button2}>
                     <img src={plus} />
                     Добавить отзыв
                  </button>
               </div>
               <div>
               {/* <SliderCarousel />    */}
               </div>
            </div>
        );
    }

export default Reviews;