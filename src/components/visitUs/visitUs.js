import React from 'react';
import Translate from 'i18n-react';
import {Element} from'react-scroll';
import GoogleMap from 'google-map-react';
import Style from './visitUs.scss';
import TextContentBox from '../textContentBox/textContentBox';
import headerLogoSvg from '../../assets/icons/h_w_header_logo.svg';

import cx from 'classnames';
import {TrackedDiv, TrackDocument} from 'react-track';
import {topBottom, getDocumentRect, getDocumentElement, calculateScrollY} from 'react-track/tracking-formulas';

const saronaMapOptions = {
  cord: {lat: 32.071401, lng: 34.786942},
  zoom: 17
}

const VisitUs = (props) => {
  return (
    <TrackDocument formulas={[getDocumentElement, getDocumentRect, calculateScrollY, topBottom]}>
      {(documentElement, documentRect, scrollY, topBottom) =>
      <Element name="visitus" className='space-top-md visitus section-margin'>
        <div className="row">
          <div className="small-10 small-centered columns">
            <div className="visitus-wrap">
              <div className="row small-half-padding-columns">
                <div className="small-12 small-centered medium-uncentered large-4 columns">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+150})}>
                        <TextContentBox text='visitUs.title' css="run-font-large text-center full-width space-bottom"/>
                        <img src={headerLogoSvg} className="header-logo-img space-bottom"/>
                        <TextContentBox text='visitUs.sarona.name' css="run-font-medium text-center full-width space-bottom"/>
                        <TextContentBox text='visitUs.sarona.phone' css="run-font-medium text-center full-width space-bottom"/>
                      </div>
                    }
                  </TrackedDiv>
                </div>
                <div className="small-12 small-centered medium-uncentered large-8 columns">
                  <div className="row">
                    <div className="small-12 medium-11 columns">
                      <TrackedDiv formulas={[topBottom]}>
                        {(posTopBottom) =>
                          <div className={cx("visitus-right-pane scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+350})}>
                            <TextContentBox text='visitUs.sarona.address' css="run-font-medium text-center full-width space-bottom"/>
                            <div className="google-map-wrap">
                              <GoogleMap
                                center={saronaMapOptions.cord}
                                zoom={saronaMapOptions.zoom}
                                maxZoom={saronaMapOptions.zoom}
                                scrollWheel={false}
                                draggable={false}>
                                <div className="markerSarona" lat={32.071401} lng={34.786942}>Hiro</div>
                              </GoogleMap>
                            </div>
                            <div className="visit-us-open-hours">
                              <TextContentBox text='visitUs.sarona.openHours' css="run-font-medium text-center full-width space-bottom"/>
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

export default VisitUs;
