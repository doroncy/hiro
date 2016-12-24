import React from 'react';
import Translate from 'i18n-react';
import {Element} from'react-scroll';
import TextContentBox from '../../textContentBox/textContentBox';
import bunSvg from '../../../assets/icons/h_w_bun.svg';

import cx from 'classnames';
import {TrackedDiv, TrackDocument} from 'react-track';
import {topBottom, getDocumentRect, getDocumentElement, calculateScrollY} from 'react-track/tracking-formulas';

const BunbarEn = (props) => {
  return (
    <TrackDocument formulas={[getDocumentElement, getDocumentRect, calculateScrollY, topBottom]}>
      {(documentElement, documentRect, scrollY, topBottom) =>
      <Element name="bunbar" className='section-margin'>
        <div className="row">
          <div className="small-10 small-centered columns">
            <div className={`${props.language} bunbar-wrap`}>
              <div className="row small-half-padding-columns space-bottom">
                <div className="small-12 large-2 columns">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("bunbar-image scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+150})}>
                        <img src={bunSvg} />
                      </div>
                    }
                  </TrackedDiv>
                </div>
                <div className="small-12 large-10 columns">
                  <div className="row small-half-padding-columns">
                    <div className="small-12 medium-6 large-4 columns">
                      <TrackedDiv formulas={[topBottom]}>
                        {(posTopBottom) =>
                          <div className={cx("bunbar-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+200})}>
                            <div className="bunbar-title">
                              <TextContentBox text={`${props.language}.bunbar.title`} css="run-font-large text-center full-width"/>
                            </div>
                          </div>
                        }
                      </TrackedDiv>
                    </div>
                  </div>
                  <div className="row">
                    <div className="small-12 large-7 columns">
                      <TrackedDiv formulas={[topBottom]}>
                        {(posTopBottom) =>
                          <div className={cx("bunbar-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+250})}>
                            <TextContentBox text={`${props.language}.bunbar.subtitle`} css="text-uppercase run-font-medium full-width"/>
                          </div>
                        }
                      </TrackedDiv>
                    </div>
                  </div>
                  <div className="row">
                    <div className="small-12 large-offset-1 large-10 end columns">
                      <TrackedDiv formulas={[topBottom]}>
                        {(posTopBottom) =>
                          <div className={cx("bunbar-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+300})}>
                            <TextContentBox text={`${props.language}.bunbar.descriptions.para1`} css="run-font-medium full-width"/>
                          </div>}
                      </TrackedDiv>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row small-half-padding-columns">
                <div className="small-12 large-offset-1 large-9 end columns">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("bunbar-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+320})}>
                        <TextContentBox text={`${props.language}.bunbar.descriptions.para2`} css="run-font full-width"/>
                      </div>}
                  </TrackedDiv>
                </div>
              </div>
              <div className="row small-half-padding-columns">
                <div className="small-12 large-offset-1 large-4 columns">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("bunbar-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+350})}>
                        <TextContentBox text={`${props.language}.bunbar.descriptions.para3`} css="run-font-medium full-width"/>
                      </div>}
                  </TrackedDiv>
                </div>
                <div className="small-12 large-6 end columns">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("bunbar-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+350})}>
                        <TextContentBox text={`${props.language}.bunbar.descriptions.para4`} css="run-font full-width"/>
                      </div>}
                  </TrackedDiv>
                </div>
              </div>
              <div className="row small-half-padding-columns">
                <div className="small-12 large-offset-2 large-9 end columns">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("bunbar-content-box scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+370})}>
                        <TextContentBox text={`${props.language}.bunbar.descriptions.para5`} css="run-font full-width"/>
                      </div>}
                  </TrackedDiv>
                </div>
              </div>

              <div className="row small-half-padding-columns">
                <div className="small-12 large-offset-8 large-3 end columns">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("bunbar-content-box content-box-black scroll-anim-item bon-appetit",{'animate-out-bottom':scrollY < posTopBottom+420})}>
                        <div className="run-font-xlarge content-box-black text-uppercase text-center">
                          BON APPETIT!
                        </div>
                        <div className="run-font content-box-black text-uppercase text-center">
                          CHEF ISRAEL AHARONI
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

export default BunbarEn;
