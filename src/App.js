import React from 'react';
import Translate from 'i18n-react';
import TranslatedText from './i18n/text';
import style from './styles/main/style.scss';
import consts from './consts';
// Components
import NavBar from './components/navbar/navbar';
import Welcome from './components/welcome/welcome';
import Ramen from './components/ramen/ramen';
import Bunbar from './components/bunbar/bunbar';
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
    this.state = {
      scrollPosition: consts.scrollPositions.CURTAIN,
      currentBgImgIndex: 1,
      language: "heb"
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
      let newBgImgIndex = this.state.currentBgImgIndex === 5
        ? 1
        : this.state.currentBgImgIndex + 1;

      this.setState({
        currentBgImgIndex: newBgImgIndex
      });
    }, 7000);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    clearInterval(bgCarouselInterval);
  }

  handleScroll(event) {
    let scrollTop = event.srcElement.body.scrollTop;
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
    console.log('changeLanguage', newLanguage);
    this.setState({
      language: newLanguage
    });
  }

  render(){
    let bgClassName = `animated height100 fadeIn background background-fade bg_${this.state.currentBgImgIndex}`;

    return (
      <div className={`${this.state.scrollPosition}`}>
        <div className="background-wrap">
          <div className={bgClassName}></div>
        </div>
        <div>
          <NavBar scrollPosition={this.state.scrollPosition}
            language={this.state.language}
            onChangeLanguage={this.changeLanguage.bind(this)}>
          </NavBar>
          <Welcome scrollPosition={this.state.scrollPosition} language={this.state.language}></Welcome>
          <div id="nav-spacer"></div>
          <div className="parallax-wrap">
              <Ramen language={this.state.language}></Ramen>
              <Bunbar language={this.state.language}></Bunbar>
              <Aharoni language={this.state.language}></Aharoni>
              <Menu language={this.state.language}></Menu>
              <Gallery language={this.state.language}></Gallery>
              <VisitUs language={this.state.language}></VisitUs>
          </div>
        </div>
      </div>
    )
  }
}

export default App
