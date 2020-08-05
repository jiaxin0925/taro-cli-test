import React, { Component } from 'react'
import { View } from '@tarojs/components'
import Banner from '../Banner';
import Footer from '../Footer';
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Banner />
        <Footer />
      </View>
    )
  }
}
