import clsx from "clsx"
import advancedStyle from './advanced.module.scss'
import { ReactComponent as BrandRecognition } from '../../assets/images/icon-brand-recognition.svg'
import { ReactComponent as DetailedRecords } from '../../assets/images/icon-detailed-records.svg'
import { ReactComponent as FullyCustomizable } from '../../assets/images/icon-fully-customizable.svg'
function Advanced() {
  return (
    <div className={clsx(advancedStyle.wapperAdvancedPage, 'grid', 'wide')}>
      <div className={clsx(advancedStyle.wapperAdvancedHeader)}>
        <h2 className={clsx(advancedStyle.AdvancedHeaderTile)} >Advanced Statistics</h2>
        <p className={clsx(advancedStyle.AdvancedHeadercontents)}>
          Track how your links are performing across the web with our advanced statistic dashboard.
        </p>
      </div>
      <div className={clsx(advancedStyle.wapperAdvancedBody)}>
        <div className={clsx(advancedStyle.AdvancedBodyItem)}>
          <div className={clsx(advancedStyle.AdvancedBodyItemIcon)}>
            <BrandRecognition />
          </div>
          <h3 className={clsx(advancedStyle.AdvancedBodyItemTitle)}>Brand Recognition</h3>
          <p className={clsx(advancedStyle.AdvancedBodyItemcontent)}>
            Brand Recognition Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content
          </p>
        </div>
        <div className={clsx(advancedStyle.AdvancedBodyItem,advancedStyle.AdvancedBodyItemDetailed)}>
          <div className={clsx(advancedStyle.AdvancedBodyItemIcon)}>
            <DetailedRecords />
          </div>
          <h3 className={clsx(advancedStyle.AdvancedBodyItemTitle)}>Detailed Records</h3>
          <p className={clsx(advancedStyle.AdvancedBodyItemcontent)}>
            Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className={clsx(advancedStyle.AdvancedBodyItem,advancedStyle.AdvancedBodyItemFully)}>
          <div className={clsx(advancedStyle.AdvancedBodyItemIcon)}>
            <FullyCustomizable />
          </div>
          <h3 className={clsx(advancedStyle.AdvancedBodyItemTitle)}>Fully Customizable</h3>
          <p className={clsx(advancedStyle.AdvancedBodyItemcontent)}>
            Improve brand awareness and content discoverability through customizable links, supercharging audience engagement
          </p>
        </div>
      </div>
    </div>
  )
}

export default Advanced