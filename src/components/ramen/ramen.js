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
              <div className="row small-half-padding-columns space-bottom">
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
                  <div className="row small-half-padding-columns">
                    <div className="small-12 medium-5 columns">
                      <TrackedDiv formulas={[topBottom]}>
                        {(posTopBottom) =>
                          <div className={cx("ramen-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+200})}>
                            <div className="ramen-title">
                              <TextContentBox text='ramen.title' css="run-font-large text-center full-width"/>
                            </div>
                          </div>
                        }
                      </TrackedDiv>
                    </div>
                  </div>
                  <div className="row">
                    <div className="small-12 medium-8 columns">
                      <TrackedDiv formulas={[topBottom]}>
                        {(posTopBottom) =>
                          <div className={cx("ramen-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+250})}>
                            <TextContentBox text='ramen.subtitle' css="ramen-subtitle text-uppercase run-font-medium full-width"/>
                          </div>
                        }
                      </TrackedDiv>
                    </div>
                  </div>
                  <div className="row">
                    <div className="small-12 medium-offset-1 medium-10 columns">
                      <TrackedDiv formulas={[topBottom]}>
                        {(posTopBottom) =>
                          <div className={cx("ramen-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+300})}>
                            <TextContentBox text='ramen.descriptions.what' css="run-font full-width"/>
                          </div>
                        }
                      </TrackedDiv>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row small-half-padding-columns">
                <div className="small-12 medium-offset-1 medium-7 columns">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("ramen-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+320})}>
                        <TextContentBox text='ramen.descriptions.where' css="run-font full-width"/>
                      </div>}
                  </TrackedDiv>
                </div>
                <div className="small-12 medium-3 columns end">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("ramen-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+320})}>
                        <TextContentBox text='ramen.descriptions.toMe' css="run-font full-width"/>
                      </div>}
                  </TrackedDiv>
                </div>
              </div>
              <div className="row small-half-padding-columns">
                <div className="small-12 medium-offset-3 medium-8 columns">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("ramen-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+350})}>
                        <TextContentBox text='ramen.descriptions.begin' css="run-font full-width"/>
                      </div>}
                  </TrackedDiv>
                </div>
              </div>
              <div className="row small-half-padding-columns">
                <div className="small-12 medium-offset-1 medium-8 columns">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("ramen-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+370})}>
                        <TextContentBox text='ramen.descriptions.texture' css="run-font full-width"/>
                      </div>}
                  </TrackedDiv>
                </div>
              </div>
              <div className="row small-half-padding-columns">
                <div className="small-12 medium-offset-1 medium-3 columns">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("ramen-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+400})}>
                        <TextContentBox text='ramen.descriptions.oneBowl' css="run-font full-width"/>
                      </div>}
                  </TrackedDiv>
                </div>
                <div className="small-12 medium-7 end columns">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("ramen-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+400})}>
                        <TextContentBox text='ramen.descriptions.versions' css="run-font full-width no-bottom-padding"/>
                        <TextContentBox text='ramen.descriptions.idea' css="run-font full-width no-top-padding"/>
                      </div>}
                  </TrackedDiv>
                </div>
              </div>
              <div className="row small-half-padding-columns">
                <div className="small-12 medium-offset-8 medium-4 columns">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("ramen-content-box scroll-anim-item nothing-like",{'animate-out-bottom':scrollY < posTopBottom+420})}>
                        <TextContentBox text='ramen.descriptions.nothingLike' css="run-font content-box-black text-uppercase"/>
                      </div>}
                  </TrackedDiv>
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
