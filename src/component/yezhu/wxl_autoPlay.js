import React,{Component} from 'react';
import $ from 'jquery';
import {Carousel} from 'react-bootstrap'
import '../../css/yezhu/wxl_autoPlay.css';
class Autoplay extends Component{
  constructor(){
    super()
  }
  render(){
    return(
  <Carousel interval={1200}>
    <Carousel.Item>
      <img width={900} height={1200} alt="900x1200" src="../img/banner_a.jpg"/>
      <Carousel.Caption>
        <h3 className="A_text">住这儿</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={1200} alt="900x1200" src="../img/banner_b.jpg"/>
      <Carousel.Caption>
        <h3 className="A_text">住这儿</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={1200} alt="900x1200" src="../img/banner_c.jpg"/>
      <Carousel.Caption>
        <h3 className="A_text">住这儿</h3>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
)
  }
}


export default Autoplay;