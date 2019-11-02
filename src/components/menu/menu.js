import React from 'react';
import Translate from 'i18n-react';
import {Element} from'react-scroll';
import _ from 'lodash';
import cx from 'classnames';
import {TrackedDiv, TrackDocument} from 'react-track';
import {topBottom, getDocumentRect, getDocumentElement, calculateScrollY} from 'react-track/tracking-formulas';

import Style from './menu.scss';
import TextContentBox from '../textContentBox/textContentBox';
import MenuSection from './menuSection';

import MenuContentBox from '../menuContentBox/menuContentBox';
import businessSalad from '../../assets/icons/salad.svg';
import businessMain from '../../assets/icons/main.svg';
import businessTea from '../../assets/icons/tea.svg';

import SARONA_MENU from './sarona';
import RAMAT_AVIV_MENU from './ramatAviv';

const menus = {
  sarona: SARONA_MENU,  
  ramatAviv: RAMAT_AVIV_MENU
};

const locations = [ 'sarona', 'ramatAviv'];

const menuItemsBuilder = (items, language) => {
  return items.map((item, index) => {
      return (
        <li key={index} className="menu-item">
          <MenuContentBox language={`${language}`}
            title={`${language}.${item.title}`}
            description={`${language}.${item.description}`} />
        </li>
      );
    });
}

class Menu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      location: 'ramatAviv',
      menu: 'dinnerMenu'
    };    
  }
  
  buildMenuSections() {        
    const menuSections = _.get(menus, `${this.state.location}.${this.state.menu}`, []);  
    const sectionAmount = _.size(menuSections);
    
    return _.chain(menuSections)
      .chunk(sectionAmount/2)
      .map((chunk) => {
        return (
          <div className="menu-sections-chunk">
          {this.buildSectionsChunks(chunk)}
          </div>
        );
      }) 
      .value();
  }

  buildLocationsButtons() {   
    const locationBtnClassName = this.props.language === 'heb' ? 'assistant-bold' : 'run-font-medium';     
    return locations.map((loc, index) => {
      const activeStyle = loc === this.state.location
        ? 'active'
        : '';

      return (        
        <div key={index} className="medium-6 columns">
          <a className={`loc-btn ${activeStyle}`} onClick={this.changeLocation.bind(this, loc)}>
            <TrackedDiv formulas={[topBottom]}>
              {(posTopBottom) =>
                <div className={cx("menu-title scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+180})}>
                  <TextContentBox text={`${this.props.language}.visitUs.${loc}.name`} css={`${locationBtnClassName} text-center full-width`}/>
                </div>
              }
            </TrackedDiv>
          </a>            
      </div>  
      );
    }); 
  }
  
  buildSubMenuButtons() {        
    const locationMenus = _.get(menus, this.state.location, []);    
    const menuButtuns = _.keys(locationMenus);    
    const subTitleFont = this.state.language === 'en' ? 'run-font' : 'assistant-regular';
    return menuButtuns.map((menuBtn, index) => {
      const title = `${this.props.language}.menu.${menuBtn}`;          
      const isActive = this.state.menu === menuBtn
        ? 'active'
        : '';
      return (
        <div key={index} className={`${subTitleFont} menu-button ${isActive}`}
          onClick={this.changeMenu.bind(this, menuBtn)}>
          <Translate text={title} /> 
        </div>
      );
    }); 
  }

  getIconElement(icon) {
    return <img className="group-icon" src={icon} />    
  }
  
  buildSectionsChunks(chunk) {    
    return _.map(chunk, (section, index) => {            
      if (section.groups) {
        const groups = section.groups.map((group, index) => {          
          return (
            <div key={index} className="menu-section-wrapper">
              <MenuSection language={`${this.props.language}`}
                section={group} />
            </div>
          );
        });                
        const titleFont = this.props.language === 'en' ? 'run-font-medium' : 'assistant-bold';
        const groupTitle = `${this.props.language}.menu.${section.title}`;
        const groupExtraTitle = section.extraTitle
          ? `${this.props.language}.menu.${section.extraTitle}`
          : '';
        const groupIcon = section.icon 
          ? this.getIconElement(section.icon)
          : '';                  
        return (
          <div>
            <div className={`group-title ${titleFont}`}>
              {groupIcon}
              <Translate text={groupTitle} />
              <span className="group-extra-title"><Translate text={groupExtraTitle} /></span>              
            </div>
            {groups}
          </div>          
        );
      } else {
        return (
          <div key={index} className="menu-section-wrapper">
            <MenuSection language={`${this.props.language}`}
              section={section} />
          </div>
        );
      }     
    });     
  }

  changeLocation(location) {        
    const menu = location === 'ramatAviv'
      ? 'businessMenu' 
      : 'foodMenu';
    this.setState({
      location,
      menu
    });
  }

  changeMenu(menu) {
    this.setState({menu});
  }

  buildBusinessHeader() {
    const font = this.state.language === 'en' ? 'run-font' : 'assistant-regular';
    const titleFont = this.props.language === 'en' ? 'run-font-medium' : 'assistant-bold';
    const title = `${this.props.language}.menu.businessIncludes.title`;          
    const footer = `${this.props.language}.menu.businessIncludes.price`;       
    const ramatAvivLunchMealTitle = `${this.props.language}.menu.ramatAvivLunchMealTitle`;          
    const ramatAvivLunchMealFooter = `${this.props.language}.menu.ramatAvivLunchMealFooter`;       
    
    return (
      <div className="business-header">        
        <div className={`${titleFont} business-header-title`}>
          <Translate text={ramatAvivLunchMealTitle} /> 
        </div>
        <div className={`${titleFont} business-header-body`}>          
          <img src={businessSalad} />
          <Translate text={`${this.props.language}.menu.saladNormal.title`} />           
        </div>
        <div className={`${titleFont} business-header-body`}>          
          +
        </div>
        <div className={`${titleFont} business-header-body`}>          
          <img src={businessMain} />
          <Translate text={`${this.props.language}.menu.main`} />           
        </div>
        <div className={`${font} business-header-footer`}>
          <Translate text={ramatAvivLunchMealFooter} /> 
        </div>
      </div>         
    );      
  }

  render() {
    const sectionTitleClassName = this.props.language === 'heb' ? 'assistant-extra-bold' : 'run-font-large';  
    const locationBtns = this.buildLocationsButtons();
    const menuBtns = this.buildSubMenuButtons();
    const menuSections = this.buildMenuSections();    
    const businessHeader = this.state.menu === 'businessMenu'
      ? this.buildBusinessHeader()
      : '';

    return (
      <TrackDocument formulas={[getDocumentElement, getDocumentRect, calculateScrollY, topBottom]}>
        {(documentElement, documentRect, scrollY, topBottom) =>
        <Element name="menu">
          <div className={`row ${this.props.language}`}>
            <div className="small-10 small-centered columns">
              <div className="menu-wrap">
                <div className="menu-wrap-header">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("menu-title scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+150})}>
                        <TextContentBox text={`${this.props.language}.menu.title`} css={`${sectionTitleClassName} text-center full-width`}/>
                      </div>
                    }
                  </TrackedDiv>
                  <div className="row space-bottom-md pos-relative">
                    {locationBtns}                                 
                  </div> 
                </div>
              
                <div className="text-contentbox-wrap full-width menu-sections-wrapper">
                    <div className="menu-header">
                      {menuBtns}
                    </div>
                    {businessHeader}
                    <div className="menu-body">
                      {menuSections}
                    </div>
                </div>         
              </div>
            </div>
          </div>
        </Element>
        }</TrackDocument>
      );
  }
}

export default Menu;
