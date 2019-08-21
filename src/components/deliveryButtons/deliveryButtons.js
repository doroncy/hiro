import React from 'react';
import Translate from 'i18n-react';
import Style from './deliveryButtons.scss';
import TextContentBox from '../textContentBox/textContentBox';

class DeliveryButtons extends React.Component {
    constructor(props){
      super(props);     
    }

    render() {
        const locationBtnClassName = this.props.language === 'heb' ? 'assistant-bold' : 'run-font-medium';     
        return (
        <div>
          <div className="delivery-close-btn">x</div>
          <div className="row delivery-btn-wrap">
            <div className="small-8 small-centered columns">
                <div className="delivery-btn">
                    <a href="https://www.hiroramen-ramaviv.food.co.il/" target="_blank" title="delivery">            
                        <div className="menu-title">
                            <TextContentBox text={`${this.props.language}.delivery.ramatAviv`} css={`${locationBtnClassName} text-center full-width`}/>
                        </div>
                    </a>   
                </div>    
                <div className="delivery-btn">
                    <a href="https://order.plweb.online/branchesPage/hiroramenbar#!/branchesPage/hiroramenbar" target="_blank" title="delivery">            
                        <div className="menu-title">
                            <TextContentBox text={`${this.props.language}.delivery.levontin`} css={`${locationBtnClassName} text-center full-width`}/>
                        </div>
                    </a>   
                </div>                   
            </div>              
            </div>
        </div>            
        );
    }
}

export default DeliveryButtons;
