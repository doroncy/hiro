import React from 'react';
import Translate from 'i18n-react';
import {Element} from'react-scroll';
import Style from './ramen.scss';
import TextContentBox from '../textContentBox/textContentBox';
import noodlesSvg from '../../assets/icons/h_w_noodles.svg';

const Ramen = (props) => {
  let scrollStyle = {
    transform: `translate3d(0px, ${props.scrollTop}px, 0px)`
  }
  return (
      <Element name="ramen" className='section'>
        <div className="row">
          <div className="small-10 small-centered columns">
            <div className="ramen-wrap">
              <div className="row small-half-padding-columns">
                <div className="small-5 medium-3 columns">
                  <div className="noodles-image scroll-anim" style={scrollStyle}>
                    <img src={noodlesSvg} />
                  </div>
                </div>
                <div className="small-7 medium-9 columns">
                  <div className="row">
                    <div className="small-12 medium-6 columns">
                      <div className="ramen-content-box scroll-anim" style={scrollStyle}>
                        <div className="space-bottom ramen-title">
                          <TextContentBox text='ramen.title' css="run-font-large text-center full-width"/>
                        </div>
                        <TextContentBox text='ramen.subtitle' css="ramen-subtitle text-uppercase run-font-medium full-width"/>
                      </div>
                    </div>
                    <div className="medium-6 columns show-for-medium">
                      <div className="ramen-content-box-description scroll-anim" style={scrollStyle}>
                        <TextContentBox text='ramen.description' css="run-font full-width"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row hide-for-medium">
                  <div className="ramen-content-box-description float-right">
                    <TextContentBox text='ramen.description' css="run-font full-width"/>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    );
}

export default Ramen;
