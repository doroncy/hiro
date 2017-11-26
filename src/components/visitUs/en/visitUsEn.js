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
  zoom: 16
}
const hashmalMapOptions = {
  cord: {lat: 32.0625914, lng: 34.7763019},
  zoom: 16
}
const GOOGLE_API_KEY = 'AIzaSyAav2Y2lJuocF-18tLqtBovuFO6RBcuRY0';

const VisitUsEn = (props) => {
  let titleFontClass = props.language === 'en' ? 'run-font-large' : 'assistant-extra-bold';
  return (
    <TrackDocument formulas={[getDocumentElement, getDocumentRect, calculateScrollY, topBottom]}>
      {(documentElement, documentRect, scrollY, topBottom) =>
      <Element name="visitus" className='space-top-md visitus section-margin'>
      <div className="small-10 small-centered columns">
        <div className="visitus-wrap">
          <div className="row">
            <div className="small-12 small-centered medium-uncentered medium-3 columns">
              <TrackedDiv formulas={[topBottom]}>
                {(posTopBottom) =>
                  <div className={cx("scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+150})}>
                    <TextContentBox text={`${props.language}.visitUs.title`} css={`${titleFontClass} text-center full-width space-bottom`}/>
                  </div>
                }
              </TrackedDiv>
            </div>
          </div>
          <div className="visitus-branch">
            <div className="row">
              <div className="small-12 small-centered columns">
              <TrackedDiv formulas={[topBottom]}>
                {(posTopBottom) =>
                  <div className={cx("scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+150})}>
                    <div className="run-font-medium full-width clearfix visitus-title">
                      <div className="float-left visitus-title-text">
                        <Translate text={`${props.language}.visitUs.sarona.name`}/>,
                        <Translate text={`${props.language}.visitUs.sarona.address`}/>
                      </div>
                      <div className="float-right visitus-title-text">
                        <Translate text={`${props.language}.visitUs.sarona.openHours`}/>
                      </div>
                    </div>
                  </div>
                }
              </TrackedDiv>
              </div>
            </div>
            <div className="row">
              <div className="small-12 small-centered columns">
              <TrackedDiv formulas={[topBottom]}>
                {(posTopBottom) =>
                  <div className={cx("visitus-right-pane scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+350})}>
                    <div className="google-map-wrap">
                      <GoogleMap
                        bootstrapURLKeys={{
                          key: GOOGLE_API_KEY,
                          language: 'heb'
                        }}
                        center={saronaMapOptions.cord}
                        zoom={saronaMapOptions.zoom}
                        minZoom={saronaMapOptions.zoom}
                        maxZoom={saronaMapOptions.zoom}
                        scrollWheel={false}
                        draggable={false}>
                        <img src={markerSvg} className="hiro-map-marker" lat={saronaMapOptions.cord.lat} lng={saronaMapOptions.cord.lng}/>
                      </GoogleMap>
                    </div>
                  </div>
                }
              </TrackedDiv>
              </div>
            </div>
          </div>
          <div className="visitus-branch">
            <div className="row">
              <div className="small-12 small-centered columns">
              <TrackedDiv formulas={[topBottom]}>
                {(posTopBottom) =>
                  <div className={cx("scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+150})}>
                    <div className="run-font-medium full-width clearfix visitus-title">
                      <div className="float-left visitus-title-text">
                        <Translate text={`${props.language}.visitUs.hashmal.name`}/>,
                        <Translate text={`${props.language}.visitUs.hashmal.address`}/>
                      </div>
                      <div className="float-right visitus-title-text">
                        <Translate text={`${props.language}.visitUs.hashmal.openHours`}/>
                      </div>
                    </div>
                  </div>
                }
              </TrackedDiv>
              </div>
            </div>
            <div className="row">
              <div className="small-12 small-centered columns">
              <TrackedDiv formulas={[topBottom]}>
                {(posTopBottom) =>
                  <div className={cx("visitus-right-pane scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+150})}>
                    <div className="google-map-wrap">
                      <GoogleMap
                        bootstrapURLKeys={{
                          key: GOOGLE_API_KEY,
                          language: 'heb'
                        }}
                        center={hashmalMapOptions.cord}
                        zoom={hashmalMapOptions.zoom}
                        minZoom={hashmalMapOptions.zoom}
                        maxZoom={hashmalMapOptions.zoom}
                        scrollWheel={false}
                        draggable={false}>
                        <img src={markerSvg} className="hiro-map-marker" lat={hashmalMapOptions.cord.lat} lng={hashmalMapOptions.cord.lng}/>
                      </GoogleMap>
                    </div>
                  </div>
                }
              </TrackedDiv>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row site-footer">
        <div className="small-12 medium-6 small-centered medium-uncentered columns">
          <div className="text-center">COPYRIGHT 2017 HIRO. ALL RIGHTS RESERVED</div>
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

export default VisitUsEn;
