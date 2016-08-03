import React from 'react';
import Translate from 'i18n-react';
import enText from './i18n/en';
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
    Translate.setTexts(enText);

    this.state = {
      scrollPosition: consts.scrollPositions.CURTAIN,
      currentBgImgIndex: 1
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

  render(){
    let bgClassName = `animated fadeIn height100 background background-fade bg_${this.state.currentBgImgIndex}`;

    return (
      <div className={this.state.scrollPosition}>
        <div className={bgClassName}>
          <NavBar scrollPosition={this.state.scrollPosition}></NavBar>
          <Welcome scrollPosition={this.state.scrollPosition}></Welcome>
          <div id="nav-spacer"></div>
          <div className="parallax-wrap">
              <Ramen></Ramen>
              <Aharoni></Aharoni>
              <Menu></Menu>
              <Gallery></Gallery>
              <VisitUs></VisitUs>
          </div>
        </div>
      </div>
    )
  }
}

export default App
