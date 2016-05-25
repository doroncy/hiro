import React from 'react';
import Translate from 'i18n-react';
import Style from './welcome.scss';
import TextContentBox from '../textContentBox/textContentBox';
import bgImage from '../../assets/gallery/h_w_gallery_1.jpg';
import curtainImgLarge from '../../assets/h_w_curtain_large.png';
import aharoniHeadSvg from '../../assets/icons/h_w_aharoni_head.svg';
import fullLogSvg from '../../assets/icons/h_w_full_logo.svg';


const Welcome = (props) => {
  let welcomeLogosVisibleClass = props.curtainRemoved
    ? 'fadeIn' : 'fadeOut';
  return (
      <div className='welcome-wrap'>
        <div className="curtain"></div>
        <img src={bgImage} className="video-bg" />
        <div className={`welcome-logos-wrap animated-fast ${welcomeLogosVisibleClass}`}>
          <div class="row">
            <div class="medium-8 small-centered columns">
              <div class="row">
                <div className="medium-5 columns">
                  <div className="aharoni-head-image">
                    <img src={aharoniHeadSvg} />
                  </div>
                </div>
                <div className="medium-7 columns">
                  <div className="welcome-text-wrap">
                    <TextContentBox text='firstPage.title' font='run-font-large'/>
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

export default Welcome;
