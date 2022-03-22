import s from './Button1.module.scss';
import btn1 from './btn1.svg';

const Button1 = () => {
    return (
        <button className={s.button1}>
            <a>Панель управления</a>
            <img src={btn1} alt="profile" />
        </button>
    );
};

export { Button1 };
