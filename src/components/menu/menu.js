import React from 'react';
import Translate from 'i18n-react';
import {Element} from'react-scroll';

import cx from 'classnames';
import {TrackedDiv, TrackDocument} from 'react-track';
import {topBottom, getDocumentRect, getDocumentElement, calculateScrollY} from 'react-track/tracking-formulas';

import Style from './menu.scss';
import TextContentBox from '../textContentBox/textContentBox';
import MenuContentBox from '../menuContentBox/menuContentBox';
import menuRamenSvg from '../../assets/icons/h_w_menu_1.svg';
import menuStarterSvg from '../../assets/icons/h_w_menu_2.svg';
import menuSaladSvg from '../../assets/icons/h_w_menu_3.svg';

const ramenItems = [
  {title: 'menu.ramen.gochu.title', description: 'menu.ramen.gochu.description'},
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
  {title: 'menu.salad.vegetables.title', description: 'menu.salad.vegetables.description'},
  {title: 'menu.salad.kombu.title', description: 'menu.salad.kombu.description'}
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
    <TrackDocument formulas={[getDocumentElement, getDocumentRect, calculateScrollY, topBottom]}>
      {(documentElement, documentRect, scrollY, topBottom) =>
      <Element name="menu">
        <div className="row">
          <div className="small-10 small-centered columns">
            <div className="menu-wrap">
              <TrackedDiv formulas={[topBottom]}>
                {(posTopBottom) =>
                  <div className={cx("menu-title scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+150})}>
                    <TextContentBox text='menu.title' css="run-font-large text-center full-width"/>
                  </div>
                }
              </TrackedDiv>
              <div className="row space-bottom-md">
                <div className="medium-4 large-4 columns show-for-medium">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("menu-icon-image menu-icon-image-ramen scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+150})}>
                        <img src={menuRamenSvg}/>
                      </div>
                    }
                  </TrackedDiv>
                </div>
                <div className="small-12 medium-8 large-8 columns">
                  <div className="row">
                    <div className="small-12 columns">
                      <TrackedDiv formulas={[topBottom]}>
                        {(posTopBottom) =>
                          <div className={cx("scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+300})}>
                            <ul className="reset">{menuRamenItems}</ul>
                          </div>
                        }
                      </TrackedDiv>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="small-12 medium-10 small-centered columns">
                  <div className="row small-half-padding-columns space-bottom-md">
                    <div className="medium-4 columns show-for-medium">
                      <TrackedDiv formulas={[topBottom]}>
                        {(posTopBottom) =>
                          <div className={cx("menu-icon-image menu-icon-image-starter scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+150})}>
                            <img src={menuStarterSvg} className="thumbnail"/>
                          </div>
                        }
                      </TrackedDiv>
                    </div>
                    <div className="small-12 medium-8 columns">
                      <div className="row">
                        <div className="small-12 small-centered columns">
                          <TrackedDiv formulas={[topBottom]}>
                            {(posTopBottom) =>
                              <div className={cx("scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+250})}>
                                <ul className="reset">{menuStarterItems}</ul>
                              </div>
                            }
                          </TrackedDiv>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row small-half-padding-columns">
                    <div className="medium-4 columns show-for-medium">
                      <TrackedDiv formulas={[topBottom]}>
                        {(posTopBottom) =>
                          <div className={cx("menu-icon-image menu-icon-image-salad scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+150})}>
                            <img src={menuSaladSvg} className="thumbnail"/>
                          </div>
                        }
                      </TrackedDiv>
                    </div>
                    <div className="small-12 medium-8 columns">
                      <div className="row">
                        <div className="small-12 small-centered columns">
                          <TrackedDiv formulas={[topBottom]}>
                            {(posTopBottom) =>
                              <div className={cx("scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+250})}>
                                <ul className="reset">{menuSaladItems}</ul>
                              </div>
                            }
                          </TrackedDiv>
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
      }</TrackDocument>
    );
}

export default Menu;
