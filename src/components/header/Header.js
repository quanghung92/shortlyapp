import {useState} from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx';
import style from './header.module.scss'
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import HeaderMenu from './HeaderMenu';
import HeaderLoginMenu from './HeaderLoginMenu';
function Header() {
  const [menuOpen, setmenuOpen] = useState(false)
  const handleToggleMenu=()=>{
    setmenuOpen(!menuOpen);
  }

  const CloseMenu = ()=>{
    setmenuOpen(false);
  }
  return (
    <div className={clsx(style.waperHeader)}>
      <div className={clsx('flex-b')}>
        <Link to='/'><Logo /></Link>
        <div onClick={handleToggleMenu} className={clsx(style.toggleMenu)}></div>
        <div className={clsx(style.waperMenuLinkHeader,'flex-b',{[style.toggleMenuWapper]:menuOpen})}>
          <HeaderMenu onClick={CloseMenu}/>
          <HeaderLoginMenu onClick={CloseMenu}/>
        </div>
      </div>
    </div>
  )
}

export default Header