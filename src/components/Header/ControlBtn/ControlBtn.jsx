import s from './ControlBtn.module.scss';
import btn1 from '../../assets/img/btn1.svg';

const ControlBtn = () => {
    return (
        <button className={s.ControlBtn}>
            <a>Панель управления</a>
            <img src={btn1} alt="profile" />
        </button>
    );
};

export { ControlBtn };
