import React from 'react';
import Translate from 'i18n-react';
import {Element} from'react-scroll';
import Style from './aharoni.scss';
import TextContentBox from '../textContentBox/textContentBox';
import aharoniHeadSvg from '../../assets/icons/h_w_aharoni_head.svg';

const Ramen = (props) => {
  return (
      <Element name="aharoni" className='section'>
        <div className="row">
          <div className="small-10 small-centered columns">
            <div className="aharoni-wrap">
              <div className="row small-half-padding-columns">
                <div className="small-5 large-4 columns">
                  <div className="aharoni-head-image">
                    <img src={aharoniHeadSvg} />
                  </div>
                </div>
                <div className="small-7 large-8 columns">
                  <div className="row">
                    <div className="small-12 medium-11 columns">
                      <div className="aharoni-content-box">
                        <div className="space-bottom aharoni-title">
                          <TextContentBox text='aharoni.title' css="run-font-large text-center full-width"/>
                        </div>
                        <TextContentBox text='aharoni.subtitle' css="aharoni-subtitle text-uppercase run-font-medium full-width"/>
                        <div className="aharoni-content-box-description">
                          <TextContentBox text='ramen.description' css="run-font full-width"/>
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

export default Ramen;
