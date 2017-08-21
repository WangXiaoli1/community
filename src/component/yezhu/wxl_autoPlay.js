import React,{Component} from 'react';
import $ from 'jquery';
import {Carousel} from 'react-bootstrap';
class Autoplay extends Component{
  constructor(){
    super()
  }
  render(){
    return(
  <Carousel interval={1200}>
    <Carousel.Item>
      <img width={900} height={900} alt="900x500" src="../img/banner_a.jpg"/>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={900} alt="900x500" src="../img/banner_b.jpg"/>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="../img/banner_c.jpg"/>
    </Carousel.Item>
  </Carousel>
)
  }
}


export default Autoplay;