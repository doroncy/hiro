import React from 'react';
import Translate from 'i18n-react';
import Style from './menuContentBox.scss';

const MenuContentBox = (props) => {
  return (
      <div className='menu-contentbox-wrap'>
        <div className='menu-inner'>
          <div className="menu-title run-font-medium"><Translate text={props.title} /></div>
          <div className="menu-description run-font"><Translate text={props.description} /></div>
        </div>
      </div>
    );
}

export default MenuContentBox;
