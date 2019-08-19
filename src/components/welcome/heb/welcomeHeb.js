import React from 'react';
import Translate from 'i18n-react';
import consts from '../../../consts';
import TextContentBox from '../../textContentBox/textContentBox';
import mainLogoSvg from '../../../assets/icons/h_w_main.svg';
import TakeAwayGif from '../../../assets/hiro_takeaway.gif';

const WelcomeHeb = (props) => {
  let welcomeLogosClass = getWelcomeLogosClassName(props.scrollPosition);
  return (
      <div className={`welcome-wrap ${props.language}`}>
        <a href="https://www.hiroramen-ramaviv.food.co.il/" target="_blank" title="delivery"
          className={`hide-for-small-only takeaway-gif animated-fast ${welcomeLogosClass}`}>
          <img src={TakeAwayGif} className="take-away-image"/>
        </a>
        <a href="tel:*3721" className={`telephone hide-for-small-only animated-fast ${welcomeLogosClass}`}>
          <div className="telephone-image"></div>
        </a>
        <div className="curtain"></div>
        <div className="take-away-curtain-image-wrap">
          <a href="https://www.hiroramen-ramaviv.food.co.il/" target="_blank" title="delivery">
            <div className="take-away-curtain-image"></div>
          </a>
          <div className="anim-arrows"></div>
        </div>
        <div className={`row welcome-container animated-fast ${welcomeLogosClass}`}>          
          <div className="small-10 small-centered columns">
            <div className={`welcome-logos-wrap`}>
              <div className="row">
                <div className="small-8 small-centered columns">
                  <div>
                    <img src={mainLogoSvg} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="small-12 small-centered hide-for-medium columns">
                  <a href="https://www.hiroramen-ramaviv.food.co.il/" target="_blank" title="delivery">
                    <div className="welcome-text-wrap run-font-xlarge take-away-lg-btn">
                      <TextContentBox text={`${props.language}.welcome.takeAway`}/>
                    </div>
                  </a>
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

export default WelcomeHeb;
