import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
import 'react-toastify/dist/ReactToastify.min.css';

function ModalToast() {
    const notify = () => toast('Wow so easy !');

    toast.success(
        '<h1>Успешно!</h1> <p>Спасибо за отзыв :) </p>',
        {
            icon: ({ theme, type }) => <img src="url" />,
            position: toast.POSITION.BOTTOM_RIGHT,
        }
    );

    toast.error(
        '<h1>Что-то не так...</h1> <p>Не получилось отправить отзыв. Попробуйте еще раз!</p>',
        {
            icon: ({ theme, type }) => <img src="url" />,
            position: toast.POSITION.BOTTOM_RIGHT,
        }
    );
    return (
        <div>
            <button onClick={notify}>Notify !</button>
            <ToastContainer autoClose={10000} draggable={false} />
        </div>
    );
}
export { ModalToast };
