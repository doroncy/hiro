import React from 'react';
import _ from 'lodash';
import Translate from 'i18n-react';
import TranslatedText from './i18n/text';
import style from './styles/main/style.scss';
import consts from './consts';
// Components
import NavBar from './components/navbar/navbar';
import Welcome from './components/welcome/welcome';
import Ramen from './components/ramen/ramen';
import Aharoni from './components/aharoni/aharoni';
import Menu from './components/menu/menu';
import Gallery from './components/gallery/gallery';
import VisitUs from './components/visitUs/visitUs';

let viewportHeight;
let bgCarouselInterval;

class App extends React.Component {
  constructor(){
    super();

    Translate.setTexts(TranslatedText);

    this.supportPageOffset = window.pageXOffset !== undefined;
    this.isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");

    this.state = {
      scrollPosition: consts.scrollPositions.CURTAIN,
      currentBgImgIndex: 1,
      language: "heb",
      popupVisible: false
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.setScrollPositionState = this.setScrollPositionState.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
    this.handleResize();

    bgCarouselInterval = setInterval(()=> {
      let newBgImgIndex = this.state.currentBgImgIndex === 7
        ? 1
        : this.state.currentBgImgIndex + 1;

      this.setState({
        currentBgImgIndex: newBgImgIndex
      });
    }, 7000);

    // MESSAGES POPUP
    setTimeout(() => {
      this.setState({
        popupVisible: true
      });
    }, 5000)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    clearInterval(bgCarouselInterval);
  }

  handleScroll() {
    var scrollTop = this.supportPageOffset
      ? window.pageYOffset
      : this.isCSS1Compat ? _.get(document, 'documentElement.scrollTop') : _.get(document, 'body.scrollTop');

    this.setScrollPositionState(this.getScrollPosition(scrollTop));
  }

  setScrollPositionState(newScrollPosition) {
    if (this.state.scrollPosition !== newScrollPosition) {
      this.setState({
        scrollPosition: newScrollPosition
      });
    }
  }

  handleResize() {
    viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    this.setScrollPositionState(this.getScrollPosition(document.body.scrollTop));
  }

  getScrollPosition(scrollTop) {
    let scrollPosition = consts.scrollPositions.CURTAIN;
    if (scrollTop >= viewportHeight) {
      scrollPosition = consts.scrollPositions.CURTAIN_REMOVED;
    } else if(scrollTop >= viewportHeight-100){
      scrollPosition = consts.scrollPositions.CURTAIN_ALMOST_REMOVED;
    }
    return scrollPosition;
  }

  changeLanguage(newLanguage) {    
    this.setState({
      language: newLanguage
    });
  }

  hidePopup() {
    this.setState({
      popupVisible: false
    });
  }

  render(){
    let bgClassName = `animated height100 fadeIn background background-fade bg_${this.state.currentBgImgIndex}`;
    const messagePopup = this.state.popupVisible
      ? <div className="msg-popup-wrapper" onClick={() => this.hidePopup()}><div className="msg-popup"></div></div>
      : <div className="msg-popup-wrapper"></div>;
    const welcomeStep = !this.state.popupVisible
      ? <Welcome scrollPosition={this.state.scrollPosition} language={this.state.language}></Welcome>
      : '';
    const siteContent = !this.state.popupVisible
      ?
        <div className="parallax-wrap">
            <Ramen language={this.state.language}></Ramen>            
            <Aharoni language={this.state.language}></Aharoni>
            <Menu language={this.state.language}></Menu>
            <Gallery language={this.state.language}></Gallery>
            <VisitUs language={this.state.language}></VisitUs>
        </div>
      : '';

    return (
      <div className={`${this.state.scrollPosition} ${this.state.popupVisible ? 'popup-visible': ''}`}>
        {messagePopup}
        <div className="background-wrap">
          <div className={bgClassName}></div>
        </div>
        <div>
          <NavBar scrollPosition={this.state.scrollPosition}
            language={this.state.language}
            onChangeLanguage={this.changeLanguage.bind(this)}>
          </NavBar>
          {welcomeStep}
          <div id="nav-spacer"></div>          
          {siteContent}
        </div>
        
      </div>
    )
  }
}

export default App
