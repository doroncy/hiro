import React from 'react';
import Slider from 'slick-carousel';
import $ from 'jquery';
import Translate from 'i18n-react';
import TextContentBox from '../textContentBox/textContentBox';
import {Element} from'react-scroll';
import galleryStyle from './gallery.scss';
import gallery1 from '../../assets/gallery/h_w_gallery_1.jpg';
import gallery2 from '../../assets/gallery/h_w_gallery_2.jpg';
import gallery3 from '../../assets/gallery/h_w_gallery_3.jpg';
import gallery4 from '../../assets/gallery/h_w_gallery_4.jpg';
import gallery5 from '../../assets/gallery/h_w_gallery_5.jpg';
import gallery6 from '../../assets/gallery/h_w_gallery_6.jpg';
import gallery7 from '../../assets/gallery/h_w_gallery_7.jpg';
import gallery8 from '../../assets/gallery/h_w_gallery_8.jpg';
import gallery9 from '../../assets/gallery/h_w_gallery_9.jpg';
import gallery10 from '../../assets/gallery/h_w_gallery_10.jpg';
import gallery11 from '../../assets/gallery/h_w_gallery_11.jpg';
import gallery12 from '../../assets/gallery/h_w_gallery_12.jpg';
import galleryBtnSvg from '../../assets/icons/h_w_arrow_b.svg';

const galleryImages = [gallery7, gallery2, gallery3, gallery4, gallery5,
gallery6, gallery1, gallery8, gallery9, gallery10, gallery11, gallery12];

const galleryImagesHtml = galleryImages.map((image, index)=> {
    return (
      <div className={`gallery-item`} key={index}>
        <img src={image} alt=""/>
      </div>
    );
  });

class Gallery extends React.Component {
  constructor(props){
    super();

    this.nextSlide = this.nextSlide.bind(this);
  }

  componentDidMount() {
    let sliderElem = this.refs.slider;
    $(sliderElem).slick({
      dots: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4000,
      initialSlide:0,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '15%',
      mobileFirst: true
    });
  }

  nextSlide() {
    let sliderElem = this.refs.slider;
    $(sliderElem).slick('slickNext');
  }

  render() {

    return (
        <Element name="gallery" className='gallery-wrap section'>
          <div className="gallery-title">
            <TextContentBox text='gallery.title' css="run-font-large text-center full-width"/>
          </div>
          <div className="pos-relative">
            <div ref="slider" className="slider-wrap" onClick={this.nextSlide}>
              {galleryImagesHtml}
            </div>
          </div>
        </Element>
      );
  }
}

export default Gallery;
