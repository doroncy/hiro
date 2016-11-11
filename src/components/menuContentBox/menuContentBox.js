import React from 'react';
import Translate from 'i18n-react';
import Style from './menuContentBox.scss';

const MenuContentBox = (props) => {
  let fontTitleClassName  = props.language === 'en' ? 'run-font-medium' : 'assistant-bold';
  let fontDescriptionClassName= props.language === 'en' ? 'run-font' : 'assistant-regular';
  return (
      <div className='menu-contentbox-wrap'>
        <div className='menu-inner'>
          <div className={`${fontTitleClassName} menu-title`}><Translate text={props.title} /></div>
          <div className={`${fontDescriptionClassName} menu-description`}><Translate text={props.description} /></div>
        </div>
      </div>
    );
}

export default MenuContentBox;
