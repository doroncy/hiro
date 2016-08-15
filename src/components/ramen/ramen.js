import React from 'react';
import Translate from 'i18n-react';
import {Element} from'react-scroll';
import Style from './ramen.scss';
import TextContentBox from '../textContentBox/textContentBox';
import noodlesSvg from '../../assets/icons/h_w_noodles.svg';

import cx from 'classnames';
import {TrackedDiv, TrackDocument} from 'react-track';
import {topBottom, getDocumentRect, getDocumentElement, calculateScrollY} from 'react-track/tracking-formulas';

const Ramen = (props) => {
  return (
    <TrackDocument formulas={[getDocumentElement, getDocumentRect, calculateScrollY, topBottom]}>
      {(documentElement, documentRect, scrollY, topBottom) =>
      <Element name="ramen" className='section-margin'>
        <div className="row">
          <div className="small-10 small-centered columns">
            <div className="ramen-wrap">
              <div className="row small-half-padding-columns">
                <div className="small-12 medium-3 columns">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("noodles-image scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+150})}>
                        <img src={noodlesSvg} />
                      </div>
                    }
                  </TrackedDiv>
                </div>
                <div className="small-12 medium-9 columns">
                  <div className="row">
                    <div className="small-12 medium-6 columns">
                      <TrackedDiv formulas={[topBottom]}>
                        {(posTopBottom) =>
                          <div className={cx("ramen-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+350})}>
                            <div className="space-bottom ramen-title">
                              <TextContentBox text='ramen.title' css="run-font-large text-center full-width"/>
                            </div>
                            <TextContentBox text='ramen.subtitle' css="ramen-subtitle text-uppercase run-font-medium full-width"/>
                          </div>
                        }
                      </TrackedDiv>
                    </div>
                    <div className="medium-6 columns show-for-medium">
                      <TrackedDiv formulas={[topBottom]}>
                        {(posTopBottom) =>
                          <div className={cx("ramen-content-box-description scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+200})}>
                            <TextContentBox text='ramen.description' css="run-font full-width"/>
                          </div>
                        }
                      </TrackedDiv>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row hide-for-medium">
                <TrackedDiv formulas={[topBottom]}>
                  {(posTopBottom) =>
                    <div className={cx("ramen-content-box-description scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+300})}>
                      <TextContentBox text='ramen.description' css="run-font full-width"/>
                    </div>
                  }
                </TrackedDiv>
              </div>
            </div>
          </div>
        </div>
      </Element>

      }</TrackDocument>
    );
}

export default Ramen;
