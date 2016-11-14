import React from 'react';
import Translate from 'i18n-react';
import {Element} from'react-scroll';
import GoogleMap from 'google-map-react';
import Style from './visitUs.scss';
import TextContentBox from '../textContentBox/textContentBox';
import headerLogoSvg from '../../assets/icons/h_w_header_logo.svg';
import comingSoonSvg from '../../assets/icons/h_w_coming_soon.svg';
import markerSvg from '../../assets/icons/h_w_google_maps.svg';

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
                        <TextContentBox text={`${props.language}.visitUs.title`} css="run-font-large text-center full-width space-bottom"/>
                        <img src={headerLogoSvg} className="header-logo-img space-bottom"/>
                        <TextContentBox text={`${props.language}.visitUs.sarona.name`} css="run-font-medium text-center full-width space-bottom"/>
                        <TextContentBox text={`${props.language}.visitUs.sarona.phone`} css="run-font-medium text-center full-width space-bottom"/>
                      </div>
                    }
                  </TrackedDiv>
                </div>
                <div className="small-12 small-centered medium-uncentered large-8 columns">
                  <div className="row">
                    <div className="medium-12 large-11 columns">
                      <TrackedDiv formulas={[topBottom]}>
                        {(posTopBottom) =>
                          <div className={cx("visitus-right-pane scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+350})}>
                            <TextContentBox text={`${props.language}.visitUs.sarona.address`} css="run-font-medium text-center full-width space-bottom"/>
                            <div className="google-map-wrap">
                              <GoogleMap
                                center={saronaMapOptions.cord}
                                zoom={saronaMapOptions.zoom}
                                minZoom={saronaMapOptions.zoom}
                                maxZoom={saronaMapOptions.zoom}
                                scrollWheel={false}
                                draggable={false}>
                                <img src={markerSvg} className="hiro-map-marker" lat={32.071401} lng={34.786942}/>
                              </GoogleMap>
                            </div>
                            <div className="visit-us-open-hours">
                              <TextContentBox text={`${props.language}.visitUs.sarona.openHours`} css="run-font-medium text-center full-width space-bottom"/>
                            </div>
                          </div>
                        }
                      </TrackedDiv>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row small-half-padding-columns coming-soon-wrap">
                <div className="small-12 small-centered medium-uncentered large-3 columns">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+150})}>
                        <img src={headerLogoSvg} className="header-logo-img space-bottom"/>
                        <TextContentBox text={`${props.language}.visitUs.hashmal.name`} css="run-font-medium text-center full-width space-bottom"/>
                      </div>
                    }
                  </TrackedDiv>
                </div>
                <div className="small-12 small-centered medium-uncentered large-9 columns">
                  <div className="row">
                    <div className="medium-12 large-11 columns">
                      <TrackedDiv formulas={[topBottom]}>
                        {(posTopBottom) =>
                          <div className={cx("visitus-comingsoon-right-pane scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+200})}>
                            <div className="coming-soon-img">
                              <img src={comingSoonSvg} className="space-bottom"/>
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
        <div className="row site-footer">
          <div className="small-12 medium-6 small-centered medium-uncentered columns">
            <div className="text-center">COPYRIGHT 2016 HIRO. ALL RIGHTS RESERVED</div>
          </div>
          <div className="small-12 medium-6 small-centered medium-uncentered columns">
            <div className="text-center">
              <a href="http://studio-y-o.com/" target="_blank" className="white">DESIGNED BY STUDIO Y&O | DEV BY DORON CYNGISER</a>
            </div>
          </div>
        </div>
      </Element>
      }</TrackDocument>
    );
}

export default VisitUs;
