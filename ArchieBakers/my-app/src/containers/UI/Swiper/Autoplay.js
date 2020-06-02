import React from 'react';
import Swiper from 'react-id-swiper';
import './Autoplay.css';
const Autoplay = (props) => {
  const params = {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }
  return (
    <div className="SwiperBox">
    <Swiper {...params} >
      <div>{props.name1}</div>
      <div>{props.name2}</div>
      <div>{props.name3}</div>
      <div>{props.name4}</div>
      <div>{props.name5}</div>
    </Swiper>
    </div>
  )
};
export default Autoplay;