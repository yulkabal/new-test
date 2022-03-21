import React from 'react';
import s from './Footer.module.scss';
import vk from './Img/VK.svg'
import sub from './Img/Subtract.svg'
import tel from './Img/Tel.svg'

function Footer() {
   return (
      <div className={s.footer}>
         <div className={s.footer__ilink}>
               <a>© iLINK ACADEMY.ALL RIGHTS RESERVED.{new Date().getFullYear()}</a>
         </div>
         <div className={s.footer__social}> 
            <button><img src={vk} className={s.footer__social__icon}/></button>
            <button><img src={sub} className={s.footer__social__icon}/></button>
            <button><img src={tel} className={s.footer__social__icon}/></button>  
         </div>
      </div>
   );
}
export { Footer };