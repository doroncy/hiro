import React from 'react';
import Translate from 'i18n-react';
import {Element} from'react-scroll';
import TextContentBox from '../../textContentBox/textContentBox';
import aharoniHeadSvg from '../../../assets/icons/h_w_aharoni_head.svg';

import cx from 'classnames';
import {TrackedDiv, TrackDocument} from 'react-track';
import {topBottom, getDocumentRect, getDocumentElement, calculateScrollY} from 'react-track/tracking-formulas';

const AharoniHeb = (props) => {
  return (
    <TrackDocument formulas={[getDocumentElement, getDocumentRect, calculateScrollY, topBottom]}>
      {(documentElement, documentRect, scrollY, topBottom) =>
      <Element name="aharoni" className='section-margin'>
        <div className="row">
          <div className="small-10 medium-8 large-10 small-centered columns">
            <div className={`${props.language} aharoni-wrap`}>
              <div className="row small-half-padding-columns">
                <div className="small-12 columns hide-for-large">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("aharoni-head-image scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+150})}>
                        <img src={aharoniHeadSvg} />
                      </div>
                    }
                  </TrackedDiv>
                </div>
              </div>

              <div className="row small-half-padding-columns space-bottom">
                <div className="small-12 large-8 columns">
                  <div className="row small-half-padding-columns">
                    <div className="small-12 large-5 columns right">
                      <TrackedDiv formulas={[topBottom]}>
                        {(posTopBottom) =>
                          <div className={cx("aharoni-content-box scroll-anim-item right",{'animate-out-bottom':scrollY < posTopBottom+200})}>
                            <div className="aharoni-title right">
                              <TextContentBox text={`${props.language}.aharoni.title`} css="assistant-extra-bold text-center full-width"/>
                            </div>
                          </div>
                        }
                      </TrackedDiv>
                    </div>
                  </div>




                  <div className="row">
                    <div className="small-12 large-10 columns right">
                      <TrackedDiv formulas={[topBottom]}>
                        {(posTopBottom) =>
                          <div className={cx("aharoni-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+250})}>
                            <TextContentBox text={`${props.language}.aharoni.subtitle`} css="aharoni-subtitle assistant-bold full-width"/>
                          </div>
                        }
                      </TrackedDiv>
                    </div>
                  </div>
                  <div className="row">
                    <div className="small-12 large-offset-2 large-9 columns end">
                      <TrackedDiv formulas={[topBottom]}>
                        {(posTopBottom) =>
                          <div className={cx("aharoni-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+300})}>
                            <TextContentBox text={`${props.language}.aharoni.descriptions.para1`} css="assistant-bold full-width"/>
                          </div>}
                      </TrackedDiv>
                    </div>
                  </div>
                </div>
                <div className="small-12 large-4 columns show-for-large">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("aharoni-head-image scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+150})}>
                        <img src={aharoniHeadSvg} />
                      </div>
                    }
                  </TrackedDiv>
                </div>
              </div>

              <div className="row">
                <div className="small-12 large-offset-3 large-8 columns end">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("aharoni-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+300})}>
                        <TextContentBox text={`${props.language}.aharoni.descriptions.para2`} css="assistant-semi-bold full-width"/>
                      </div>}
                  </TrackedDiv>
                </div>
              </div>
              <div className="row small-half-padding-columns">
                <div className="small-12 large-offset-1 large-8 columns end">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("aharoni-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+320})}>
                        <TextContentBox text={`${props.language}.aharoni.descriptions.para3`} css="assistant-semi-bold full-width"/>
                      </div>}
                  </TrackedDiv>
                </div>
              </div>
              <div className="row small-half-padding-columns">
                <div className="small-12 large-offset-3 large-8 columns end">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("aharoni-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+350})}>
                        <TextContentBox text={`${props.language}.aharoni.descriptions.para4`} css="assistant-semi-bold full-width"/>
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

export default AharoniHeb;
