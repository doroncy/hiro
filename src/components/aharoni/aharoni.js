import React from 'react';
import Style from './aharoni.scss';
import AharoniEn from './en/aharoniEn';
import AharoniHen from './heb/aharoniHeb';

const Ramen = (props) => {
  return (
    <div>{props.language === 'en' ? <AharoniEn language="en" /> : <AharoniHen language="heb" />}</div>
  );
}

export default Ramen;
