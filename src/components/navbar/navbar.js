import React from 'react';
import Translate from 'i18n-react';
import navbarStyle from './navbar.scss';
import consts from '../../consts';

import {Link, Element, animateScroll} from'react-scroll';
import headerLogoSvg from '../../assets/icons/h_w_header_logo.svg';
import instagramSvg from '../../assets/icons/h_w_instagram_b.svg';
import instagramSvgPink from '../../assets/icons/h_w_instagram_b_p.svg';
import facebookSvg from '../../assets/icons/h_w_facebook_b.svg';
import facebookSvgPink from '../../assets/icons/h_w_facebook_b_p.svg';
import headerLogoMobileSvg from '../../assets/icons/h_w_m_logo.svg';
import instagramMobileSvg from '../../assets/icons/h_w_m_instagram.svg';
import facebookMobileSvg from '../../assets/icons/h_w_m_facebook.svg';

class NavBar extends React.Component {
  constructor(props){
    super();

    this.menuItems = [
      {path: 'ramen', title: 'ramen.title'},
      {path: 'aharoni', title: 'aharoni.title'},
      {path: 'menu', title: 'menu.title'},
      {path: 'gallery', title: 'gallery.title'},
      {path: 'visitus', title: 'visitUs.title'}
    ];

    this.state = {
      mobileNavVisible: false,
      instagramIcon: instagramSvg,
      facebookIcon: facebookSvg
    };

    this.scrollToTop = this.scrollToTop.bind(this);
    this.toggleMobileNav = this.toggleMobileNav.bind(this);
    this.getMenuNav = this.getMenuNav.bind(this);
    this.closeMobileNav = this.closeMobileNav.bind(this);
    this.setInstagramIconHover = this.setInstagramIconHover.bind(this);
    this.setInstagramIconNotHover = this.setInstagramIconNotHover.bind(this);
  }

  setInstagramIconHover() {
    this.setState({
      instagramIcon: instagramSvgPink
    });
  }

  setInstagramIconNotHover() {
    this.setState({
      instagramIcon: instagramSvg
    });
  }

  setInstagramIconHover() {
    this.setState({
      instagramIcon: instagramSvgPink
    });
  }

  setFacebookIconNotHover() {
    this.setState({
      facebookIcon: facebookSvg
    });
  }

  setFacebookIconHover() {
    this.setState({
      facebookIcon: facebookSvgPink
    });
  }


  scrollToTop() {
    animateScroll.scrollToTop();
  }

  toggleMobileNav() {
    this.setState({
      mobileNavVisible: !this.state.mobileNavVisible
    });
  }

  closeMobileNav() {
    if (this.state.mobileNavVisible) {
      this.setState({
        mobileNavVisible: false
      });
    }
  }


  getMenuNav(isMobile) {
    return this.menuItems.map((menuItem, index) => {
        return ( isMobile && menuItem.path === 'gallery'
          ? ''
          : <li key={index} className="menu-link">
            <Link activeClass="active" to={menuItem.path} spy={true} smooth={true} duration={800} onClick={this.closeMobileNav}>
              <Translate text={menuItem.title} />
            </Link>
          </li>
        );
      });
  }

  render() {
    let fadeClassName = this.props.scrollPosition === consts.scrollPositions.CURTAIN_REMOVED ? 'fadeIn' : 'fadeOut';
    let menuItems = this.getMenuNav();
    let mobileNavVisibleClass = this.state.mobileNavVisible ? 'mobile-nav-visible' : '';

    let mobileNav = this.state.mobileNavVisible
      ? (
        <div className="mobile-nav-wrap">
          <div>
            <img src={headerLogoMobileSvg} className="header-logo-img"/>
          </div>
          <ul className="menu mobile-menu run-font animated-fast fade">
            {this.getMenuNav(true)}
          </ul>
          <div className="mobile-nav-social">
            <div className="mobile-nav-social-inner">
              <a href="https://www.instagram.com/hirotlv/" target="_blank">
                <img src={instagramMobileSvg} className="mobile-nav-social-img"/>
              </a>
              <a href="https://www.facebook.com/HiroramenbyAharoni/" target="_blank">
                <img src={facebookMobileSvg} className="mobile-nav-social-img"/>
              </a>
            </div>
          </div>
        </div>
      )
      : '';

    return (
      <div className={`top-bar navbar animated-fast ${fadeClassName}`}>
        <div className="top-bar-left">
          <ul className="menu run-font show-for-medium">
            <li className="menu-link lang-selection">
              <div className="lang-selection-item active"><Translate text="languages.english" /></div>
              <div className="vertical-seperator"></div>
              <div className="lang-selection-item"><Translate text="languages.hebrew" /></div>
            </li>
            <li className="menu-link header-logo" onClick={this.scrollToTop}>
              <img src={headerLogoSvg} className="header-logo-img"/>
            </li>
            {menuItems}
          </ul>
          <div className="menu-link header-logo hide-for-medium" onClick={this.scrollToTop}>
            <img src={headerLogoSvg} className="header-logo-img"/>
          </div>
        </div>
        <div className="top-bar-right">
          <ul className="menu social-btns show-for-medium">
            <li className="instagram-btn" onMouseOver={() => this.setInstagramIconHover()} onMouseOut={() => this.setInstagramIconNotHover()}>
              <a href="https://www.instagram.com/hirotlv/" target="_blank">
                <img src={this.state.instagramIcon} />
              </a>
            </li>
            <li onMouseOver={() => this.setFacebookIconHover()} onMouseOut={() => this.setFacebookIconNotHover()}>
              <a href="https://www.facebook.com/HiroramenbyAharoni/" target="_blank">
                <img src={this.state.facebookIcon} />
              </a>
            </li>
          </ul>
          <button className={`toggle-mobile-nav-btn menu-icon dark hide-for-medium ${mobileNavVisibleClass}`} type="button"
            onClick={this.toggleMobileNav}>
          </button>
        </div>
        <div className={`animated ${fadeClassName}`}>
          {mobileNav}
        </div>
      </div>
      );
  }
}
export default NavBar;
