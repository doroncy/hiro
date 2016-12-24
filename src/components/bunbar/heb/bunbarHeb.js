import React from 'react';
import Translate from 'i18n-react';
import {Element} from'react-scroll';
import TextContentBox from '../../textContentBox/textContentBox';
import bunSvg from '../../../assets/icons/h_w_bun.svg';

import cx from 'classnames';
import {TrackedDiv, TrackDocument} from 'react-track';
import {topBottom, getDocumentRect, getDocumentElement, calculateScrollY} from 'react-track/tracking-formulas';

const BunbarHeb = (props) => {
  return (
    <TrackDocument formulas={[getDocumentElement, getDocumentRect, calculateScrollY, topBottom]}>
      {(documentElement, documentRect, scrollY, topBottom) =>
      <Element name="bunbar" className='section-margin'>
        <div className="row">
          <div className="small-10 small-centered columns">
            <div className={`${props.language} bunbar-wrap`}>
              <div className="row small-half-padding-columns">
                <div className="small-12 columns hide-for-large">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("bunbar-image scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+150})}>
                        <img src={bunSvg} />
                      </div>
                    }
                  </TrackedDiv>
                </div>
              </div>
              <div className="row small-half-padding-columns space-bottom">
                <div className="small-12 large-10 columns">
                  <div className="row small-half-padding-columns">
                    <div className="small-12 medium-6 large-4 columns right">
                      <TrackedDiv formulas={[topBottom]}>
                        {(posTopBottom) =>
                          <div className={cx("bunbar-content-box scroll-anim-item right",{'animate-out-bottom':scrollY < posTopBottom+200})}>
                            <div className="bunbar-title right">
                              <TextContentBox text={`${props.language}.bunbar.title`} css="bunbar-title-heb assistant-extra-bold text-center full-width"/>
                            </div>
                          </div>
                        }
                      </TrackedDiv>
                    </div>
                  </div>
                  <div className="row">
                    <div className="small-12 large-8 columns right">
                      <TrackedDiv formulas={[topBottom]}>
                        {(posTopBottom) =>
                          <div className={cx("bunbar-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+250})}>
                            <TextContentBox text={`${props.language}.bunbar.subtitle`} css="bunbar-subtitle bunbar-subtitle-heb assistant-bold text-uppercase full-width"/>
                          </div>
                        }
                      </TrackedDiv>
                    </div>
                  </div>
                  <div className="row">
                    <div className="small-12 large-offset-1 large-10 columns">
                      <TrackedDiv formulas={[topBottom]}>
                        {(posTopBottom) =>
                          <div className={cx("bunbar-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+300})}>
                            <TextContentBox text={`${props.language}.bunbar.descriptions.para1`} css="assistant-bold full-width"/>
                          </div>}
                      </TrackedDiv>
                    </div>
                  </div>
                </div>
                <div className="large-2 columns show-for-large">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("bunbar-image scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+150})}>
                        <img src={bunSvg} />
                      </div>
                    }
                  </TrackedDiv>
                </div>
              </div>
              <div className="row small-half-padding-columns">
                <div className="show-for-large large-9 large-offset-2 columns">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("bunbar-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+320})}>
                        <TextContentBox text={`${props.language}.bunbar.descriptions.para2`} css="assistant-bold full-width"/>
                      </div>}
                  </TrackedDiv>
                </div>
              </div>
              <div className="row small-half-padding-columns">
                <div className="small-12 large-6 large-offset-1 columns">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("bunbar-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+320})}>
                        <TextContentBox text={`${props.language}.bunbar.descriptions.para4`} css="assistant-semi-bold full-width"/>
                      </div>}
                  </TrackedDiv>
                </div>
                <div className="show-for-large large-4 columns">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("bunbar-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+320})}>
                        <TextContentBox text={`${props.language}.bunbar.descriptions.para3`} css="assistant-bold full-width"/>
                      </div>}
                  </TrackedDiv>
                </div>

                <div className="hide-for-large small-12 columns">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("bunbar-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+320})}>
                        <TextContentBox text={`${props.language}.bunbar.descriptions.para4`} css="assistant-bold full-width"/>
                      </div>}
                  </TrackedDiv>
                </div>
              </div>
              <div className="row small-half-padding-columns">
                <div className="small-12 large-9 large-offset-1 end columns">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("bunbar-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+350})}>
                        <TextContentBox text={`${props.language}.bunbar.descriptions.para5`} css="assistant-semi-bold full-width"/>
                      </div>}
                  </TrackedDiv>
                </div>
              </div>

              <div className="row small-half-padding-columns">
                <div className="small-12 large-3 large-offset-1 columns left">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("bunbar-content-box content-box-black scroll-anim-item bon-appetit bon-appetit-heb",{'animate-out-bottom':scrollY < posTopBottom+420})}>
                        <div className="assistant-extra-bold content-box-black text-uppercase text-center">
                            בתאבון
                        </div>
                        <div className="run-font content-box-black text-uppercase text-center">
                        שף ישראל אהרוני
                        </div>
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

export default BunbarHeb;
