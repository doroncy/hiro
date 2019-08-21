import React from 'react';
import Style from './welcome.scss';
import WelcomeEn from './en/welcomeEn';
import WelcomeHeb from './heb/welcomeHeb';

const Welcome = (props) => {
  return (
    <div>{props.language === 'en'
      ? <WelcomeEn language="en" 
        scrollPosition={props.scrollPosition} 
        showDelivery={props.onDeliveryClick} 
        />
      : <WelcomeHeb language="heb" 
        scrollPosition={props.scrollPosition}
        showDelivery={props.onDeliveryClick} 
        />}
    </div>
  );
}

export default Welcome;
