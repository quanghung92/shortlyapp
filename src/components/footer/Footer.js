import clsx from "clsx"
import { Link } from 'react-router-dom'
import footerStyle from './footer.module.scss'
import { ReactComponent as Logo } from '../../assets/images/logo-white.svg'
function Footer() {
  return (
    <div className={clsx(footerStyle.wapperFooterComp)}>
      <div className={clsx('flex-b', 'wide', 'grid', footerStyle.FooterComp)}>
        <div className={clsx(footerStyle.wapperLogoFooter)}><Logo className={clsx(footerStyle.logoFooter)} /></div>
        <div className={clsx(footerStyle.wapperFooterCompLink, 'flex-b')}>
          <div className={clsx(footerStyle.wapperFooterLink)}>
            <h3 className={clsx(footerStyle.wapperFooterLinkTitle)}>Features</h3>
            <ul className={clsx(footerStyle.FooterLinkList)}>
              <li className={clsx(footerStyle.FooterLinkItem)}>
                <Link className={clsx(footerStyle.FooterLink)} to={'/'}>Link Shortening</Link>
              </li>
              <li className={clsx(footerStyle.FooterLinkItem)}>
                <Link className={clsx(footerStyle.FooterLink)} to={'/'}>Branded Links</Link>
              </li>
              <li className={clsx(footerStyle.FooterLinkItem)}>
                <Link className={clsx(footerStyle.FooterLink)} to={'/'}>Analytics</Link>
              </li>
            </ul>
          </div>

          <div className={clsx(footerStyle.wapperFooterLink)}>
            <h3 className={clsx(footerStyle.wapperFooterLinkTitle)}>Resources</h3>
            <ul className={clsx(footerStyle.FooterLinkList)}>
              <li className={clsx(footerStyle.FooterLinkItem)}>
                <Link className={clsx(footerStyle.FooterLink)} to={'/'}>Blog</Link>
              </li>
              <li className={clsx(footerStyle.FooterLinkItem)}>
                <Link className={clsx(footerStyle.FooterLink)} to={'/'}>Developers</Link>
              </li>
              <li className={clsx(footerStyle.FooterLinkItem)}>
                <Link className={clsx(footerStyle.FooterLink)} to={'/'}>Support</Link>
              </li>
            </ul>
          </div>

          <div className={clsx(footerStyle.wapperFooterLink)}>
            <h3 className={clsx(footerStyle.wapperFooterLinkTitle)}>Company</h3>
            <ul className={clsx(footerStyle.FooterLinkList)}>
              <li className={clsx(footerStyle.FooterLinkItem)}>
                <Link className={clsx(footerStyle.FooterLink)} to={'/'}>About</Link>
              </li>
              <li className={clsx(footerStyle.FooterLinkItem)}>
                <Link className={clsx(footerStyle.FooterLink)} to={'/'}>Our Team</Link>
              </li>
              <li className={clsx(footerStyle.FooterLinkItem)}>
                <Link className={clsx(footerStyle.FooterLink)} to={'/'}>Careers</Link>
              </li>
              <li className={clsx(footerStyle.FooterLinkItem)}>
                <Link className={clsx(footerStyle.FooterLink)} to={'/'}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={clsx(footerStyle.footerSocial,'flex-b')}>
          <div className={clsx(footerStyle.iconSocial,footerStyle.iconSocialFacebook)}></div>
          <div className={clsx(footerStyle.iconSocial,footerStyle.iconSocialTwitter)}></div>
          <div className={clsx(footerStyle.iconSocial,footerStyle.iconSocialPinterest)}></div>
          <div className={clsx(footerStyle.iconSocial,footerStyle.iconSocialInstagram)}></div>
        </div>
      </div>
    </div>
  )
}

export default Footer