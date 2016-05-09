import React from 'react';
import Translate from 'i18n-react';
import enText from './i18n/en';
import style from './styles/main/style.scss';
// Components
import Welcome from './components/welcome/welcome';
import Ramen from './components/ramen/ramen';

let viewportHeight;

class App extends React.Component {
  constructor(){
    super();
    Translate.setTexts(enText);
    this.state = {
      curtainRemoved: false
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
      curtainRemoved: this.isCurtainRemoved(scrollTop)
    });
  }

  handleResize() {
    viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    this.setState({
      curtainRemoved: this.isCurtainRemoved(document.body.scrollTop)
    });
  }

  isCurtainRemoved(scrollTop) {
    return scrollTop >= viewportHeight-100;
  }

  render(){
    return (
      <div>
        <Welcome curtainRemoved={this.state.curtainRemoved}></Welcome>
        <div id="nav-spacer"></div>
        <Ramen></Ramen>
      </div>
    )
  }
}

export default App
