import React from 'react';
import Translate from 'i18n-react';
import consts from '../../../consts';
import TextContentBox from '../../textContentBox/textContentBox';
import aharoniHeadSvg from '../../../assets/icons/h_w_aharoni_head.svg';
import fullLogSvg from '../../../assets/icons/h_w_full_logo.svg';
import TakeAwayGif from '../../../assets/hiro_takeaway.gif';
import TakeAwayTitleSvg from '../../../assets/h_w_ta_coming_soon.svg';

const WelcomeEN = (props) => {
  let welcomeLogosClass = getWelcomeLogosClassName(props.scrollPosition);
  return (
      <div className={`welcome-wrap ${props.language}`}>
        <div className={`hide-for-small-only takeaway-gif animated-fast ${welcomeLogosClass}`}>
          <div className="take-away-title">
            <img src={TakeAwayTitleSvg} />
          </div>
          <img src={TakeAwayGif} />
        </div>
        <div className="curtain"></div>
        <div className={`row welcome-container animated-fast ${welcomeLogosClass}`}>
          <div className="small-10 small-centered columns">
            <div className={`welcome-logos-wrap`}>
              <div className="row">
                <div className="small-10 small-centered medium-uncentered medium-5 columns">
                  <div className="aharoni-head-image">
                    <img src={aharoniHeadSvg} />
                  </div>
                </div>
                <div className="small-12 small-centered medium-uncentered medium-7 columns">
                  <div className="row">
                    <div className="small-12 small-centered medium-uncentered columns">
                      <div className="welcome-text-wrap run-font-xlarge">
                        <TextContentBox text={`${props.language}.welcome.title`}/>
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

export default WelcomeEN;
