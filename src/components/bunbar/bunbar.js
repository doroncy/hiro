import React from 'react';
import Style from './bunbar.scss';
import BunbarEn from './en/bunbarEn';
import BunbarHeb from './heb/bunbarHeb';

const Bunbar = (props) => {
  return (
    <div>{props.language === 'en' ? <BunbarEn language="en" /> : <BunbarHeb language="heb" />}</div>
  );
}

export default Bunbar;
