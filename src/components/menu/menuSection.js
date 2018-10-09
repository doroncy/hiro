import React from 'react';
import Style from './menu.scss';
import MenuItem from './menuItem';
import Translate from 'i18n-react';

const MenuSection = (props) => {
    const titlePrefix = props.section.title
        ? `.${props.section.title}`
        : '';        
    const prefix = `${props.language}.menu${titlePrefix}`;
    const extraTitle = props.section.extraTitle
        ? `${props.language}.menu.${props.section.extraTitle}`
        : '';            
    const sectionPriceTitle = props.section.priceTitle
        ? `${prefix}.priceTitle`
        : '';    
    const sectionTitle = titlePrefix
        ? (
            <div>
                <Translate text={`${prefix}.title`} />              
                <Translate text={extraTitle} />                              
            </div>
        )
        : '';       
    const isLongPrice = props.section.title === 'wine';    
    const menuItems = props.section.items.map((item, index) =>
        <MenuItem key={index} 
            language={props.language}
            item={item} prefix={prefix}
            isLongPrice={isLongPrice} >
        </MenuItem>
    );
    const titleFont = props.language === 'en' ? 'run-font' : 'assistant-regular';
  return (    
    <div>
        <div className={`menu-section-title ${titleFont}`}>            
            {sectionTitle}
            <div className="menu-section-price-title">
                <Translate text={sectionPriceTitle} />             
            </div>
        </div>
        <div>{menuItems}</div>
    </div>    
  );
}

export default MenuSection;
