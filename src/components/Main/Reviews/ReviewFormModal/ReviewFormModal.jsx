import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import s from './ReviewFormModal.module.scss';
import x from '../../../assets/img/x.svg';
import plus from '../../../assets/img/plus.svg';
import info from '../../../assets/img/info.svg';
import loading from '../../../assets/img/loading.svg';
import deleteIm from '../../../assets/img/Delete.svg';
import jpg from '../../../assets/img/uploadfile.svg';
import * as yup from 'yup';
import st from './style.module.css';
import ReactModal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = yup.object().shape({
    photo: yup
        .mixed()
        .required('Загрузить фото')
        .test('fileSize', 'Your file is too big!', (value) => {
            return value && value[0].size < 2000000;
        }),
});

const ReviewFormModal = ({
    usersData,
    setUsersData,
    isOpenFormModal,
    setIsOpenFormModal,
}) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        mode: 'onBlur',
        validationSchema: schema,
    });

    const [state, setState] = useState({ loading: false, fileName: '' });

    const onSubmit = (data) => {
        const dateNow = new Date();
        const newObj = {
            id: 5,
            imgUrl: data?.photo,
            date: `${dateNow.getDate()}.${dateNow.getMonth()}.${dateNow.getFullYear()}`,
            userName: data?.name,
            text: data?.text,
        };

        const newArray = [newObj, ...usersData];

        setUsersData(newArray);
        localStorage.setItem('users', JSON.stringify(newArray));
        reset();
        setIsOpenFormModal(false);
        toast.success('Успешно!');
    };

    const imageUpload = (e) => {
        setState({ loading: true, fileName: e.target.files[0].name });
    };
    const deleteFile = () => {
        setState({ ...state, loading: false });
    };

    return (
        <>
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
                                            required:
                                                'Поле обязательно к заполнению',
                                            minLength: {
                                                value: 5,
                                                message: 'Минимум 5 символов',
                                            },
                                            maxLength: {
                                                value: 100,
                                                message:
                                                    'Максимум 100 символов',
                                            },
                                            pattern: /^[A-Za-z]+$/i,
                                        })}
                                        placeholder="Имя Фамилия"
                                    />
                                </label>
                                {errors?.name && <p>{errors?.name?.message}</p>}
                                <div>
                                    <label className={s.upload}>
                                        <img src={plus} />
                                        Загрузить фото
                                        <input
                                            type="file"
                                            id="photo"
                                            name="photo"
                                            accept=".jpg, .png, .jpeg"
                                            onChange={imageUpload}
                                        />
                                    </label>
                                    {state.loading && (
                                        <Loading
                                            fileName={state.fileName}
                                            reset={deleteFile}
                                        />
                                    )}
                                </div>

                                {errors.photo && <p>{errors.photo.message}</p>}
                            </div>
                            <label className={s.container__wrapper__form__text}>
                                <p>Все ли вам понравилось?</p>
                                <textarea
                                    {...register('text', {
                                        required:
                                            'Поле обязательно к заполнению',
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
                                        Все отзывы проходят модерацию в течение
                                        2 часов
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </ReactModal>
            <ToastContainer
                position="bottom-right"
                autoClose={6000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover={false}
            />
        </>
    );
};

const Loading = ({ fileName, reset }) => {
    const [state, setState] = useState(false);

    setTimeout(() => {
        setState(true);
    }, 2000);

    return (
        <div className="">
            <div className={s.loading}>
                <img src={jpg} alt="jpg" />
                <div className={s.loading__name}>
                    <span>{fileName}</span>
                    <div className={s.loading__name__animation}>
                        <div className={s.loading__name__animation__load}></div>
                    </div>
                </div>
                {!state ? (
                    <img src={loading} />
                ) : (
                    <img src={deleteIm} onClick={reset} />
                )}
            </div>
        </div>
    );
};

export { ReviewFormModal };
