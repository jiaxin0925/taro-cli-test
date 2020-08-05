import React, {Component} from 'react';
import './banner.scss';
import {View, Swiper, SwiperItem, Image} from '@tarojs/components';
import img1 from './img/img1.jpeg';
import img2 from './img/img2.jpeg';
import img3 from './img/img3.jpeg';
import img4 from './img/img4.jpeg';
import img5 from './img/img5.jpeg';

export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerTestData: [
        {id: 1, img: img1},
        {id: 2, img: img2},
        {id: 3, img: img3},
        {id: 4, img: img4},
        {id: 5, img: img5},
      ],
    };
  }

  render() {
    const {bannerTestData}: any = this.state;
    return (
      <View>
        <Swiper autoplay={true}>
          {
            bannerTestData.map((item, index) => {
              return (
                <SwiperItem key={index}>
                  <Image style={{width: '100%'}} src={item.img}/>
                </SwiperItem>
              );
            })
          }
        </Swiper>
      </View>
    );
  }
};
