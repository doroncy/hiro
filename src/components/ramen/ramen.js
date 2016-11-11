import React from 'react';
import Translate from 'i18n-react';
import {Element} from'react-scroll';
import Style from './ramen.scss';

import ReactEn from './en/ramenEn';
import ReactHeb from './heb/ramenHeb';

import TextContentBox from '../textContentBox/textContentBox';
import noodlesSvg from '../../assets/icons/h_w_noodles.svg';

import cx from 'classnames';
import {TrackedDiv, TrackDocument} from 'react-track';
import {topBottom, getDocumentRect, getDocumentElement, calculateScrollY} from 'react-track/tracking-formulas';

const Ramen = (props) => {
  return (
    <div>{props.language === 'en' ? <ReactEn language="en" /> : <ReactHeb language="heb" />}</div>
  );
}

export default Ramen;
