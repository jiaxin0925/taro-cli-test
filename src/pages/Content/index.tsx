import React, {Component} from 'react';
import {View, Button, Swiper, SwiperItem, Image} from '@tarojs/components';
import { AtTabs, AtTabsPane, AtFloatLayout } from 'taro-ui'
import Footer from '../Footer';
import img1 from '../../assets/image/user-icon1.jpg';
import img2 from '../../assets/image/user-icon6.jpg';
import img3 from '../../assets/image/user-icon3.jpg';
import img4 from '../../assets/image/user-icon4.jpg';
import img5 from '../../assets/image/user-icon5.jpg';
import './content.scss';

export default class Content extends Component<any, any>{
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      isShow: false,
      testBannerData: [
        {id: 1, img: img1},
        {id: 2, img: img2},
        {id: 3, img: img3},
        {id: 4, img: img4},
        {id: 5, img: img5},
      ]
    };
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }
  handleClose () {
    this.setState({
      isShow: false,
    })
  }
  handleshow () {
    this.setState({
      isShow: true,
    })
  }
  render() {
    const tabList = [{ title: '标签页1' }, { title: '标签页2' }, { title: '标签页3' }];
    const {isShow, testBannerData} :any = this.state;
    return(
      <View>
        <View>
          <Swiper
            indicatorDots={true}
            autoplay={true}
            interval={3000}
          >
            {
              testBannerData.map((item, index) => {
                return(
                  <SwiperItem key={index}>
                    <Image style={{width: '100%', height: '100%'}} src={item.img} />
                  </SwiperItem>
                )
              })
            }

          </Swiper>
        </View>
        <View className="title-name">
          Tab栏
        </View>
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >标签页一的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页三的内容</View>
          </AtTabsPane>
        </AtTabs>
        <View className="title-name MT20">
          浮动弹层
        </View>
        <Button className="curBtn" onClick={this.handleshow.bind(this)}>点我</Button>
        <AtFloatLayout isOpened={isShow} title="这是个标题" onClose={this.handleClose.bind(this)}>
          这是内容区 随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
          随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写
        </AtFloatLayout>
        <Footer />
      </View>
    )
  }
}
