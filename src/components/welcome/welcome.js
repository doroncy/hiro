import React from 'react';
import Translate from 'i18n-react';
import Style from './welcome.scss';
import consts from '../../consts';
import TextContentBox from '../textContentBox/textContentBox';
import bgImage from '../../assets/gallery/h_w_gallery_1.jpg';
import curtainImgLarge from '../../assets/h_w_curtain_large.png';
import aharoniHeadSvg from '../../assets/icons/h_w_aharoni_head.svg';
import fullLogSvg from '../../assets/icons/h_w_full_logo.svg';

const Welcome = (props) => {
  let welcomeLogosClass = getWelcomeLogosClassName(props.scrollPosition);

  return (
      <div className='welcome-wrap'>
        <div className="curtain"></div>
        <img src={bgImage} className="video-bg" />
        <div className={`row welcome-container animated-fast ${welcomeLogosClass}`}>
          <div className="small-10 small-centered columns">
            <div className={`welcome-logos-wrap`}>
              <div className="row">
                <div className="small-8 small-centered medium-uncentered medium-5 columns">
                  <div className="aharoni-head-image">
                    <img src={aharoniHeadSvg} />
                  </div>
                </div>
                <div className="small-12 small-centered medium-uncentered medium-7 columns">
                  <div className="row">
                    <div className="small-8 small-centered medium-uncentered columns">
                      <div className="welcome-text-wrap run-font-xlarge">
                        <TextContentBox text='welcome.title'/>
                      </div>
                    </div>
                  </div>
                  <div className="welcome-full-logo-wrap">
                    <img src={fullLogSvg} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

const getWelcomeLogosClassName = (scrollPosition)=> {
  let className = ''
  switch(scrollPosition) {
    case consts.scrollPositions.CURTAIN:
      className = 'fadeOut';
      break;
    case consts.scrollPositions.CURTAIN_ALMOST_REMOVED:
      className = 'fadeIn';
      break;
    case consts.scrollPositions.CURTAIN_REMOVED:
      className = 'fadeIn pos-relative';
      break;
  }
  return className;
}

export default Welcome;
