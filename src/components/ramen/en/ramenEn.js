import React from 'react';
import Translate from 'i18n-react';
import {Element} from'react-scroll';
import TextContentBox from '../../textContentBox/textContentBox';
import noodlesSvg from '../../../assets/icons/h_w_noodles.svg';

import cx from 'classnames';
import {TrackedDiv, TrackDocument} from 'react-track';
import {topBottom, getDocumentRect, getDocumentElement, calculateScrollY} from 'react-track/tracking-formulas';

const RamenEn = (props) => {
  return (
    <TrackDocument formulas={[getDocumentElement, getDocumentRect, calculateScrollY, topBottom]}>
      {(documentElement, documentRect, scrollY, topBottom) =>
      <Element name="ramen" className='section-margin'>
        <div className="row">
          <div className="small-10 small-centered columns">
            <div className={`${props.language} ramen-wrap`}>
              <div className="row small-half-padding-columns space-bottom">
                <div className="small-12 large-3 columns">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("noodles-image scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+150})}>
                        <img src={noodlesSvg} />
                      </div>
                    }
                  </TrackedDiv>
                </div>
                <div className="small-12 large-9 columns">
                  <div className="row small-half-padding-columns">
                    <div className="small-12 medium-6 large-4 columns">
                      <TrackedDiv formulas={[topBottom]}>
                        {(posTopBottom) =>
                          <div className={cx("ramen-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+200})}>
                            <div className="ramen-title">
                              <TextContentBox text={`${props.language}.ramen.title`} css="run-font-large text-center full-width"/>
                            </div>
                          </div>
                        }
                      </TrackedDiv>
                    </div>
                  </div>
                  <div className="row">
                    <div className="small-12 large-8 columns">
                      <TrackedDiv formulas={[topBottom]}>
                        {(posTopBottom) =>
                          <div className={cx("ramen-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+250})}>
                            <TextContentBox text={`${props.language}.ramen.subtitle`} css="ramen-subtitle text-uppercase run-font-medium full-width"/>
                          </div>
                        }
                      </TrackedDiv>
                    </div>
                  </div>
                  <div className="row">
                    <div className="small-12 large-offset-1 large-10 columns">
                      <TrackedDiv formulas={[topBottom]}>
                        {(posTopBottom) =>
                          <div className={cx("ramen-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+300})}>
                            <TextContentBox text={`${props.language}.ramen.descriptions.what`} css="run-font-medium full-width"/>
                          </div>}
                      </TrackedDiv>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row small-half-padding-columns">
                <div className="small-12 large-offset-1 large-7 columns">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("ramen-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+320})}>
                        <TextContentBox text={`${props.language}.ramen.descriptions.where`} css="run-font-semi-bold full-width"/>
                      </div>}
                  </TrackedDiv>
                </div>
                <div className="small-12 large-3 columns end">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("ramen-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+320})}>
                        <TextContentBox text={`${props.language}.ramen.descriptions.toMe`} css="run-font-medium full-width"/>
                      </div>}
                  </TrackedDiv>
                </div>
              </div>
              <div className="row small-half-padding-columns">
                <div className="small-12 large-offset-3 large-8 columns">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("ramen-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+350})}>
                        <TextContentBox text={`${props.language}.ramen.descriptions.begin`} css="run-font-semi-bold full-width"/>
                      </div>}
                  </TrackedDiv>
                </div>
              </div>
              <div className="row small-half-padding-columns">
                <div className="small-12 large-offset-1 large-8 columns">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("ramen-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+370})}>
                        <TextContentBox text={`${props.language}.ramen.descriptions.texture`} css="run-font-semi-bold full-width"/>
                      </div>}
                  </TrackedDiv>
                </div>
              </div>
              <div className="row small-half-padding-columns">
                <div className="small-12 large-offset-1 large-3 columns">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("ramen-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+400})}>
                        <TextContentBox text={`${props.language}.ramen.descriptions.oneBowl`} css="run-font-medium full-width"/>
                      </div>}
                  </TrackedDiv>
                </div>
                <div className="small-12 large-7 end columns">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("ramen-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+400})}>
                        <TextContentBox text={`${props.language}.ramen.descriptions.versions`} css="run-font-semi-bold full-width no-bottom-padding"/>
                        <TextContentBox text={`${props.language}.ramen.descriptions.idea`} css="run-font-semi-bold full-width no-top-padding"/>
                      </div>}
                  </TrackedDiv>
                </div>
              </div>
              <div className="row small-half-padding-columns">
                <div className="small-12 large-offset-7 large-5 columns">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("ramen-content-box scroll-anim-item nothing-like",{'animate-out-bottom':scrollY < posTopBottom+420})}>
                        <TextContentBox text={`${props.language}.ramen.descriptions.nothingLike`} css="run-font-xlarge content-box-black text-uppercase"/>
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

export default RamenEn;
