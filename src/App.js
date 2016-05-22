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

let viewportHeight;

class App extends React.Component {
  constructor(){
    super();
    Translate.setTexts(enText);

    this.state = {
      scrollPosition: consts.scrollPositions.CURTAIN
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    let scrollTop = event.srcElement.body.scrollTop;
    this.setState({
      scrollPosition: this.getScrollPosition(scrollTop),
      scrollTop: 2*viewportHeight - scrollTop
    });
  }

  handleResize() {
    viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    let newScrollPosition = this.getScrollPosition(document.body.scrollTop);
    this.setState({
      scrollPosition: newScrollPosition,
      scrollTop: 2*viewportHeight - (document.body.scrollTop)
    });
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
    return (
      <div className={this.state.scrollPosition}>
        <NavBar scrollPosition={this.state.scrollPosition}></NavBar>
        <Welcome scrollPosition={this.state.scrollPosition}></Welcome>
        <div id="nav-spacer"></div>
        <div className="parallax-wrap">
          <Ramen scrollTop={this.state.scrollTop}></Ramen>
          <Aharoni></Aharoni>
          <Menu></Menu>
          <Gallery></Gallery>
        </div>
      </div>
    )
  }
}

export default App
