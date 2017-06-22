import React from 'react';
import Translate from 'i18n-react';
import {Element} from'react-scroll';
import GoogleMap from 'google-map-react';
import TextContentBox from '../../textContentBox/textContentBox';
import headerLogoSvg from '../../../assets/icons/h_w_header_logo.svg';
import comingSoonSvg from '../../../assets/icons/h_w_coming_soon.svg';
import markerSvg from '../../../assets/icons/h_w_google_maps.svg';

import cx from 'classnames';
import {TrackedDiv, TrackDocument} from 'react-track';
import {topBottom, getDocumentRect, getDocumentElement, calculateScrollY} from 'react-track/tracking-formulas';

const saronaMapOptions = {
  cord: {lat: 32.071401, lng: 34.786942},
  zoom: 17
}
const hashmalMapOptions = {
  cord: {lat: 32.0625914, lng: 34.7763019},
  zoom: 17
}

const VisitUsHeb = (props) => {
  return (
    <TrackDocument formulas={[getDocumentElement, getDocumentRect, calculateScrollY, topBottom]}>
      {(documentElement, documentRect, scrollY, topBottom) =>
      <Element name="visitus" className='space-top-md visitus visitus-heb section-margin'>
        <div className="row">
          <div className="small-10 large-12 small-centered columns">
            <div className="visitus-wrap">
            {/* Sarona */}
              <div className="row small-half-padding-columns">
                <div className="show-for-large small-centered medium-uncentered large-8 columns">
                  <div className="row">
                    <div className="medium-12 large-11 large-offset-1 columns end">
                      <TrackedDiv formulas={[topBottom]}>
                        {(posTopBottom) =>
                          <div className={cx("visitus-right-pane scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+350})}>
                            <TextContentBox text={`${props.language}.visitUs.sarona.address`} css="assistant-bold text-center full-width space-bottom"/>
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
                              <TextContentBox text={`${props.language}.visitUs.sarona.openHours`} css="assistant-bold text-center full-width space-bottom"/>
                            </div>
                          </div>
                        }
                      </TrackedDiv>
                    </div>
                  </div>
                </div>
                <div className="small-12 small-centered medium-uncentered large-4 columns">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+150})}>
                        <TextContentBox text={`${props.language}.visitUs.title`} css="assistant-extra-bold text-center full-width space-bottom"/>
                        <img src={headerLogoSvg} className="header-logo-img space-bottom"/>
                        <TextContentBox text={`${props.language}.visitUs.sarona.name`} css="assistant-bold text-center full-width space-bottom"/>
                      </div>
                    }
                  </TrackedDiv>
                </div>
                <div className="hide-for-large small-centered medium-uncentered large-8 columns">
                  <div className="row">
                    <div className="medium-12 large-11 large-offset-1 columns end">
                      <TrackedDiv formulas={[topBottom]}>
                        {(posTopBottom) =>
                          <div className={cx("visitus-right-pane scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+350})}>
                            <TextContentBox text={`${props.language}.visitUs.sarona.address`} css="assistant-bold text-center full-width space-bottom"/>
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
                              <TextContentBox text={`${props.language}.visitUs.sarona.openHours`} css="assistant-bold text-center full-width space-bottom"/>
                            </div>
                          </div>
                        }
                      </TrackedDiv>
                    </div>
                  </div>
                </div>
              </div>
              {/* Gan Hashmal */}
              <div className="visitus-hashmal row small-half-padding-columns">
                <div className="show-for-large small-centered medium-uncentered large-8 columns">
                  <div className="row">
                    <div className="medium-12 large-11 large-offset-1 columns end">
                      <TrackedDiv formulas={[topBottom]}>
                        {(posTopBottom) =>
                          <div className={cx("visitus-right-pane scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+150})}>
                            <TextContentBox text={`${props.language}.visitUs.hashmal.address`} css="assistant-bold text-center full-width space-bottom"/>
                            <div className="google-map-wrap">
                              <GoogleMap
                                center={hashmalMapOptions.cord}
                                zoom={hashmalMapOptions.zoom}
                                minZoom={hashmalMapOptions.zoom}
                                maxZoom={hashmalMapOptions.zoom}
                                scrollWheel={false}
                                draggable={false}>
                                <img src={markerSvg} className="hiro-map-marker" lat={hashmalMapOptions.cord.lat} lng={hashmalMapOptions.cord.lng}/>
                              </GoogleMap>
                            </div>
                            <div className="visit-us-open-hours">
                              <TextContentBox text={`${props.language}.visitUs.hashmal.openHours`} css="assistant-bold text-center full-width space-bottom"/>
                            </div>
                            <div className="visit-us-open-hours">
                              <TextContentBox text={`${props.language}.visitUs.hashmal.phone`} css="assistant-bold text-center full-width space-bottom"/>
                            </div>
                          </div>
                        }
                      </TrackedDiv>
                    </div>
                  </div>
                </div>
                <div className="small-12 small-centered medium-uncentered large-4 columns">
                  <TrackedDiv formulas={[topBottom]}>
                    {(posTopBottom) =>
                      <div className={cx("scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+150})}>
                        <TextContentBox text={`${props.language}.visitUs.title`} css="assistant-extra-bold text-center full-width space-bottom"/>
                        <img src={headerLogoSvg} className="header-logo-img space-bottom"/>
                        <TextContentBox text={`${props.language}.visitUs.hashmal.name`} css="assistant-bold text-center full-width space-bottom"/>
                      </div>
                    }
                  </TrackedDiv>
                </div>
                <div className="hide-for-large small-centered medium-uncentered large-8 columns">
                  <div className="row">
                    <div className="medium-12 large-11 large-offset-1 columns end">
                      <TrackedDiv formulas={[topBottom]}>
                        {(posTopBottom) =>
                          <div className={cx("visitus-right-pane scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+350})}>
                            <TextContentBox text={`${props.language}.visitUs.hashmal.address`} css="assistant-bold text-center full-width space-bottom"/>
                            <div className="google-map-wrap">
                              <GoogleMap
                                center={hashmalMapOptions.cord}
                                zoom={hashmalMapOptions.zoom}
                                minZoom={hashmalMapOptions.zoom}
                                maxZoom={hashmalMapOptions.zoom}
                                scrollWheel={false}
                                draggable={false}>
                                <img src={markerSvg} className="hiro-map-marker" lat={hashmalMapOptions.cord.lat} lng={hashmalMapOptions.cord.lng}/>
                              </GoogleMap>
                            </div>
                            <div className="visit-us-open-hours">
                              <TextContentBox text={`${props.language}.visitUs.hashmal.openHours`} css="assistant-bold text-center full-width space-bottom"/>
                            </div>
                            <div className="visit-us-open-hours">
                              <TextContentBox text={`${props.language}.visitUs.hashmal.phone`} css="assistant-bold text-center full-width space-bottom"/>
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

export default VisitUsHeb;
