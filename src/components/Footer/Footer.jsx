import React from 'react';
import s from './Footer.module.scss';
import vk from '../assets/img/VK.svg';
import sub from '../assets/img/Subtract.svg';
import tel from '../assets/img/Tel.svg';

function Footer() {
    return (
        <div className={s.footer}>
            <div className={s.footer__name}>
                <a>
                    © TEST LANDING. ALL RIGHTS RESERVED.
                    {new Date().getFullYear()}
                </a>
            </div>
            <div className={s.footer__social}>
                <button>
                    <img src={vk} className={s.footer__social__icon} />
                </button>
                <button>
                    <img src={sub} className={s.footer__social__icon} />
                </button>
                <button>
                    <img src={tel} className={s.footer__social__icon} />
                </button>
            </div>
        </div>
    );
}
export { Footer };
