import React from 'react';
import Translate from 'i18n-react';
import {Element} from'react-scroll';
import Style from './visitUs.scss';
import TextContentBox from '../textContentBox/textContentBox';

import cx from 'classnames';
import {TrackedDiv, TrackDocument} from 'react-track';
import {topBottom, getDocumentRect, getDocumentElement, calculateScrollY} from 'react-track/tracking-formulas';

const VisitUs = (props) => {
  return (
    <TrackDocument formulas={[getDocumentElement, getDocumentRect, calculateScrollY, topBottom]}>
      {(documentElement, documentRect, scrollY, topBottom) =>
      <Element name="visitus" className='section'>
        <div className="row">
          <div className="small-10 small-centered columns">
            <div className="visitus-wrap">
              <div className="row small-half-padding-columns">
                <div className="small-5 large-4 columns">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+150})}>

                      </div>
                    }
                  </TrackedDiv>
                </div>
                <div className="small-7 large-8 columns">
                  <div className="row">
                    <div className="small-12 medium-11 columns">
                      <TrackedDiv formulas={[topBottom]}>
                        {(posTopBottom) =>
                          <div className={cx("scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+350})}>

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

export default VisitUs;
