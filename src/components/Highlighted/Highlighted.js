import clsx from "clsx"
import HighLightStyle from './highlighted.module.scss'
import { ReactComponent as Illustration } from '../../assets/images/illustration-working.svg';
import { Link } from "react-router-dom";
function Highlighted() {
  return (
    <div className={clsx('flex-b', 'grid', 'wide',HighLightStyle.wapperHighlighted)}>
      <div className={clsx(HighLightStyle.highlightContent)}>
        <div className={clsx(HighLightStyle.highlightContentItem)}>
          <h1 className={clsx(HighLightStyle.titleHighLightContent)}>More than just shorter links</h1>
          <p className={clsx(HighLightStyle.bodyHighLightContent)}>
            Build your brand's recognition and get detailed insights on how your links are performing
          </p>
          <Link className={clsx('btn', HighLightStyle.linkHighlight)} to='/'>Get started</Link>
        </div>
      </div>
      <div className={clsx(HighLightStyle.HighlightImage)}>
        <div className={clsx(HighLightStyle.HighlightImageItem)}>

        </div>
        {/* <Illustration className={clsx(HighLightStyle.HighlightImageItem)} /> */}
      </div>
    </div>
  )
}

export default Highlighted