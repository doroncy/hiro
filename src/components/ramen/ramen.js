import React from 'react';
import Style from './ramen.scss';
import ReactEn from './en/ramenEn';
import ReactHeb from './heb/ramenHeb';

const Ramen = (props) => {
  return (
    <div>{props.language === 'en' ? <ReactEn language="en" /> : <ReactHeb language="heb" />}</div>
  );
}

export default Ramen;
