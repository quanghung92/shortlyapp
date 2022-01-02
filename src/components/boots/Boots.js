import clsx from "clsx"
import bootsStyle from './boots.module.scss'
import {Link} from 'react-router-dom'
function Boots() {
  return (
    <div className={clsx(bootsStyle.wapperBoots)}>
      <h2 className={clsx(bootsStyle.wapperBootsTile)}>Boost your links today</h2>
      <div className={clsx(bootsStyle.wapperBootsButton)}>
      <Link className={clsx(bootsStyle.BootsButton,'btn')} to='/'>Get started</Link>
      </div>
    </div>
  )
}

export default Boots