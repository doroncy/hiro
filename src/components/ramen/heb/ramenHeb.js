import React from 'react';
import Translate from 'i18n-react';
import {Element} from'react-scroll';
import TextContentBox from '../../textContentBox/textContentBox';
import noodlesSvg from '../../../assets/icons/h_w_noodles.svg';

import cx from 'classnames';
import {TrackedDiv, TrackDocument} from 'react-track';
import {topBottom, getDocumentRect, getDocumentElement, calculateScrollY} from 'react-track/tracking-formulas';

const RamenHeb = (props) => {
  return (
    <TrackDocument formulas={[getDocumentElement, getDocumentRect, calculateScrollY, topBottom]}>
      {(documentElement, documentRect, scrollY, topBottom) =>
      <Element name="ramen" className='section-margin'>
        <div className="row">
          <div className="small-10 small-centered columns">
            <div className={`${props.language} ramen-wrap`}>
              <div className="row small-half-padding-columns">
                <div className="small-12 columns hide-for-medium">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("noodles-image scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+150})}>
                        <img src={noodlesSvg} />
                      </div>
                    }
                  </TrackedDiv>
                </div>
              </div>
              <div className="row small-half-padding-columns space-bottom">
                <div className="small-12 medium-9 columns">
                  <div className="row small-half-padding-columns">
                    <div className="small-12 medium-6 large-4 columns right">
                      <TrackedDiv formulas={[topBottom]}>
                        {(posTopBottom) =>
                          <div className={cx("ramen-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+200})}>
                            <div className="ramen-title">
                              <TextContentBox text={`${props.language}.ramen.title`} css="ramen-title-heb assistant-extra-bold text-center full-width"/>
                            </div>
                          </div>
                        }
                      </TrackedDiv>
                    </div>
                  </div>
                  <div className="row">
                    <div className="small-12 medium-8 columns right">
                      <TrackedDiv formulas={[topBottom]}>
                        {(posTopBottom) =>
                          <div className={cx("ramen-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+250})}>
                            <TextContentBox text={`${props.language}.ramen.subtitle`} css="ramen-subtitle ramen-subtitle-heb assistant-bold text-uppercase full-width"/>
                          </div>
                        }
                      </TrackedDiv>
                    </div>
                  </div>
                  <div className="row">
                    <div className="small-12 medium-offset-1 medium-10 columns end ramen-what-padding">
                      <TrackedDiv formulas={[topBottom]}>
                        {(posTopBottom) =>
                          <div className={cx("ramen-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+300})}>
                            <TextContentBox text={`${props.language}.ramen.descriptions.what`} css="assistant-bold full-width"/>
                          </div>}
                      </TrackedDiv>
                    </div>
                  </div>
                </div>
                <div className="medium-3 columns show-for-medium">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("noodles-image scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+150})}>
                        <img src={noodlesSvg} />
                      </div>
                    }
                  </TrackedDiv>
                </div>
              </div>
              <div className="row small-half-padding-columns">
                <div className="small-12 medium-3 medium-offset-1 columns">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("ramen-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+320})}>
                        <TextContentBox text={`${props.language}.ramen.descriptions.toMe`} css="assistant-bold full-width"/>
                      </div>}
                  </TrackedDiv>
                </div>
                <div className="small-12 medium-7 columns end">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("ramen-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+320})}>
                        <TextContentBox text={`${props.language}.ramen.descriptions.where`} css="assistant-semi-bold full-width"/>
                      </div>}
                  </TrackedDiv>
                </div>
              </div>
              <div className="row small-half-padding-columns">
                <div className="small-12 medium-7 medium-offset-1 end columns">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("ramen-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+350})}>
                        <TextContentBox text={`${props.language}.ramen.descriptions.begin`} css="assistant-semi-bold full-width"/>
                      </div>}
                  </TrackedDiv>
                </div>
              </div>
              <div className="row small-half-padding-columns">
                <div className="small-12 medium-offset-4 medium-7 columns ">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("ramen-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+370})}>
                        <TextContentBox text={`${props.language}.ramen.descriptions.texture`} css="assistant-semi-bold full-width"/>
                      </div>}
                  </TrackedDiv>
                </div>
              </div>
              <div className="row small-half-padding-columns">
                <div className="small-12 medium-offset-1 medium-7 columns">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("ramen-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+400})}>
                        <TextContentBox text={`${props.language}.ramen.descriptions.versions`} css="assistant-semi-bold full-width no-bottom-padding"/>
                        <TextContentBox text={`${props.language}.ramen.descriptions.idea`} css="assistant-semi-bold full-width no-top-padding"/>
                      </div>}
                  </TrackedDiv>
                </div>
                <div className="small-12 medium-3 end columns">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("ramen-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+400})}>
                        <TextContentBox text={`${props.language}.ramen.descriptions.oneBowl`} css="assistant-bold full-width"/>
                      </div>}
                  </TrackedDiv>
                </div>
              </div>
              <div className="row small-half-padding-columns">
                <div className="small-12 medium-4 end columns left">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("ramen-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+420})}>
                        <TextContentBox text={`${props.language}.ramen.descriptions.nothingLike`} css="assistant-extra-bold content-box-black text-uppercase"/>
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

export default RamenHeb;
