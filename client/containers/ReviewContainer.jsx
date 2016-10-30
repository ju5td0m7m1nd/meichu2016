'use strict'
/**
 * Created by caimingxun on 2016/10/29.
 */

import React from 'react';
import Nav from '../components/Nav';
import AdGrid from '../components/AdGrid'
import userArray from '../utils/userArray'

export default class ReviewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {},
      classification: {
        'none': [],
        'click': [],
        'buy': [],
        'both': [],
      }
    }
  }

  componentDidMount() {
    this.setState({users: userArray()});
    this.setOrder();
    window.scrollTo(0, 0);

    const data = []

    Object.keys(this.state.classification).map(
      type => {
        if (type === 'none') {
          this.state.classification[type].map(
            item => data.push({type: 0, url: item.adurl})
          )
        } else if (type === 'click') {
          this.state.classification[type].map(
            item => data.push({type: 2, url: item.adurl})
          )
        } else if (type === 'buy') {
          this.state.classification[type].map(
            item => data.push({type: 1, url: item.adurl})
          )
        } else if (type === 'both') {
          this.state.classification[type].map(
            item => data.push({type: 3, url: item.adurl})
          )
        }
      }
    )
    console.log(data);
    $.ajax({
      url: 'http://www.ju5td0m7m1nd.com:5000/video',
      data,
    })
      .done(
        result => console.log(result)
      )
      .fail(
        () => console.log("Failed to get video")
      )
  }

  setOrder = () => {
    const user = this.props.params.userID;
    const {users} = this.state;
    let order = [];
    const classification = ({
      'none': [],
      'click': [],
      'buy': [],
      'both': [],
    });
    if (Object.keys(users).length) {
      order = Object.keys(users[user]).sort(
        (a, b) => users[user][b].length - users[user][a].length
      );
      const topAds = order.slice(0, 10);

      topAds.map(item => {
        const ad = users[user][item];
        if (ad.click === 0 && ad.buy === 0) {
          classification['none'].push(ad)
        } else if (ad.click === 1 && ad.buy === 0) {
          classification['click'].push(ad)
        } else if (ad.click === 0 && ad.buy === 1) {
          classification['buy'].push(ad)
        } else if (ad.click === 1 && ad.buy === 1) {
          classification['both'].push(ad)
        }
      })
    }
    this.setState({classification})
  }

  render() {
    const user = this.props.params.userID;
    const {users, classification} = this.state;

    return (
      <section>
        <Nav route="review"/>
        <div className="film">

        </div>
        <div className="grid-container">
          <AdGrid subtitle="擦身而過" description="之前你可能忽略了這些廣告，但我們相信這些您可能會需要" ads={classification['none']}/>
          <AdGrid subtitle="曾經相遇" description="你看起來對這些很有興趣，我們幫你找了出來，讓你不會錯過任何東西" ads={classification['click']}/>
          <AdGrid subtitle="透過下列廣告購買更便宜！" description="我們發現你曾經購買這件商品，透過這個廣告將會更便宜" ads={classification['buy']}/>
          <AdGrid subtitle="感謝支持廣告和產品" description="我們發現你曾經透過這些廣告，購買了一些商品，我們會繼續努力提供你最需要的商品廣告"
                  ads={classification['both']}/>
        </div>
        <div className="footer shadow-1">
          扣頂大法師2 x ringo © 2016
        </div>
      </section>
    )
  }
}