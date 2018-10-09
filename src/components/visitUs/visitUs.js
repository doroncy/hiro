import React from 'react';
import Style from './visitUs.scss';
import VisitUsEn from './en/visitUsEn';
import VisitUsHeb from './heb/visitUsHeb';

const VisitUs = (props) => {
  return (
    <div>{props.language === 'en'
      ? <VisitUsEn language="en" />
      : <VisitUsHeb language="heb" />}
    </div>
  );
}

export default VisitUs;
