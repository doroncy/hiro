import React from 'react';
import Translate from 'i18n-react';
import Style from './textContentBox.scss';

const TextContentBox = (props) => {
  return (
      <div className={`text-contentbox-wrap ${props.css}`}>
        <Translate text={props.text} />
      </div>
    );
}

export default TextContentBox;
