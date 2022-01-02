import clsx from "clsx"

import Highlighted from "../../components/Highlighted/Highlighted"
import ShortLink from "../../components/form/ShortLink"
import Advanced from "../../components/advanced/Advanced"
import Boots from "../../components/boots/Boots"

import homeStyle from './home.module.scss'
function HomePage() {
  return (
    <>
      <Highlighted />
      <div className={clsx(homeStyle.contentHome)}>
        <ShortLink />
        <Advanced />
      </div>
      <Boots />
    </>
  )
}

export default HomePage