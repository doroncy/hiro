import React from 'react';
import Translate from 'i18n-react';
import {Element} from'react-scroll';
import Style from './menu.scss';
import TextContentBox from '../textContentBox/textContentBox';
import MenuContentBox from '../menuContentBox/menuContentBox';
import menuRamenSvg from '../../assets/icons/h_w_menu_1.svg';
import menuStarterSvg from '../../assets/icons/h_w_menu_2.svg';
import menuSaladSvg from '../../assets/icons/h_w_menu_3.svg';

const ramenItems = [
  {title: 'menu.ramen.dandan.title', description: 'menu.ramen.dandan.description'},
  {title: 'menu.ramen.chicken.title', description: 'menu.ramen.chicken.description'},
  {title: 'menu.ramen.tofu.title', description: 'menu.ramen.tofu.description'}
];

const starterItems = [
  {title: 'menu.starter.wings.title', description: 'menu.starter.wings.description'},
  {title: 'menu.starter.chickenGyoza.title', description: 'menu.starter.chickenGyoza.description'},
  {title: 'menu.starter.veganGyoza.title', description: 'menu.starter.veganGyoza.description'}
];

const saladItems = [
  {title: 'menu.salad.daikon.title', description: 'menu.salad.daikon.description'},
  {title: 'menu.salad.eggplant.title', description: 'menu.salad.eggplant.description'},
  {title: 'menu.salad.cucumber.title', description: 'menu.salad.cucumber.description'},
  {title: 'menu.salad.beans.title', description: 'menu.salad.beans.description'},
  {title: 'menu.salad.vegetables.title', description: 'menu.salad.vegetables.description'}
];


const menuItemsBuilder = (items) => {
  return items.map((item, index) => {
      return (
        <li key={index} className="menu-item">
          <MenuContentBox title={item.title} description={item.description}/>
        </li>
      );
    });
}
const Menu = (props) => {
  let menuRamenItems = menuItemsBuilder(ramenItems);
  let menuStarterItems = menuItemsBuilder(starterItems);
  let menuSaladItems = menuItemsBuilder(saladItems);
  return (
      <Element name="menu">
        <div className="row">
          <div className="small-10 small-centered columns">
            <div className="menu-wrap">
              <div className="menu-title">
                <TextContentBox text='menu.title' css="run-font-large text-center full-width"/>
              </div>
              <div className="row space-bottom-md">
                <div className="medium-4 large-4 columns show-for-medium">
                  <div className="menu-icon-image menu-icon-image-ramen">
                    <img src={menuRamenSvg}/>
                  </div>
                </div>
                <div className="small-12 medium-8 large-8 columns">
                  <div className="row">
                    <div className="small-12 columns">
                      <ul className="reset">{menuRamenItems}</ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="small-12 medium-10 small-centered columns">
                  <div className="row small-half-padding-columns space-bottom-md">
                    <div className="medium-4 columns show-for-medium">
                      <div className="menu-icon-image menu-icon-image-starter">
                        <img src={menuStarterSvg} className="thumbnail"/>
                      </div>
                    </div>
                    <div className="small-12 medium-8 columns">
                      <div className="row">
                        <div className="small-12 small-centered columns">
                          <ul className="reset">{menuStarterItems}</ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row small-half-padding-columns">
                    <div className="medium-4 columns show-for-medium">
                      <div className="menu-icon-image menu-icon-image-salad">
                        <img src={menuSaladSvg} className="thumbnail"/>
                      </div>
                    </div>
                    <div className="small-12 medium-8 columns">
                      <div className="row">
                        <div className="small-12 small-centered columns">
                          <ul className="reset">{menuSaladItems}</ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    );
}

export default Menu;
