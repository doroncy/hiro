import React from 'react';
import Style from './menu.scss';
import Translate from 'i18n-react';

const MenuItem = (props) => {
    const titleFont = props.language === 'en' ? 'run-font-medium' : 'assistant-bold';
    const subTitleFont = props.language === 'en' ? 'run-font' : 'assistant-regular';

    const title = `${props.prefix}.${props.item.title}`;    
    const price = props.item.price || '';        
    const subTitle = props.item.subTitle
        ? (
        <div className={`${subTitleFont} menu-item-subtitle`}>
            <Translate text={`${props.prefix}.${props.item.subTitle}`} />      
        </div>               
        )
        : '';
    const extra = props.item.extra
        ? (
        <div className={`${subTitleFont} menu-item-extra pink`}>
            <Translate text={`${props.prefix}.${props.item.extra}`} />      
        </div>               
        )
        : '';
    const isLongPrice = props.isLongPrice ? 'long-price' : '';    
    return (
        <div className="menu-item-wrapper">
            <div className={`menu-item-inner ${isLongPrice}`}>
                <div className="menu-item-title-wrap">
                    <div className={`${titleFont} menu-item-title`}>
                        <Translate text={title} />      
                    </div>        
                    {subTitle}
                </div>
                <div className={`${subTitleFont} menu-item-title menu-item-price pink`}>
                    {price}
                </div>        
            </div>
            {extra}
        </div>
    );
}

export default MenuItem;
