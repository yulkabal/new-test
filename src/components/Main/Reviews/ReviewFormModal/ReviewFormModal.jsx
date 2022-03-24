import React from 'react';
import { useForm } from 'react-hook-form';
import s from './ReviewFormModal.module.scss';
import x from './x.svg';
import plus from './plus.svg';
import info from './info.svg';
import * as yup from 'yup';
import st from './style.module.css';
import ReactModal from 'react-modal';


const schema = yup.object().shape({
    photo: yup
        .mixed()
        .required('Загрузить фото')
        .test('fileSize', 'Your file is too big!', (value) => {
            return value && value[0].size < 2000000;
        }),
});

const ReviewFormModal = ({isOpenFormModal, setIsOpenFormModal, }) => {
   const {
              register,
              handleSubmit,
              reset,
              formState: { errors },  
          } = useForm({
              mode: 'onBlur',
              validationSchema: schema,
          });


    const onSubmit = function (data) { 
      setIsOpenFormModal(false);
      alert('Успешно!Спасибо за отзыв о нашей компании :)', data);
    };
      

    return (
       <ReactModal 
       isOpen={isOpenFormModal} 
       onRequestClose={() => setIsOpenFormModal(false)}
       className={st.Modal}
       overlayClassName={st.OverlayModal}
       >
        <div className={s.container}>
            <div className={s.container__wrapper}>
                <div className={s.container__wrapper__top}>
                    <h2>Отзыв</h2>
                    <button onClick={() => setIsOpenFormModal(false)}>
                        <img src={x} />
                    </button>
                </div>
                <form
                    className={s.container__wrapper__form}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className={s.container__wrapper__form__top1}>
                        <label>
                            <p>Как вас зовут?</p>
                            <input
                                {...register('name', {
                                    required: 'Поле обязательно к заполнению',
                                    minLength: {
                                        value: 5,
                                        message: 'Минимум 5 символов',
                                    },
                                    maxLength: {
                                        value: 100,
                                        message: 'Максимум 100 символов',
                                    },
                                })}
                                placeholder="Имя Фамилия"
                            />
                        </label>
                        {errors?.name && <p>{errors?.name?.message}</p>}
                        <label className={s.upload}>
                            <img src={plus} />
                            Загрузить фото
                            <input
                                type="file"
                                name="photo"
                                accept=".jpg, .png, .jpeg"
                              //   value={photo}
                              //   onChange={handleChange}
                            />
                        </label>
                        {errors.photo && <p>{errors.photo.message}</p>}
                    </div>

                    <label className={s.container__wrapper__form__text}>
                        <p>Все ли вам понравилось?</p>
                        <input
                            {...register('text', {
                                required: 'Поле обязательно к заполнению',
                                maxLength: {
                                    value: 200,
                                    message: 'Максимум 200 символов',
                                },
                            })}
                            placeholder="Напишите пару слов о вашем опыте..."
                        />
                        {errors?.text?.message}
                    </label>
                    <div className={s.submit}>
                        <button type="submit">Отправить отзыв</button>
                        <div className={s.info}>
                            <img src={info} />
                            <p>
                                Все отзывы проходят модерацию в течение 2 часов
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </ReactModal>
    );
   
};
export { ReviewFormModal } ;
