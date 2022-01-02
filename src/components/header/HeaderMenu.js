import {Link} from 'react-router-dom'
import clsx from 'clsx'
import style from './header.module.scss'
function HeaderMenu({onClick}) {

  return (
    <ul className={clsx(style.wapperHeaderMenu,'flex-b')}>
      <li className={clsx(style.headerMenuItem)}>
        <Link onClick={onClick} className={clsx(style.headerMenuLink)} to={'/features'}>Features</Link>
      </li>
      <li className={clsx(style.headerMenuItem)}>
        <Link onClick={onClick} className={clsx(style.headerMenuLink)} to={'/pricing'}>Pricing</Link>
      </li>
      <li className={clsx(style.headerMenuItem)}>
        <Link onClick={onClick} className={clsx(style.headerMenuLink)} to={'/resources'}>Resources</Link>
      </li>
    </ul>
  )
}

export default HeaderMenu