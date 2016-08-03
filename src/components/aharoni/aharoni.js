import React from 'react';
import Translate from 'i18n-react';
import {Element} from'react-scroll';
import Style from './aharoni.scss';
import TextContentBox from '../textContentBox/textContentBox';
import aharoniHeadSvg from '../../assets/icons/h_w_aharoni_head.svg';

import cx from 'classnames';
import {TrackedDiv, TrackDocument} from 'react-track';
import {topBottom, getDocumentRect, getDocumentElement, calculateScrollY} from 'react-track/tracking-formulas';

const Ramen = (props) => {
  return (
    <TrackDocument formulas={[getDocumentElement, getDocumentRect, calculateScrollY, topBottom]}>
      {(documentElement, documentRect, scrollY, topBottom) =>
      <Element name="aharoni" className='section-margin'>
        <div className="row">
          <div className="small-10 small-centered columns">
            <div className="aharoni-wrap">
              <div className="row small-half-padding-columns">
                <div className="small-12 small-centered medium-uncentered large-4 columns">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("aharoni-head-image scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+150})}>
                        <img src={aharoniHeadSvg} />
                      </div>
                    }
                  </TrackedDiv>
                </div>
                <div className="small-12 small-centered medium-uncentered large-8 columns">
                  <div className="row">
                    <div className="small-12 medium-11 columns">
                      <TrackedDiv formulas={[topBottom]}>
                        {(posTopBottom) =>
                          <div className={cx("aharoni-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+350})}>
                            <div className="space-bottom aharoni-title">
                              <TextContentBox text='aharoni.title' css="run-font-large text-center full-width"/>
                            </div>
                            <TextContentBox text='aharoni.subtitle' css="aharoni-subtitle text-uppercase run-font-medium full-width"/>
                            <div className="aharoni-content-box-description">
                              <TextContentBox text='ramen.description' css="run-font full-width"/>
                            </div>
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
      </Element>
      }</TrackDocument>
    );
}

export default Ramen;
