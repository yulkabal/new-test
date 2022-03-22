import React from 'react';
import { useForm } from 'react-hook-form';
import s from './Form.module.scss';
import x from './x.svg';
import plus from './plus.svg';
import info from './info.svg';
export default function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onBlur',
    });

    const onSubmit = (data) =>
        alert(
            '<h2>Успешно!</h2><a> Спасибо за отзыв о нашей компании :)</a>',
            data
        );

    return (
        <div className={s.Form}>
            <div className={s.Form__wrapper}>
                <div className={s.Form__wrapper__top}>
                    <h2>Отзыв</h2>
                    {/* onClick={() => setShow(false) */}
                    <button>
                        <img src={x} />
                    </button>
                </div>
                <form
                    className={s.Form__wrapper__form}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className={s.Form__wrapper__form__top1}>
                        <label>
                            <p>Как вас зовут?</p>
                            <input
                                {...register('name', {
                                    required: 'Поле обязательно к заполнению',
                                    maxLength: {
                                        value: 100,
                                        message: 'Максимум 100 символов',
                                    },
                                })}
                                placeholder="Имя Фамилия"
                            />
                        </label>
                        <label className={s.upload}>
                            <img src={plus} />
                            Загрузить фото
                            <input
                                type="file"
                                name="photo"
                                // value={values.photo}
                                // onChange={handleChange}
                                accept="image/png, image/jpeg"
                            />
                        </label>
                    </div>

                    <label className={s.text}>
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
                    </label>
                    <div className={s.submit}>
                        <button type="submit">Отправить отзыв</button>
                        <div>
                            <img src={info} />
                            <p>
                                Все отзывы проходят модерацию в течение 2 часов
                            </p>
                        </div>
                    </div>
                </form>
                <div style={{ height: 40 }}>
                    {errors?.firstName && (
                        <p>
                            {errors?.firstName?.message ||
                                '<div><h3>Что-то не так...</h3><a>Не получилось отправить отзыв. Попробуйте еще раз!</a></div>'}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
