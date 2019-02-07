import React from 'react';
import Translate from 'i18n-react';
import {Element} from'react-scroll';
import GoogleMap from 'google-map-react';
import TextContentBox from '../../textContentBox/textContentBox';
import headerLogoSvg from '../../../assets/icons/h_w_header_logo.svg';
import comingSoonSvg from '../../../assets/icons/h_w_coming_soon.svg';
import markerSvg from '../../../assets/icons/maps_marker.svg';

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
const ramatAvivMapOptions = {
  cord: {lat: 32.1123228, lng: 34.7939123},
  zoom: 16
}

const VisitUsHeb = (props) => {
  return (

    <TrackDocument formulas={[getDocumentElement, getDocumentRect, calculateScrollY, topBottom]}>
      {(documentElement, documentRect, scrollY, topBottom) =>
      <Element name="visitus" className='space-top-md visitus visitus-heb section-margin'>
      <div className="small-10 small-centered columns">
        <div className="visitus-wrap">
          <div className="row">
            <div className="small-12 small-centered medium-3 medium-offset-9 end columns">
              <TrackedDiv formulas={[topBottom]}>
                {(posTopBottom) =>
                  <div className={cx("scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+150})}>
                    <TextContentBox text={`${props.language}.visitUs.title`} css={`assistant-extra-bold text-center full-width space-bottom`}/>
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
                      <div className="float-right visitus-title-text assistant-bold">
                        <Translate text={`${props.language}.visitUs.sarona.address`}/>
                      </div>
                      <div className="float-left visitus-title-text assistant-bold">
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
                  <div className={cx("scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+350})}>
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
                      <div className="float-right visitus-title-text assistant-bold">                      
                        <Translate text={`${props.language}.visitUs.hashmal.address`}/>
                      </div>
                      <div className="float-left visitus-title-text assistant-bold">
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
                  <div className={cx("scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+150})}>
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
                      <div className="float-right visitus-title-text assistant-bold">                      
                        <Translate text={`${props.language}.visitUs.ramatAviv.address`}/>
                      </div>
                      <div className="float-left visitus-title-text assistant-bold">
                        <Translate text={`${props.language}.visitUs.ramatAviv.openHours`}/>
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
                  <div className={cx("scroll-anim-item",{'animate-out-bottom':scrollY < posTopBottom+150})}>
                    <div className="google-map-wrap">
                    <GoogleMap
                      center={ramatAvivMapOptions.cord}
                      zoom={ramatAvivMapOptions.zoom}
                      minZoom={ramatAvivMapOptions.zoom}
                      maxZoom={ramatAvivMapOptions.zoom}
                      scrollWheel={false}
                      draggable={false}>
                      <img src={markerSvg} className="hiro-map-marker" lat={ramatAvivMapOptions.cord.lat} lng={ramatAvivMapOptions.cord.lng}/>
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
            <div className="text-center">COPYRIGHT 2018 HIRO. ALL RIGHTS RESERVED</div>
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
