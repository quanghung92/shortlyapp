import {Link} from 'react-router-dom'
import clsx from 'clsx'
import style from './header.module.scss'
function HeaderLoginMenu({onClick}) {
  return (
    <ul className={clsx(style.wapperLoginHeader,'flex-b')}>
      <li className={clsx(style.loginHeaderItem)}>
        <Link onClick={onClick} className={clsx(style.loginHeaderLink)} to={'/login'}>Login</Link>
      </li>
      <li className={clsx(style.loginHeaderItem)}>
        <Link onClick={onClick} className={clsx(style.loginHeaderLink)} to={'/register'}>Sign up</Link>
      </li>
    </ul>
  )
}

export default HeaderLoginMenu